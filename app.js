'use strict';

/* ==========================================================
   MANUAL AUTOMOTIVO — app.js (lógica da página)
   Os dados ficam em dados.js: bancoDeDados e especificacoesOleos.
   1 Categorias · 2 Utilidades · 3 Telas · 4 Ficha do veículo
   ========================================================== */

/* ---------- 1. CATEGORIAS DA TELA INICIAL ---------- */
const CATEGORIAS = [
  { slug: 'veiculos-passeio',     titulo: 'Veículos Passeio',     icone: 'fa-car',          cor: '#4f46e5', resumo: 'Chevrolet, Fiat, Ford, Nissan, VW...' },
  { slug: 'veiculos-utilitarios', titulo: 'Veículos Utilitários', icone: 'fa-truck-pickup', cor: '#0284c7', resumo: 'Agrale, Ford, Mitsubishi, Toyota...' },
  { slug: 'caminhoes',            titulo: 'Caminhões',            icone: 'fa-truck',        cor: '#065f46', resumo: 'Ford, Mercedes-Benz, Volkswagen...' },
  { slug: 'onibus-e-vans',        titulo: 'Ônibus e Vans',        icone: 'fa-bus',          cor: '#1e1b4b', resumo: 'Agrale, Mercedes, Fiat, Iveco...' },
  { slug: 'nauticos',             titulo: 'Náuticos',             icone: 'fa-ship',         cor: '#0e7490', resumo: 'Motores marítimos' }
];

const estado = { cat: null, marca: '', modelo: '' };
const $ = id => document.getElementById(id);

/* ---------- 2. UTILIDADES ---------- */
function criarCard({ icone, cor = '#4f46e5', titulo, texto, aoClicar }) {
  const a = document.createElement('a');
  a.className = 'c';
  a.tabIndex = 0;
  a.setAttribute('role', 'button');
  a.innerHTML = `
    <div class="c-header">
      <div class="c-icone" style="color:${cor};background:${cor}15"><i class="fa-solid ${icone}"></i></div>
      <b>${titulo}</b>
    </div>
    <span>${texto}</span>
    <div class="c-arrow"><i class="fa-solid fa-arrow-right"></i></div>`;
  a.addEventListener('click', aoClicar);
  a.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); aoClicar(); }
  });
  return a;
}

function iconeSistema(nome) {
  const n = nome.toLowerCase();
  if (n.includes('motor')) return 'fa-oil-can';
  if (n.includes('câmbio') || n.includes('transmiss')) return 'fa-gears';
  if (n.includes('diferencial') || n.includes('transfer')) return 'fa-gear';
  if (n.includes('direção')) return 'fa-dharmachakra';
  if (n.includes('arrefec')) return 'fa-temperature-low';
  if (n.includes('freio')) return 'fa-circle-stop';
  if (n.includes('cardã')) return 'fa-screwdriver-wrench';
  return 'fa-droplet';
}

// Dados antigos (motor/cambio/diferencial) viram a lista "sistemas"
function normalizarBanco() {
  for (const modelo in especificacoesOleos) {
    const spec = especificacoesOleos[modelo];
    if (Array.isArray(spec.sistemas)) continue;
    const lista = [];
    const add = (nome, o, obs) => lista.push({ sistema: nome, especificacao: o.tipo, norma: '-', capacidade: o.qtd || '-', intervalo: o.intervalo || '-', observacao: obs });
    const dif = spec.diferencial;
    const semDif = dif && /^não se aplica/i.test(dif.tipo || '');
    if (spec.motor && spec.motor.tipo) add('Motor', spec.motor);
    if (spec.cambio && spec.cambio.tipo) add('Câmbio', spec.cambio, semDif ? 'Diferencial: ' + dif.tipo : undefined);
    if (dif && dif.tipo && !semDif) add('Diferencial', dif);
    spec.sistemas = lista;
  }
}

/* ---------- 3. TELAS E NAVEGAÇÃO (com histórico do navegador) ----------
   Cada tela vira um endereço (#categoria/marca/modelo), então o botão
   "voltar" do celular/navegador volta para a tela anterior do manual. */
