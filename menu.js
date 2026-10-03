const menuData = [
  {
    titulo: "Sistema Elétrico",
    slug: "sistema-eletrico",
    icone: "fa-bolt",
    grupos: [
      {
        titulo: "Luzes",
        icone: "fa-lightbulb",
        itens: [
          { titulo: "Fusíveis e Lâmpadas", slug: "fusiveis-e-lampadas" },
          { titulo: "Luz de Farol e Posição", slug: "luz-de-farol-e-posicao" },
          { titulo: "Luz de Seta e Alerta", slug: "luz-de-seta-e-alerta" }
        ]
      },
      {
        titulo: "Painel de Instrumentos",
        icone: "fa-gauge",
        itens: [
          { titulo: "Luz e Pressão de Óleo", slug: "luz-e-pressao-de-oleo" },
          { titulo: "Luzes de Injeção", slug: "luzes-de-injecao" },
          { titulo: "Água no Combustível", slug: "agua-no-combustivel" },
          { titulo: "Água de Arrefecimento", slug: "agua-de-arrefecimento" }
        ]
      },
      {
        titulo: "Acessórios",
        icone: "fa-car-battery",
        itens: [
          { titulo: "Bateria", slug: "bateria" },
          { titulo: "Alternador", slug: "alternador" },
          { titulo: "Motor de Partida", slug: "motor-de-partida" },
          { titulo: "Limpador de Para-brisa", slug: "limpador-de-para-brisa" }
        ]
      }
    ]
  },
  {
    titulo: "Alimentação de Combustível",
    slug: "alimentacao-de-combustivel",
    icone: "fa-gas-pump",
    grupos: [
      {
        titulo: "Linha Combustível",
        icone: "fa-filter",
        itens: [
          { titulo: "Tanque, Filtro, Mang.", slug: "tanque-filtro-mang" },
          { titulo: "Bomba Elétrica", slug: "bomba-eletrica" }
        ]
      },
      {
        titulo: "Linha de Alta",
        icone: "fa-gauge-high",
        itens: [
          { titulo: "Bomba Engrenagem", slug: "bomba-engrenagem" },
          { titulo: "Válvula KUV", slug: "valvula-kuv" },
          { titulo: "Bomba Alta Pressão", slug: "bomba-alta-pressao" },
          { titulo: "Tubo Rail", slug: "tubo-rail" }
        ]
      }
    ]
  },
  {
    titulo: "Sistema de Injeção",
    slug: "sistema-de-injecao",
    icone: "fa-microchip",
    grupos: [
      {
        titulo: "Sensores",
        icone: "fa-microchip",
        itens: [
          { titulo: "Sensor Rotação", slug: "sensor-rotacao" },
          { titulo: "Sensor Fase", slug: "sensor-fase" },
          { titulo: "Sensor Pres. Adm", slug: "sensor-pres-adm" },
          { titulo: "Sensor Temp. ECM", slug: "sensor-temp-ecm" },
          { titulo: "Sensor Pres. Rail", slug: "sensor-pres-rail" }
        ]
      },
      {
        titulo: "Atuadores",
        icone: "fa-sliders",
        itens: [
          { titulo: "Válvula MProp", slug: "valvula-mprop" },
          { titulo: "Pedal Acelerador", slug: "pedal-acelerador" },
          { titulo: "Modulador Turbina", slug: "modulador-turbina" },
          { titulo: "Bicos Injetores", slug: "bicos-injetores" },
          { titulo: "Lâmpada Painel", slug: "lampada-painel" }
        ]
      }
    ]
  },
  {
    titulo: "Motor e Chassi",
    slug: "motor-e-chassi",
    icone: "fa-wrench",
    grupos: [
      {
        titulo: "Sistema de Arrefecimento",
        icone: "fa-snowflake",
        itens: [
          { titulo: "Correia e Ventoinha", slug: "correia-e-ventoinha" },
          { titulo: "Bomba de Água", slug: "bomba-de-agua" },
          { titulo: "Trocador de Calor", slug: "trocador-de-calor" },
          { titulo: "Válvula Termostática", slug: "valvula-termostatica" }
        ]
      },
      {
        titulo: "Sistema de Direção",
        icone: "fa-dharmachakra",
        itens: [
          { titulo: "Bomba de Direção", slug: "bomba-de-direcao" },
          { titulo: "Caixa de Direção", slug: "caixa-de-direcao" },
          { titulo: "Óleo de Direção", slug: "oleo-de-direcao" }
        ]
      },
      {
        titulo: "Sistemas de Freios",
        icone: "fa-circle-stop",
        itens: [
          { titulo: "Bomba de Vácuo", slug: "bomba-de-vacuo" },
          { titulo: "Cilindro de Freio", slug: "cilindro-de-freio" },
          { titulo: "Óleo de Freio", slug: "oleo-de-freio" },
          { titulo: "Pinças de Freio", slug: "pincas-de-freio" },
          { titulo: "Regulagem Freio de Mão", slug: "regulagem-freio-de-mao" }
        ]
      }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const navList = document.getElementById('nav-list');
  const pageCard = document.getElementById('page-card');
  const homeBox = document.getElementById('home-box');

  // Renderizar menu lateral
  function renderMenu() {
    let html = '';
    menuData.forEach(cat => {
      html += `
        <li class="nav-item">
          <button class="nav-btn">
            <span class="nav-btn-title">
              <i class="fa-solid ${cat.icone} nav-icon"></i>
              <span>${cat.titulo}</span>
            </span>
            <i class="fa-solid fa-chevron-down arrow-icon"></i>
          </button>
          <div class="submenu">
      `;
      cat.grupos.forEach(grupo => {
        html += `
          <div class="submenu-group">
            <div class="group-title"><i class="fa-solid ${grupo.icone}"></i> ${grupo.titulo}</div>
        `;
        grupo.itens.forEach(item => {
          html += `
            <a href="#${cat.slug}/${item.slug}" class="sidebar-link">
              <i class="fa-solid fa-chevron-right"></i> ${item.titulo}
            </a>
          `;
        });
        html += `</div>`;
      });
      html += `</div></li>`;
    });
    navList.innerHTML = html;
  }

  renderMenu();

  // Accordion (Sanfona) do menu lateral
  document.querySelectorAll('.nav-item').forEach(item => {
    const btn = item.querySelector('.nav-btn');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.toggle('active', !isActive);
    });
  });

  // Gerador da caixa "Neste tópico" (TOC)
  function generateTableOfContents(container) {
    const headings = container.querySelectorAll('h2, h3');
    if (headings.length === 0) return;

    const tocNav = document.createElement('nav');
    tocNav.className = 'toc';
    tocNav.innerHTML = '<strong>Neste tópico</strong>';

    const mainList = document.createElement('ul');
    let currentH2List = null;

    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = 'sec-' + index;

      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetEl = document.getElementById(heading.id);
        if (targetEl) {
          window.scrollTo({
            top: targetEl.getBoundingClientRect().top + window.pageYOffset - 20,
            behavior: 'smooth'
          });
        }
      });

      li.appendChild(link);

      if (heading.tagName.toLowerCase() === 'h2') {
        mainList.appendChild(li);
        currentH2List = document.createElement('ul');
        li.appendChild(currentH2List);
      } else if (heading.tagName.toLowerCase() === 'h3') {
        if (currentH2List) currentH2List.appendChild(li);
        else mainList.appendChild(li);
      }
    });

    tocNav.querySelectorAll('ul').forEach(ul => { if (ul.children.length === 0) ul.remove(); });
    tocNav.appendChild(mainList);

    const firstHeading = container.querySelector('h1, h2');
    if (firstHeading && firstHeading.nextSibling) {
      container.insertBefore(tocNav, firstHeading.nextSibling);
    } else {
      container.prepend(tocNav);
    }
  }

  // Carregar conteúdo
  async function abrirPagina() {
    const path = decodeURIComponent(location.hash.slice(1)).replace(/^\/+/, '');
    if (!path) {
      pageCard.hidden = true;
      homeBox.hidden = false;
      return;
    }

    homeBox.hidden = true;
    pageCard.hidden = false;
    pageCard.innerHTML = '<p class="page-loading">Carregando...</p>';

    try {
      const resp = await fetch(`conteudo/${path}.html`);
      if (!resp.ok) throw new Error(`Página não encontrada (${resp.status})`);
      const htmlContent = await resp.text();

      pageCard.innerHTML = htmlContent;
      generateTableOfContents(pageCard);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      pageCard.innerHTML = `<h1>Erro</h1><p>${err.message}</p>`;
    }
  }

  window.addEventListener('hashchange', abrirPagina);
  abrirPagina();
});
