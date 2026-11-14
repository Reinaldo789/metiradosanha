// =====================================================================
// COMPATIBILIDADE COM DADOS ANTIGOS (motor/cambio/diferencial)
// =====================================================================
function normalizarBanco() {
  for (const modelo in especificacoesOleos) {
    const spec = especificacoesOleos[modelo];
    if (Array.isArray(spec.sistemas)) continue;
    const sistemas = [];
    if (spec.motor && spec.motor.tipo) {
      sistemas.push({ sistema: 'Motor', especificacao: spec.motor.tipo, norma: '-', capacidade: spec.motor.qtd || '-', intervalo: spec.motor.intervalo || '-' });
    }
    if (spec.cambio && spec.cambio.tipo) {
      sistemas.push({ sistema: 'Câmbio', especificacao: spec.cambio.tipo, norma: '-', capacidade: spec.cambio.qtd || '-', intervalo: spec.cambio.intervalo || '-' });
    }
    if (spec.diferencial && spec.diferencial.tipo && spec.diferencial.tipo !== 'Não se aplica') {
      sistemas.push({ sistema: 'Diferencial', especificacao: spec.diferencial.tipo, norma: '-', capacidade: spec.diferencial.qtd || '-', intervalo: spec.diferencial.intervalo || '-' });
    }
    spec.sistemas = sistemas;
  }
}
normalizarBanco();

// =====================================================================
// LÓGICA DE NAVEGAÇÃO
// =====================================================================
let categoriaAtualSlug = '';
let categoriaAtualTitulo = '';
let marcaAtual = '';
let modeloAtual = '';

function abrirCategoria(titulo, slug, icone, cor) {
  categoriaAtualSlug = slug;
  categoriaAtualTitulo = titulo;
  marcaAtual = '';
  const tituloLista = document.getElementById('titulo-lista');
  const gridLista = document.getElementById('grid-lista');
  tituloLista.innerHTML = `<i class="fa-solid ${icone}" style="color:${cor};"></i> ${titulo}`;
  gridLista.innerHTML = '';
  const marcas = bancoDeDados[slug].marcas;
  for (const marca in marcas) {
    const card = document.createElement('a');
    card.className = 'c';
    card.onclick = () => abrirMarca(marca);
    card.innerHTML = `
      <div class="c-header">
        <div class="c-icone" style="color:${cor}; background: ${cor}15;"><i class="fa-solid fa-flag"></i></div>
        <b>${marca}</b>
      </div>
      <span>${marcas[marca].length} modelos disponíveis</span>
      <div class="c-arrow"><i class="fa-solid fa-arrow-right"></i></div>
    `;
    gridLista.appendChild(card);
  }
  mudarTela('lista');
}

function abrirMarca(marca) {
  marcaAtual = marca;
  const tituloLista = document.getElementById('titulo-lista');
  const gridLista = document.getElementById('grid-lista');
  tituloLista.innerHTML = `<i class="fa-solid fa-flag"></i> ${marca}`;
  gridLista.innerHTML = '';
  const modelos = bancoDeDados[categoriaAtualSlug].marcas[marca];
  modelos.forEach(modelo => {
    const card = document.createElement('a');
    card.className = 'c';
    card.onclick = () => abrirConteudo(modelo);
    card.innerHTML = `
      <div class="c-header">
        <div class="c-icone"><i class="fa-solid fa-wrench"></i></div>
        <b>${modelo}</b>
      </div>
      <span>Ver fluidos e referências de filtros.</span>
      <div class="c-arrow"><i class="fa-solid fa-arrow-right"></i></div>
    `;
    gridLista.appendChild(card);
  });
  mudarTela('lista');
}

// --- RENDERIZAÇÃO DA TABELA DE FILTROS ATUALIZADA ---
function criarTabelaFiltros(filtros) {
  if (!filtros) return '<p>Dados de filtros não cadastrados.</p>';
  
  const renderLinha = (nome, obj) => {
    if (!obj) return '';
    const getVal = (k) => (obj[k] && obj[k] !== '-') ? `<span class="filtro-tag">${obj[k]}</span>` : '-';
    
    return `
      <tr>
        <td><b>${nome}</b></td>
        <td>${getVal('original')}</td>
        <td>${getVal('tecfil')}</td>
        <td>${getVal('mann')}</td>
        <td>${getVal('mahle')}</td>
        <td>${getVal('wega')}</td>
        <td>${getVal('fram')}</td>
        <td>${getVal('bosch')}</td>
        <td>${getVal('vox')}</td>
        <td>${getVal('mwm')}</td>
      </tr>
    `;
  };
  
  return `
    <div class="tabela-container">
      <table class="tabela-filtros">
        <thead>
          <tr>
            <th>Aplicação</th>
            <th>Original (OEM)</th>
            <th>Tecfil</th>
            <th>Mann</th>
            <th>Mahle</th>
            <th>Wega</th>
            <th>Fram</th>
            <th>Bosch</th>
            <th>Vox</th>
            <th>MWM</th>
          </tr>
        </thead>
        <tbody>
          ${renderLinha('Óleo do Motor', filtros.oleo)}
          ${renderLinha('Filtro de Ar', filtros.ar)}
          ${renderLinha('Combustível', filtros.combustivel)}
          ${filtros.cabine ? renderLinha('Cabine / Ar Cond.', filtros.cabine) : ''}
        </tbody>
      </table>
    </div>
  `;
}