let timerTela;

function mudarTela(id) {
  clearTimeout(timerTela);
  const atual = document.querySelector('.tela.ativa');
  const alvo = $('tela-' + id);
  if (!alvo) return;
  const mostrar = () => {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa', 'saindo'));
    alvo.classList.add('ativa');
    scrollTo({ top: 0 });
    gerarBreadcrumb(id);
  };
  if (atual && atual !== alvo) { atual.classList.add('saindo'); timerTela = setTimeout(mostrar, 200); }
  else mostrar();
}

function gerarBreadcrumb(telaId) {
  const container = document.querySelector(`#tela-${telaId} .breadcrumb`);
  if (!container) return;
  const crumbs = [{ titulo: '🏠 Início', ir: {} }];
  if (estado.cat) crumbs.push({ titulo: estado.cat.titulo, ir: { slug: estado.cat.slug } });
  if (estado.marca) crumbs.push({ titulo: estado.marca, ir: { slug: estado.cat.slug, marca: estado.marca } });
  if (estado.modelo) crumbs.push({ titulo: estado.modelo });

  container.innerHTML = '';
  crumbs.forEach((item, i) => {
    const ultimo = i === crumbs.length - 1;
    const el = document.createElement('span');
    el.className = 'crumb' + (ultimo ? ' atual' : '');
    el.textContent = item.titulo;
    if (!ultimo) el.addEventListener('click', () => navegar(item.ir));
    container.append(el);
    if (!ultimo) { const s = document.createElement('span'); s.className = 'sep'; s.textContent = '›'; container.append(s); }
  });
}

function renderCategoria(cat) {
  $('titulo-lista').innerHTML = `<i class="fa-solid ${cat.icone}" style="color:${cat.cor}"></i> ${cat.titulo}`;
  const grid = $('grid-lista');
  grid.innerHTML = '';
  const marcas = bancoDeDados[cat.slug].marcas;
  for (const marca in marcas) {
    grid.append(criarCard({
      icone: 'fa-flag', cor: cat.cor, titulo: marca,
      texto: `${marcas[marca].length} modelos disponíveis`,
      aoClicar: () => navegar({ slug: cat.slug, marca })
    }));
  }
}

function renderMarca(cat, marca) {
  $('titulo-lista').innerHTML = `<i class="fa-solid fa-flag" style="color:${cat.cor}"></i> ${marca}`;
  const grid = $('grid-lista');
  grid.innerHTML = '';
  bancoDeDados[cat.slug].marcas[marca].forEach(modelo => {
    grid.append(criarCard({
      icone: 'fa-wrench', cor: cat.cor, titulo: modelo,
      texto: 'Ver fluidos e referências de filtros.',
      aoClicar: () => navegar({ slug: cat.slug, marca, modelo })
    }));
  });
}

// Rota atual lida do endereço: #slug/marca/modelo
function lerRota() {
  const [slug, marca, modelo] = location.hash.slice(1).split('/').filter(Boolean).map(decodeURIComponent);
  return { slug, marca, modelo };
}

function navegar({ slug, marca, modelo } = {}, registrar = true) {
  const cat = CATEGORIAS.find(c => c.slug === slug && bancoDeDados[c.slug]) || null;
  const mar = cat && bancoDeDados[cat.slug].marcas[marca] ? marca : '';
  const mod = mar && bancoDeDados[cat.slug].marcas[mar].includes(modelo) ? modelo : '';
  estado.cat = cat; estado.marca = mar; estado.modelo = mod;

  let tela = 'principal';
  if (mod) { renderConteudo(mod); tela = 'conteudo'; }
  else if (mar) { renderMarca(cat, mar); tela = 'lista'; }
  else if (cat) { renderCategoria(cat); tela = 'lista'; }

  if (registrar) {
    const partes = [cat && cat.slug, mar, mod].filter(Boolean).map(encodeURIComponent);
    history.pushState(null, '', partes.length ? '#' + partes.join('/') : location.pathname + location.search);
  }
  mudarTela(tela);
}

