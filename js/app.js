import { bancoDeDadosGlobal } from './dados/index.js';

document.addEventListener('DOMContentLoaded', () => {
  const containerResultado = document.getElementById('resultado');
  
  // Exemplo: Se você tiver um seletor de veículos na sua página
  const selectVeiculo = document.getElementById('select-veiculo');
  if (selectVeiculo) {
    preencherSelectVeiculos(selectVeiculo);
    selectVeiculo.addEventListener('change', (e) => {
      if (e.target.value) {
        exibirDadosVeiculo(e.target.value);
      } else {
        containerResultado.innerHTML = '';
      }
    });
  }
});

function preencherSelectVeiculos(selectElement) {
  selectElement.innerHTML = '<option value="">Selecione um veículo...</option>';
  
  Object.keys(bancoDeDadosGlobal).forEach(nomeVeiculo => {
    const option = document.createElement('option');
    option.value = nomeVeiculo;
    option.textContent = nomeVeiculo;
    selectElement.appendChild(option);
  });
}

export function exibirDadosVeiculo(nomeVeiculo) {
  const container = document.getElementById('resultado');
  const dados = bancoDeDadosGlobal[nomeVeiculo];

  if (!dados) {
    container.innerHTML = '<p class="erro">Veículo não encontrado.</p>';
    return;
  }

  // 1. Título do Modelo (Seguindo o padrão .titulo-modelo do style.css)
  let html = `<h2 class="titulo-modelo">${nomeVeiculo}</h2>`;

  // 2. Seção de Sistemas e Fluidos (Usando os cartões .sis do seu CSS)
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

  // 3. Seção de Filtros (Com a classe .filtros-box e .tabela-filtros do seu CSS)
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

  for (const [tipo, f] of Object.entries(dados.filtros)) {
    html += `
      <tr>
        <td><strong>${labelsFiltros[tipo] || tipo}</strong></td>
        <td><span class="filtro-tag">${f.original || '-'}</span></td>
        <td><span class="filtro-tag" style="background:#e0e7ff; border-color:#818cf8;">${f.vox || '-'}</span></td>
        <td>${f.tecfil || '-'}</td>
        <td>${f.authomix || '-'}</td>
        <td>${f.mann || '-'}</td>
        <td>${f.mahle || '-'}</td>
        <td>${f.wega || '-'}</td>
        <td>${f.fram || '-'}</td>
      </tr>
    `;
  }

  html += `
          </tbody>
        </table>
      </div>
    </div>
  `;

  // 4. Notas Técnicas e Condições de Uso (Estilizado com as classes de nota)
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
