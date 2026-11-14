// =====================================================================
// COMPATIBILIDADE COM DADOS ANTIGOS
// =====================================================================
function normalizarBanco() {
  for (const modelo in especificacoesOleos) {
    const spec = especificacoesOleos[modelo];
    if (Array.isArray(spec.sistemas)) continue;
    const sistemas = [];
    if (spec.motor && spec.motor.tipo) sistemas.push({ sistema: 'Motor', especificacao: spec.motor.tipo, norma: '-', capacidade: spec.motor.qtd || '-', intervalo: spec.motor.intervalo || '-' });
    if (spec.cambio && spec.cambio.tipo) sistemas.push({ sistema: 'Câmbio', especificacao: spec.cambio.tipo, norma: '-', capacidade: spec.cambio.qtd || '-', intervalo: spec.cambio.intervalo || '-' });
    if (spec.diferencial && spec.diferencial.tipo && spec.diferencial.tipo !== 'Não se aplica') sistemas.push({ sistema: 'Diferencial', especificacao: spec.diferencial.tipo, norma: '-', capacidade: spec.diferencial.qtd || '-', intervalo: spec.diferencial.intervalo || '-' });
    spec.sistemas = sistemas;
  }
}
normalizarBanco();

// =====================================================================
// NAVEGAÇÃO E BUSCA
// =====================================================================
let categoriaAtualSlug = '';
let categoriaAtualTitulo = '';
let marcaAtual = '';
let modeloAtual = '';