// botão voltar/avançar do navegador
addEventListener('popstate', () => navegar(lerRota(), false));

/* ---------- 4. FICHA DO VEÍCULO ---------- */
function fichaSistema(s) {
  const norma = (s.norma && s.norma !== '-') ? `<div class="sis-nota"><span class="rotulo">Norma</span>${s.norma}</div>` : '';
  const obs = s.observacao ? `<div class="sis-nota"><span class="rotulo obs">Obs.</span>${s.observacao}</div>` : '';
  return `
    <article class="sis">
      <div class="sis-titulo"><i class="fa-solid ${iconeSistema(s.sistema)}"></i>${s.sistema}</div>
      <dl class="sis-dados">
        <div><dt>Especificação</dt><dd class="destaque">${s.especificacao || '-'}</dd></div>
        <div><dt>Capacidade</dt><dd>${s.capacidade || '-'}</dd></div>
        <div><dt>Intervalo de troca</dt><dd>${s.intervalo || '-'}</dd></div>
      </dl>
      ${norma}${obs}
    </article>`;
}

function tabelaFiltros(filtros) {
  if (!filtros) return '<p>Dados de filtros não cadastrados.</p>';
  const marcas = [['original', 'Original (OEM)'], ['tecfil', 'Tecfil'], ['mann', 'Mann'], ['mahle', 'Mahle'], ['wega', 'Wega'], ['fram', 'Fram']];
  const linha = (nome, obj) => !obj ? '' : `
    <tr><td><b>${nome}</b></td>${marcas.map(([k]) =>
      `<td>${obj[k] && obj[k] !== '-' ? `<span class="filtro-tag">${obj[k]}</span>` : '-'}</td>`).join('')}</tr>`;
  return `
    <div class="tabela-container">
      <table class="tabela-filtros">
        <thead><tr><th>Aplicação</th>${marcas.map(([, n]) => `<th>${n}</th>`).join('')}</tr></thead>
        <tbody>${linha('Óleo do Motor', filtros.oleo)}${linha('Filtro de Ar', filtros.ar)}${linha('Combustível', filtros.combustivel)}</tbody>
      </table>
    </div>`;
}

function renderConteudo(modelo) {
  $('titulo-conteudo').textContent = modelo;
  const spec = especificacoesOleos[modelo];
  const alvo = $('conteudo-dinamico');

  if (spec && spec.sistemas && spec.sistemas.length) {
    alvo.innerHTML = `
      <p class="intro">Especificações de fluidos e referência cruzada de filtros:</p>
      ${spec.sistemas.map(fichaSistema).join('')}
      ${spec.filtros ? `<h3 class="secao-titulo"><i class="fa-solid fa-filter"></i> Tabela de Referência de Filtros</h3>
      <div class="filtros-box">${tabelaFiltros(spec.filtros)}</div>` : ''}
      <p class="aviso"><i class="fa-solid fa-triangle-exclamation"></i><span><b>Atenção:</b> os códigos originais e de marcas paralelas podem variar conforme o ano e a versão do motor. Sempre confirme a aplicação no momento da compra.</span></p>`;
  } else {
    alvo.innerHTML = `
      <div class="card-construcao">
        <i class="fa-solid fa-screwdriver-wrench"></i><b>Conteúdo em construção</b>
        <span>As especificações e filtros para o <strong>${modelo}</strong> estarão disponíveis aqui em breve.</span>
      </div>`;
  }
}

/* ---------- INÍCIO ---------- */
normalizarBanco();
CATEGORIAS.filter(cat => bancoDeDados[cat.slug]).forEach(cat => $('grid-home').append(criarCard({
  icone: cat.icone, cor: cat.cor, titulo: cat.titulo, texto: cat.resumo, aoClicar: () => navegar({ slug: cat.slug })
})));
navegar(lerRota(), false);   // abre direto se a página foi aberta com um endereço (#...)
