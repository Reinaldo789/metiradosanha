/* ==========================================================
   MANUAL AUTOMOTIVO — app.js (Lógica Principal)
   ========================================================== */

const CATEGORIAS = [
  { slug: 'veiculos-passeio',     titulo: 'Veículos Passeio',     icone: 'fa-car',          cor: '#4f46e5', resumo: 'Chevrolet, Fiat, Ford, Nissan, VW...' },
  { slug: 'veiculos-utilitarios', titulo: 'Veículos Utilitários', icone: 'fa-truck-pickup', cor: '#0284c7', resumo: 'Agrale, Ford, Mitsubishi, Toyota...' },
  { slug: 'caminhoes',            titulo: 'Caminhões',            icone: 'fa-truck',        cor: '#065f46', resumo: 'Ford, Mercedes-Benz, Volkswagen...' },
  { slug: 'onibus-e-vans',        titulo: 'Ônibus e Vans',        icone: 'fa-bus',          cor: '#1e1b4b', resumo: 'Agrale, Mercedes, Fiat, Iveco...' }
];

const estado = { cat: null, marca: '', modelo: '' };
const $ = id => document.getElementById(id);

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

function mudarTela(id) {
  const atual = document.querySelector('.tela.ativa');
  const alvo = $('tela-' + id);
  if (!alvo || atual === alvo) return;
  const mostrar = () => {
    if (atual) atual.classList.remove('ativa', 'saindo');
    alvo.classList.add('ativa');
    scrollTo({ top: 0, behavior: 'smooth' });
    gerarBreadcrumb(id);
  };
  if (atual) { atual.classList.add('saindo'); setTimeout(mostrar, 220); } else mostrar();
}

function gerarBreadcrumb(telaId) {
  const container = document.querySelector(`#tela-${telaId} .breadcrumb`);
  if (!container) return;
  const crumbs = [{ titulo: '🏠 Início', acao: () => mudarTela('principal') }];
  if (estado.cat) crumbs.push({ titulo: estado.cat.titulo, acao: () => abrirCategoria(estado.cat) });
  if (estado.marca) crumbs.push({ titulo: estado.marca, acao: () => abrirMarca(estado.marca) });
  if (telaId === 'conteudo') crumbs.push({ titulo: estado.modelo });

  container.innerHTML = '';
  crumbs.forEach((item, i) => {
    const ultimo = i === crumbs.length - 1;
    const el = document.createElement('span');
    el.className = 'crumb' + (ultimo ? ' atual' : '');
    el.textContent = item.titulo;
    if (!ultimo) el.addEventListener('click', item.acao);
    container.append(el);
    if (!ultimo) { const s = document.createElement('span'); s.className = 'sep'; s.textContent = '›'; container.append(s); }
  });
}

function abrirCategoria(cat) {
  estado.cat = cat; estado.marca = ''; estado.modelo = '';
  $('titulo-lista').innerHTML = `<i class="fa-solid ${cat.icone}" style="color:${cat.cor}"></i> ${cat.titulo}`;
  const grid = $('grid-lista');
  grid.innerHTML = '';
  const marcas = bancoDeDados[cat.slug].marcas;
  for (const marca in marcas) {
    grid.append(criarCard({
      icone: 'fa-flag', cor: cat.cor, titulo: marca,
      texto: `${marcas[marca].length} modelos disponíveis`,
      aoClicar: () => abrirMarca(marca)
    }));
  }
  mudarTela('lista');
}

function abrirMarca(marca) {
  estado.marca = marca; estado.modelo = '';
  $('titulo-lista').innerHTML = `<i class="fa-solid fa-flag" style="color:${estado.cat.cor}"></i> ${marca}`;
  const grid = $('grid-lista');
  grid.innerHTML = '';
  bancoDeDados[estado.cat.slug].marcas[marca].forEach(modelo => {
    grid.append(criarCard({
      icone: 'fa-wrench', cor: estado.cat.cor, titulo: modelo,
      texto: 'Ver fluidos e filtros.',
      aoClicar: () => abrirConteudo(modelo)
    }));
  });
  mudarTela('lista');
}

