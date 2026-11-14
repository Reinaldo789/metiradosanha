import { bancoDeDadosGlobal } from './dados/index.js';
import { veiculosPasseio } from './dados/passeio.js';
import { veiculosUtilitarios } from './dados/utilitarios.js';
import { veiculosCaminhoes } from './dados/caminhoes.js';
import { veiculosVans } from './dados/vans.js';

/* ---------- Categorias ---------- */
const CATEGORIAS = [
  { id: 'todos', nome: 'Todos', dados: bancoDeDadosGlobal },
  { id: 'passeio', nome: 'Passeio', dados: veiculosPasseio },
  { id: 'utilitarios', nome: 'Utilitários', dados: veiculosUtilitarios },
  { id: 'caminhoes', nome: 'Caminhões', dados: veiculosCaminhoes },
  { id: 'vans', nome: 'Vans', dados: veiculosVans }
];

// nome do veículo -> nome da categoria (para mostrar embaixo do botão)
const categoriaDoVeiculo = {};
CATEGORIAS.slice(1).forEach(cat => {
  Object.keys(cat.dados).forEach(nome => { categoriaDoVeiculo[nome] = cat.nome; });
});

const estado = { busca: '', categoria: 'todos', selecionado: null };

/* ---------- Utilidades ---------- */
const normalizar = (txt) =>
  txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

function veiculosFiltrados() {
  const cat = CATEGORIAS.find(c => c.id === estado.categoria);
  const termos = normalizar(estado.busca).split(/\s+/).filter(Boolean);
  return Object.keys(cat.dados).filter(nome => {
    const alvo = normalizar(nome);
    return termos.every(t => alvo.includes(t));
  });
}

/* ---------- Interface de busca ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('busca-veiculo');
  const limpar = document.getElementById('limpar-busca');

  montarCategorias();
  renderizarLista();

  input.addEventListener('input', () => {
    estado.busca = input.value;
    limpar.hidden = !input.value;
    renderizarLista();
  });

  limpar.addEventListener('click', () => {
    input.value = '';
    estado.busca = '';
    limpar.hidden = true;
    renderizarLista();
    input.focus();
  });

  // Enter abre o primeiro resultado
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const lista = veiculosFiltrados();
      if (lista.length) selecionarVeiculo(lista[0]);
    }
  });

  // Link direto: index.html#Toyota%20Hilux%203.0
  const hash = decodeURIComponent(location.hash.slice(1));
  if (hash && bancoDeDadosGlobal[hash]) selecionarVeiculo(hash, false);
});

function montarCategorias() {
  const box = document.getElementById('categorias');
  box.innerHTML = '';
  CATEGORIAS.forEach(cat => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip' + (cat.id === estado.categoria ? ' ativo' : '');
    btn.innerHTML = `${cat.nome}<small>${Object.keys(cat.dados).length}</small>`;
    btn.addEventListener('click', () => {
      estado.categoria = cat.id;
      montarCategorias();
      renderizarLista();
    });
    box.appendChild(btn);
  });
}

function renderizarLista() {
  const lista = document.getElementById('lista-veiculos');
  const contador = document.getElementById('contador');
  const nomes = veiculosFiltrados();

  contador.textContent = nomes.length === 1
    ? '1 veículo encontrado'
    : `${nomes.length} veículos encontrados`;

  lista.innerHTML = '';

  if (!nomes.length) {
    lista.innerHTML = '<p class="sem-resultado">Nenhum veículo encontrado. Tente outro termo ou outra categoria.</p>';
    return;
  }

  nomes.forEach(nome => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'veiculo-btn' + (nome === estado.selecionado ? ' ativo' : '');
    const small = document.createElement('small');
    small.textContent = categoriaDoVeiculo[nome] || '';
    btn.append(document.createTextNode(nome), small);
    btn.addEventListener('click', () => selecionarVeiculo(nome));
    lista.appendChild(btn);
  });
}

function selecionarVeiculo(nome, rolar = true) {
  estado.selecionado = nome;
  history.replaceState(null, '', '#' + encodeURIComponent(nome));
  renderizarLista();
  exibirDadosVeiculo(nome);
  if (rolar) {
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ---------- Ficha do veículo ---------- */
export function exibirDadosVeiculo(nomeVeiculo) {
  const container = document.getElementById('resultado');
  const dados = bancoDeDadosGlobal[nomeVeiculo];

  if (!dados) {
    container.innerHTML = '<p class="erro">Veículo não encontrado.</p>';
    return;
  }

  let html = `<h2 class="titulo-modelo">${nomeVeiculo}</h2>`;

  html += `<h3 class="secao-titulo"><i class="fas fa-oil-can"></i> Fluidos e Sistemas</h3>`;

  dados.sistemas.forEach(sis => {
    html += `
      <div class="sis">
        <div class="sis-titulo">
          <i class="fas fa-cog"></i> <span>${sis.sistema}</span>
        </div>
        <dl class="sis-dados">
          <div>
            <dt>Especificação / Norma</dt>
            <dd class="destaque">${sis.especificacao}</dd>
          </div>
          <div>
            <dt>Capacidade</dt>
            <dd>${sis.capacidade}</dd>
          </div>
          <div>
            <dt>Intervalo / Troca</dt>
            <dd>${sis.intervalo}</dd>
          </div>
        </dl>
      </div>
    `;
  });

  html += `
    <h3 class="secao-titulo"><i class="fas fa-filter"></i> Tabela de Equivalência de Filtros</h3>
    <div class="filtros-box">
      <div class="tabela-container">
        <table class="tabela-filtros">
          <thead>
            <tr>
              <th>Componente</th>
              <th>Original / OE</th>
              <th>Vox</th>
              <th>Tecfil</th>
              <th>Authomix</th>
              <th>Mann</th>
              <th>Mahle</th>
              <th>Wega</th>
              <th>Fram</th>
            </tr>
          </thead>
          <tbody>
  `;

  const labelsFiltros = {
    oleo: 'Óleo do Motor',
    ar: 'Ar do Motor',
    combustivel: 'Combustível',
    cabine: 'Cabine (A/C)'
  };

  const tag = (v) => `<td><span class="filtro-tag">${v || '-'}</span></td>`;

  for (const [tipo, f] of Object.entries(dados.filtros)) {
    html += `
      <tr>
        <td><strong>${labelsFiltros[tipo] || tipo}</strong></td>
        ${tag(f.original)}
        ${tag(f.vox)}
        ${tag(f.tecfil)}
        ${tag(f.authomix)}
        ${tag(f.mann)}
        ${tag(f.mahle)}
        ${tag(f.wega)}
        ${tag(f.fram)}
      </tr>
    `;
  }

  html += `
          </tbody>
        </table>
      </div>
    </div>
  `;

  if (dados.notas && Object.keys(dados.notas).length > 0) {
    html += `
      <h3 class="secao-titulo"><i class="fas fa-info-circle"></i> Notas Técnicas e Condições de Uso</h3>
      <div class="filtros-box" style="background:#f8fafc;">
        <ul style="margin:0; padding-left:20px; line-height:1.6; font-size:14px;">
    `;
    for (const [num, texto] of Object.entries(dados.notas)) {
      html += `<li style="margin-bottom:8px;"><strong>[${num}]</strong> ${texto}</li>`;
    }
    html += `</ul></div>`;
  }

  container.innerHTML = html;
}