function abrirConteudo(modelo) {
  modeloAtual = modelo;
  const tituloConteudo = document.getElementById('titulo-conteudo');
  const containerConteudo = document.getElementById('conteudo-dinamico');
  
  tituloConteudo.textContent = modelo;
  const spec = especificacoesOleos[modelo];
  
  if (spec && spec.sistemas && spec.sistemas.length > 0) {
    
    const cards = spec.sistemas.map(s => {
      let normas = [];
      if (s.norma && s.norma !== '-') normas.push(s.norma);
      if (s.observacao) normas.push(s.observacao);
      const normaHtml = normas.length > 0 ? `<div class="sistema-norma"><b>Norma / Observação:</b> ${normas.join(' | ')}</div>` : '';

      return `
        <div class="card-sistema">
          <div class="sistema-titulo">${s.sistema}</div>
          <table class="tabela-card">
            <thead>
              <tr>
                <th>Especificação / Viscosidade</th>
                <th>Capacidade</th>
                <th>Intervalo de Troca</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>${s.especificacao || '-'}</b></td>
                <td>${s.capacidade || '-'}</td>
                <td>${s.intervalo || '-'}</td>
              </tr>
            </tbody>
          </table>
          ${normaHtml}
        </div>
      `;
    }).join('');

    containerConteudo.innerHTML = `
      <div style="background: transparent; padding: 0;">
        <p style="margin-top:0; margin-bottom: 16px; color:#5b6275; font-size: 14px;">Confira abaixo as especificações de fluidos e os códigos de referência cruzada de filtros:</p>
        
        <div class="cards-container">
          ${cards}
        </div>
        
        <h3 style="color: #3730a3; font-size: 18px; margin-top: 32px; margin-bottom: 12px;">
          <i class="fa-solid fa-filter"></i> Tabela de Referência de Filtros
        </h3>
        <div style="background: #fff; border-radius: 12px; padding: 16px; border: 1px solid var(--border);">
          ${criarTabelaFiltros(spec.filtros)}
        </div>
        
        <p style="font-size: 12px; color: #b45309; margin-top: 16px;">
          <i class="fa-solid fa-triangle-exclamation"></i> <b>Atenção:</b> Os códigos originais e de marcas paralelas podem variar conforme o ano e a versão do motor. Sempre confirme a aplicação no momento da compra.
        </p>
      </div>
    `;
  } else {
    containerConteudo.innerHTML = `
      <div class="card-construcao" style="text-align: center;">
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <b>Conteúdo em construção</b>
        <span>As especificações e filtros para o <strong>${modelo}</strong> estarão disponíveis aqui em breve.</span>
      </div>
    `;
  }
  
  mudarTela('conteudo');
}

// =====================================================================
// TROCA DE TELAS E BREADCRUMB
// =====================================================================
function mudarTela(idTela) {
  const atual = document.querySelector('.tela.ativa');
  const alvo = document.getElementById('tela-' + idTela);
  if (!alvo || atual === alvo) return;
  if (atual) {
    atual.classList.add('saindo');
    setTimeout(() => {
      atual.classList.remove('ativa', 'saindo');
      alvo.classList.add('ativa');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      gerarBreadcrumb(idTela);
    }, 220);
  } else {
    alvo.classList.add('ativa');
    gerarBreadcrumb(idTela);
  }
}

function gerarBreadcrumb(telaAtivaId) {
  const container = document.querySelector(`#tela-${telaAtivaId} .breadcrumb`);
  if (!container) return;
  let crumbs = [];
  crumbs.push({ titulo: '🏠 Início', tela: 'principal' });
  if (telaAtivaId === 'lista' || telaAtivaId === 'conteudo') {
    crumbs.push({ titulo: categoriaAtualTitulo, tela: 'lista', acao: () => abrirCategoria(categoriaAtualTitulo, categoriaAtualSlug, 'fa-car', '#4f46e5') });
    if (marcaAtual) {
      crumbs.push({ titulo: marcaAtual, tela: 'lista', acao: () => abrirMarca(marcaAtual) });
    }
    if (telaAtivaId === 'conteudo') {
      crumbs.push({ titulo: modeloAtual, tela: 'conteudo' });
    }
  }
  container.innerHTML = '';
  crumbs.forEach((item, index) => {
    const isUltimo = index === crumbs.length - 1;
    const crumb = document.createElement('span');
    crumb.className = 'crumb' + (isUltimo ? ' atual' : '');
    crumb.innerHTML = item.titulo;
    if (!isUltimo) {
      crumb.onclick = item.acao ? item.acao : () => mudarTela(item.tela);
    }
    container.appendChild(crumb);
    if (!isUltimo) {
      const sep = document.createElement('span');
      sep.className = 'sep';
      sep.textContent = '›';
      container.appendChild(sep);
    }
  });
}
