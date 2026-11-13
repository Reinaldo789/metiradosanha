/* ==========================================================
   MANUAL AUTOMOTIVO — app.js (Lógica de Renderização)
   ========================================================== */

const CATEGORIAS = [
  { slug: 'veiculos-passeio',     titulo: 'Veículos Passeio',     icone: 'fa-car',          cor: '#4f46e5', resumo: 'Chevrolet, Fiat, Ford, Nissan, VW...' },
  { slug: 'veiculos-utilitarios', titulo: 'Veículos Utilitários', icone: 'fa-truck-pickup', cor: '#0284c7', resumo: 'Agrale, Ford, Mitsubishi, Toyota...' },
  { slug: 'caminhoes',            titulo: 'Caminhões',            icone: 'fa-truck',        cor: '#065f46', resumo: 'Ford, Mercedes-Benz, Volkswagen...' },
  { slug: 'onibus-e-vans',        titulo: 'Ônibus e Vans',        icone: 'fa-bus',          cor: '#1e1b4b', resumo: 'Agrale, Mercedes, Fiat, Iveco...' },
  { slug: 'nauticos',             titulo: 'Náuticos',             icone: 'fa-ship',         cor: '#0e7490', resumo: 'Motores marítimos' }
];

const estado = { cat: null, marca: '', modelo: '' };
const $ = id => document.getElementById(id);

function obterConfigSecao(chave) {
  switch(chave) {
    case 'motor':
      return { icone: 'fa-oil-can', titulo: 'Motor' };
    case 'cambio':
      return { icone: 'fa-cogs', titulo: 'Câmbio' };
    case 'transferencia':
      return { icone: 'fa-random', titulo: 'Caixa de Transferência / Tração' };
    case 'diferencial':
      return { icone: 'fa-gears', titulo: 'Diferencial' };
    case 'filtros':
      return { icone: 'fa-filter', titulo: 'Referência Cruzada de Filtros' };
    default:
      return { icone: 'fa-wrench', titulo: chave.toUpperCase() };
  }
}

function renderizarFichaTecnica(modeloNome) {
  const dadosModelo = especificacoesOleos[modeloNome];
  const container = document.getElementById('conteudo-dinamico');
  if (!container || !dadosModelo) return;

  container.innerHTML = '';

  // Ordem lógica para exibir os componentes na tela
  const ordemChaves = ['motor', 'cambio', 'transferencia', 'diferencial', 'filtros'];

  ordemChaves.forEach(chave => {
    if (dadosModelo[chave]) {
      const info = dadosModelo[chave];
      const cfg = obterConfigSecao(chave);

      const card = document.createElement('div');
      card.className = 'card spec-card mb-3';

      if (chave === 'filtros') {
        // Bloco especial para filtros
        card.innerHTML = `
          <div class="card-header d-flex align-items-center">
            <i class="fa-solid ${cfg.icone} me-2"></i>
            <h5 class="mb-0">${cfg.titulo}</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3"><span class="text-muted small text-uppercase fw-bold">Óleo</span><p class="mb-0 fw-semibold">${info.oleo || '-'}</p></div>
              <div class="col-md-3"><span class="text-muted small text-uppercase fw-bold">Ar</span><p class="mb-0 fw-semibold">${info.ar || '-'}</p></div>
              <div class="col-md-3"><span class="text-muted small text-uppercase fw-bold">Combustível</span><p class="mb-0 fw-semibold">${info.combustivel || '-'}</p></div>
              <div class="col-md-3"><span class="text-muted small text-uppercase fw-bold">Cabine</span><p class="mb-0 fw-semibold">${info.cabine || '-'}</p></div>
            </div>
          </div>
        `;
      } else {
        // Blocos padrão de fluidos (Motor, Câmbio, Transferência, Diferencial)
        card.innerHTML = `
          <div class="card-header d-flex align-items-center">
            <i class="fa-solid ${cfg.icone} me-2"></i>
            <h5 class="mb-0">${cfg.titulo}</h5>
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
      }
      container.appendChild(card);
    }
  });
}
