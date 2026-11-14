import { bancoDeDadosGlobal } from './dados/index.js';

document.addEventListener('DOMContentLoaded', () => {
  const selectVeiculo = document.getElementById('select-veiculo'); // Caso tenha um <select> no HTML
  const inputBusca = document.getElementById('input-busca');       // Caso tenha um campo de texto/busca
  const containerResultado = document.getElementById('resultado'); // Onde os dados serão injetados

  // 1. Inicializar preenchendo opções se houver um select
  if (selectVeiculo) {
    preencherSelectVeiculos(selectVeiculo);
    selectVeiculo.addEventListener('change', (e) => {
      exibirDadosVeiculo(e.target.value);
    });
  }

  // Ou busca por digitação
  if (inputBusca) {
    inputBusca.addEventListener('input', (e) => {
      const termo = e.target.value.trim();
      if (termo.length > 2) {
        // Exemplo simples de busca por aproximação
        const encontrado = Object.keys(bancoDeDadosGlobal).find(v => v.toLowerCase().includes(termo.toLowerCase()));
        if (encontrado) exibirDadosVeiculo(encontrado);
      }
    });
  }
});

function preencherSelectVeiculos(selectElement) {
  // Limpa e adiciona opção padrão
  selectElement.innerHTML = '<option value="">Selecione um veículo...</option>';
  
  Object.keys(bancoDeDadosGlobal).forEach(nomeVeiculo => {
    const option = document.createElement('option');
    option.value = nomeVeiculo;
    option.textContent = nomeVeiculo;
    selectElement.appendChild(option);
  });
}

function exibirDadosVeiculo(nomeVeiculo) {
  const container = document.getElementById('resultado');
  const dados = bancoDeDadosGlobal[nomeVeiculo];

  if (!dados) {
    container.innerHTML = '<p class="erro">Veículo não encontrado na base de dados.</p>';
    return;
  }

  // 2. Montar a tabela de Sistemas (Motor, Câmbio, Arrefecimento, etc.)
  let htmlSistemas = `
    <h2>${nomeVeiculo}</h2>
    <h3>Fluidos e Sistemas</h3>
    <table class="tabela-tecnica">
      <thead>
        <tr>
          <th>Sistema</th>
          <th>Especificação / Norma</th>
          <th>Capacidade</th>
          <th>Intervalo / Troca</th>
        </tr>
      </thead>
      <tbody>
  `;

  dados.sistemas.forEach(sis => {
    htmlSistemas += `
      <tr>
        <td><strong>${sis.sistema}</strong></td>
        <td>${sis.especificacao}</td>
        <td>${sis.capacidade}</td>
        <td>${sis.intervalo}</td>
      </tr>
    `;
  });

  htmlSistemas += `</tbody></table>`;

  // 3. Montar a tabela de Filtros (Cruzamento completo com Vox, Tecfil, Mann, etc.)
  let htmlFiltros = `
    <h3>Tabela de Equivalência de Filtros</h3>
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

  const labelsFiltros = { oleo: 'Óleo', ar: 'Ar do Motor', combustivel: 'Combustível', cabine: 'Cabine (A/C)' };

  for (const [tipo, f] of Object.entries(dados.filtros)) {
    htmlFiltros += `
      <tr>
        <td><strong>${labelsFiltros[tipo] || tipo}</strong></td>
        <td>${f.original || '-'}</td>
        <td class="destaque-vox">${f.vox || '-'}</td>
        <td>${f.tecfil || '-'}</td>
        <td>${f.authomix || '-'}</td>
        <td>${f.mann || '-'}</td>
        <td>${f.mahle || '-'}</td>
        <td>${f.wega || '-'}</td>
        <td>${f.fram || '-'}</td>
      </tr>
    `;
  }

  htmlFiltros += `</tbody></table>`;

  // 4. Montar as Notas Técnicas / Condições de Uso Numeradas (Estilo Rodapé)
  let htmlNotas = '';
  if (dados.notas && Object.keys(dados.notas).length > 0) {
    htmlNotas = `
      <div class="bloco-notas-tecnicas">
        <h4>Notas Técnicas e Condições de Uso:</h4>
        <ul>
    `;
    for (const [num, texto] of Object.entries(dados.notas)) {
      htmlNotas += `<li><strong>[${num}]</strong> ${texto}</li>`;
    }
    htmlNotas += `</ul></div>`;
  }

  // Injeta tudo na página
  container.innerHTML = htmlSistemas + htmlFiltros + htmlNotas;
}