function irParaHome(event) {
  if(event) event.preventDefault();
  document.getElementById('input-busca').value = '';
  mudarTela('principal');
}

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
    const card = document.createElement('div');
    card.className = 'c';
    card.onclick = () => abrirMarca(marca);
    card.innerHTML = `
      <div class="c-header">
        <div class="c-icone" style="color:${cor}; background: ${cor}15;"><i class="fa-solid fa-flag"></i></div>
        <b>${marca}</b>
      </div>
      <span>${marcas[marca].length} modelos disponíveis</span>
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
    const card = document.createElement('div');
    card.className = 'c';
    card.onclick = () => abrirConteudo(modelo);
    
    // Auditoria Badge
    let badgeHtml = '';
    if (typeof auditoriaAplicacoes !== 'undefined' && auditoriaAplicacoes[modelo]) {
      const status = auditoriaAplicacoes[modelo].status;
      if (status === 'PARCIAL') badgeHtml = `<div class="badge badge-parcial" title="Dados parcialmente confirmados">Parcial</div>`;
      if (status === 'PENDENTE') badgeHtml = `<div class="badge badge-pendente" title="Requer verificação no manual">Verificar</div>`;
    }

    card.innerHTML = `
      ${badgeHtml}
      <div class="c-header">
        <div class="c-icone"><i class="fa-solid fa-wrench"></i></div>
        <b>${modelo}</b>
      </div>
      <span>Ver fluidos e referências de filtros.</span>
    `;
    gridLista.appendChild(card);
  });
  mudarTela('lista');
}

function buscarVeiculo() {
  const termo = document.getElementById('input-busca').value.toLowerCase().trim();
  const gridBusca = document.getElementById('grid-busca');
  
  if (termo.length < 2) {
    if (document.querySelector('.tela.ativa').id === 'tela-busca') irParaHome();
    return;
  }

  gridBusca.innerHTML = '';
  let resultados = 0;

  for (const catSlug in bancoDeDados) {
    const marcas = bancoDeDados[catSlug].marcas;
    for (const marca in marcas) {
      marcas[marca].forEach(modelo => {
        if (modelo.toLowerCase().includes(termo) || marca.toLowerCase().includes(termo)) {
          resultados++;
          const card = document.createElement('div');
          card.className = 'c';
          card.onclick = () => {
            categoriaAtualSlug = catSlug;
            categoriaAtualTitulo = bancoDeDados[catSlug].titulo;
            marcaAtual = marca;
            abrirConteudo(modelo);
          };
          
          let badgeHtml = '';
          if (typeof auditoriaAplicacoes !== 'undefined' && auditoriaAplicacoes[modelo]) {
            const status = auditoriaAplicacoes[modelo].status;
            if (status === 'PARCIAL') badgeHtml = `<div class="badge badge-parcial">Parcial</div>`;
            if (status === 'PENDENTE') badgeHtml = `<div class="badge badge-pendente">Verificar</div>`;
          }

          card.innerHTML = `
            ${badgeHtml}
            <div class="c-header">
              <div class="c-icone"><i class="fa-solid fa-car"></i></div>
              <b>${modelo}</b>
            </div>
            <span>${marca} • ${bancoDeDados[catSlug].titulo}</span>
          `;
          gridBusca.appendChild(card);
        }
      });
    }
  }

  if (resultados === 0) {
    gridBusca.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#6b7280;">Nenhum veículo encontrado.</p>';
  }
  mudarTela('busca');
}

// =====================================================================
// RENDERIZAÇÃO DA TABELA DE FILTROS
// =====================================================================
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
        <td>${getVal('authomix')}</td>
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
            <th>authomix</th>
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

// =====================================================================
// ABRIR CONTEÚDO (FICHA TÉCNICA)
// =====================================================================
function abrirConteudo(modelo) {
  modeloAtual = modelo;
  const tituloConteudo = document.getElementById('titulo-conteudo');
  const containerConteudo = document.getElementById('conteudo-dinamico');
  
  tituloConteudo.textContent = modelo;
  const spec = especificacoesOleos[modelo];
  
  // Auditoria Alerta
  let alertaAuditoria = '';
  if (typeof auditoriaAplicacoes !== 'undefined' && auditoriaAplicacoes[modelo]) {
    const aud = auditoriaAplicacoes[modelo];
    if (aud.status === 'PARCIAL') {
      alertaAuditoria = `<div class="aviso" style="background:#fef3c7; color:#92400e; padding:10px; border-radius:8px; margin-bottom:16px;"><i class="fa-solid fa-triangle-exclamation"></i> <div><b>Atenção:</b> ${aud.observacao}</div></div>`;
    } else if (aud.status === 'PENDENTE') {
      alertaAuditoria = `<div class="aviso" style="background:#fee2e2; color:#991b1b; padding:10px; border-radius:8px; margin-bottom:16px;"><i class="fa-solid fa-circle-exclamation"></i> <div><b>Atenção:</b> ${aud.observacao}</div></div>`;
    }
  }

  if (spec && spec.sistemas && spec.sistemas.length > 0) {
    
    const cards = spec.sistemas.map(s => {
      let normas = [];
      if (s.norma && s.norma !== '-') normas.push(s.norma);
      if (s.observacao) normas.push(s.observacao);
      const normaHtml = normas.length > 0 ? `<div class="sis-nota"><span class="rotulo">Norma</span> <span>${normas.join(' | ')}</span></div>` : '';

      return `
        <div class="sis">
          <div class="sis-titulo"><i class="fa-solid fa-gear"></i> ${s.sistema}</div>
          <dl class="sis-dados">
            <div>
              <dt>Especificação / Viscosidade</dt>
              <dd class="destaque">${s.especificacao || '-'}</dd>
            </div>
            <div>
              <dt>Capacidade</dt>
              <dd>${s.capacidade || '-'}</dd>
            </div>
            <div>
              <dt>Intervalo de Troca</dt>
              <dd>${s.intervalo || '-'}</dd>
            </div>
          </dl>
          ${normaHtml}
        </div>
      `;
    }).join('');

    containerConteudo.innerHTML = `
      ${alertaAuditoria}
      <p class="intro">Confira abaixo as especificações de fluidos e os códigos de referência cruzada de filtros:</p>
      
      <div class="cards-container">
        ${cards}
      </div>
      
      <h3 class="secao-titulo"><i class="fa-solid fa-filter"></i> Tabela de Referência de Filtros</h3>
      <div class="filtros-box">
        ${criarTabelaFiltros(spec.filtros)}
        <div class="aviso">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span><b>Atenção:</b> Os códigos originais e de marcas paralelas podem variar conforme o ano e a versão do motor. Sempre confirme a aplicação no momento da compra.</span>
        </div>
      </div>
    `;
  } else {
    containerConteudo.innerHTML = `
      <div class="card-construcao">
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
    atual.classList.remove('ativa');
    alvo.classList.add('ativa');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    gerarBreadcrumb(idTela);
  } else {
    alvo.classList.add('ativa');
    gerarBreadcrumb(idTela);
  }
}

function gerarBreadcrumb(telaAtivaId) {
  if (telaAtivaId === 'principal' || telaAtivaId === 'busca') return;
  
  const container = document.querySelector(`#tela-${telaAtivaId} .breadcrumb`);
  if (!container) return;
  
  let crumbs = [];
  crumbs.push({ titulo: '🏠 Início', tela: 'principal' });
  
  if (telaAtivaId === 'lista' || telaAtivaId === 'conteudo') {
    crumbs.push({ titulo: categoriaAtualTitulo, acao: () => abrirCategoria(categoriaAtualTitulo, categoriaAtualSlug, 'fa-car', '#4f46e5') });
    if (marcaAtual) {
      crumbs.push({ titulo: marcaAtual, acao: () => abrirMarca(marcaAtual) });
    }
    if (telaAtivaId === 'conteudo') {
      crumbs.push({ titulo: modeloAtual, atual: true });
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