function renderizarTabelaFiltros(filtros) {
  if (!filtros) return '';
  const marcas = [['tecfil', 'Tecfil'], ['mann', 'Mann'], ['wega', 'Wega'], ['fram', 'Fram']];
  const tipos = [
    { chave: 'oleo', nome: 'Óleo do Motor' },
    { chave: 'ar', nome: 'Filtro de Ar' },
    { chave: 'combustivel', nome: 'Combustível' },
    { chave: 'cabine', nome: 'Cabine / Ar Cond.' }
  ];

  let linhasHtml = '';
  tipos.forEach(t => {
    if (filtros[t.chave]) {
      const f = filtros[t.chave];
      linhasHtml += `
        <tr>
          <td><b>${t.nome}</b></td>
          ${marcas.map(([m]) => `<td>${f[m] ? `<span class="filtro-tag">${f[m]}</span>` : '-'}</td>`).join('')}
        </tr>`;
    }
  });

  if (!linhasHtml) return '';

  return `
    <div class="card spec-card mb-3">
      <div class="card-header d-flex align-items-center">
        <i class="fa-solid fa-filter me-2"></i>
        <h5 class="mb-0">Referência Cruzada de Filtros</h5>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-striped mb-0">
            <thead>
              <tr>
                <th>Aplicação</th>
                ${marcas.map(([, nome]) => `<th>${nome}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${linhasHtml}
            </tbody>
          </table>
        </div>
      </div>
    </div>`;
}

function abrirConteudo(modelo) {
  estado.modelo = modelo;
  $('titulo-conteudo').textContent = modelo;
  const spec = especificacoesOleos[modelo];
  const container = $('conteudo-dinamico');

  if (!container) return;
  container.innerHTML = '';

  if (!spec) {
    container.innerHTML = `<div class="card-construcao"><i class="fa-solid fa-screwdriver-wrench"></i><b>Em construção</b><span>Especificações em breve.</span></div>`;
    mudarTela('conteudo');
    return;
  }

  // Blocos de Fluidos
  const secoes = [
    { chave: 'motor', titulo: 'Motor', icone: 'fa-oil-can' },
    { chave: 'cambio', titulo: 'Câmbio', icone: 'fa-cogs' },
    { chave: 'transferencia', titulo: 'Caixa de Transferência / Tração', icone: 'fa-random' },
    { chave: 'diferencial', titulo: 'Diferencial', icone: 'fa-gears' }
  ];

  secoes.forEach(s => {
    if (spec[s.chave]) {
      const info = spec[s.chave];
      const card = document.createElement('div');
      card.className = 'card spec-card mb-3';
      card.innerHTML = `
        <div class="card-header d-flex align-items-center">
          <i class="fa-solid ${s.icone} me-2"></i>
          <h5 class="mb-0">${s.titulo}</h5>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-4">
              <span class="text-muted small text-uppercase fw-bold">Especificação</span>
              <p class="mb-0 fw-semibold">${info.tipo || info.especificacao || '-'}</p>
            </div>
            <div class="col-md-4">
              <span class="text-muted small text-uppercase fw-bold">Capacidade</span>
              <p class="mb-0 fw-semibold">${info.qtd || info.capacidade || '-'}</p>
            </div>
            <div class="col-md-4">
              <span class="text-muted small text-uppercase fw-bold">Intervalo de Troca</span>
              <p class="mb-0 fw-semibold">${info.intervalo || '-'}</p>
            </div>
          </div>
        </div>
      `;
      container.appendChild(card);
    }
  });

  // Renderiza a Tabela de Filtros se existir
  if (spec.filtros) {
    container.insertAdjacentHTML('beforeend', renderizarTabelaFiltros(spec.filtros));
  }

  mudarTela('conteudo');
}

// Inicialização
CATEGORIAS.filter(cat => bancoDeDados[cat.slug]).forEach(cat => {
  $('grid-home').append(criarCard({
    icone: cat.icone, cor: cat.cor, titulo: cat.titulo, texto: cat.resumo,
    aoClicar: () => abrirCategoria(cat)
  }));
});
