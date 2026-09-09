document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       BANCO DE DADOS
    ========================================== */

    const bancoDeDados = {
        tab_lubrificacao: {
            categoria: "Sistema de Lubrificação",
            titulo: "Tabela de Lubrificação",
            texto: "Informações sobre tipo de óleo, viscosidade, capacidade do motor, filtro de óleo e intervalo de manutenção."
        },
        luz_pressao: {
            categoria: "Sistema de Lubrificação",
            titulo: "Luz e Pressão",
            texto: "Informações sobre pressão de óleo, interruptor de pressão, functioning da luz de advertência e diagnóstico."
        },
        fusiveis: {
            categoria: "Sistema Elétrico",
            titulo: "Fusíveis e Lâmpadas",
            texto: "Tabela de fusíveis, amperagens, circuitos protegidos e tipos de lâmpadas."
        },
        farol: {
            categoria: "Sistema Elétrico",
            titulo: "Farol e Seta",
            texto: "Funcionamento dos faróis, lanternas, setas, relés e comandos de iluminação."
        },
        tanque: {
            categoria: "Linha Combustível",
            titulo: "Tanque, Filtro e Mangueiras",
            texto: "Componentes responsáveis pelo armazenamento, filtragem e condução do combustível."
        },
        bomba_eletrica: {
            categoria: "Linha Combustível",
            titulo: "Bomba Elétrica",
            texto: "Funcionamento da bomba elétrica de combustível, alimentação, pressão e vazão."
        },
        bomba_engrenagem: {
            categoria: "Linha Combustível",
            titulo: "Bomba de Engrenagem",
            texto: "Funcionamento da bomba mecânica de engrenagens utilizada na alimentação do sistema de combustível."
        },
        valvula_kuv: {
            categoria: "Linha Combustível",
            titulo: "Válvula KUV",
            texto: "Informações técnicas sobre funcionamento, controle hidráulico e atuação da válvula KUV."
        },
        bomba_alta: {
            categoria: "Linha Combustível",
            titulo: "Bomba de Alta Pressão",
            texto: "Funcionamento da bomba de alta pressão do sistema Common Rail."
        },
        tubo_rail: {
            categoria: "Linha Combustível",
            titulo: "Tubo Rail",
            texto: "Funcionamento do acumulador de alta pressão e distribuição do combustível aos injetores."
        },
        valvula_mprop: {
            categoria: "Sensores e Atuadores",
            titulo: "Válvula MProp",
            texto: "Funcionamento da válvula MProp, controle da alimentação da bomba de alta pressão e diagnóstico."
        },
        sensor_rotacao: {
            categoria: "Sensores e Atuadores",
            titulo: "Sensor de Rotação",
            texto: "Funcionamento do sensor de rotação, geração do sinal e diagnóstico."
        },
        sensor_fase: {
            categoria: "Sensores e Atuadores",
            titulo: "Sensor de Fase",
            texto: "Funcionamento do sensor de fase e sua função no sincronismo do motor."
        },
        sensor_pres_adm: {
            categoria: "Sensores e Atuadores",
            titulo: "Sensor de Pressão da Admissão",
            texto: "Funcionamento do sensor de pressão da admissão, alimentação e sinal."
        },
        pedal_acelerador: {
            categoria: "Sensores e Atuadores",
            titulo: "Pedal do Acelerador",
            texto: "Funcionamento do pedal eletrônico, sinais dos sensores e diagnóstico."
        },
        sensor_temp_ecm: {
            categoria: "Sensores e Atuadores",
            titulo: "Sensor de Temperatura ECM",
            texto: "Funcionamento do sensor de temperatura utilizado pelo sistema de gerenciamento eletrônico."
        },
        modulador_turbina: {
            categoria: "Sensores e Atuadores",
            titulo: "Modulador da Turbina",
            texto: "Funcionamento do modulador e controle da pressão da turbina."
        },
        sensor_pres_rail: {
            categoria: "Sensores e Atuadores",
            titulo: "Sensor de Pressão Rail",
            texto: "Funcionamento do sensor de pressão do Rail, alimentação, sinal e diagnóstico."
        },
        bicos_injetores: {
            categoria: "Sensores e Atuadores",
            titulo: "Bicos Injetores",
            texto: "Funcionamento dos injetores, pulverização, retorno, testes e diagnóstico."
        },
        filtros_mangueiras: {
            categoria: "Admissão e Escape",
            titulo: "Filtros e Mangueiras",
            texto: "Filtros de ar, mangueiras de admissão, inspeção e manutenção do sistema."
        },
        turbina: {
            categoria: "Admissão e Escape",
            titulo: "Turbina",
            texto: "Funcionamento do turbocompressor, lubrificação, pressão e diagnóstico."
        },
        bomba_direcao: {
            categoria: "Sistema de Direção",
            titulo: "Bomba de Direção",
            texto: "Funcionamento da bomba hidráulica da direção e diagnóstico."
        },
        caixa_direcao: {
            categoria: "Sistema de Direção",
            titulo: "Caixa de Direção",
            texto: "Funcionamento, regulagem e manutenção da caixa de direção."
        },
        oleo_direcao: {
            categoria: "Sistema de Direção",
            titulo: "Óleo de Direção",
            texto: "Especificação, nível, substituição e manutenção do fluido da direção."
        },
        bomba_vacuo: {
            categoria: "Sistemas de Freios",
            titulo: "Bomba de Vácuo",
            texto: "Funcionamento da bomba de vácuo e sua relação com a assistência dos freios."
        },
        freios_traseiros: {
            categoria: "Sistemas de Freios",
            titulo: "Freios Traseiros / Mão",
            texto: "Funcionamento dos freios traseiros e do sistema de freio de estacionamento."
        }
    };

    /* ==========================================
       FUNÇÃO PARA EXIBIR CONTEÚDO INICIAL
    ========================================== */
    function exibirInicio() {
        const tituloElemento = document.getElementById("titulo-sistema");
        const textoElemento = document.getElementById("texto-sistema");
        
        if (tituloElemento && textoElemento) {
            tituloElemento.textContent = "📚 Bem-vindo ao Manual Técnico";
            textoElemento.textContent = "Selecione uma categoria no menu lateral e clique em um item para visualizar as informações técnicas detalhadas de cada componente automotivo.";
        }

        // Remove destaque de todos os sub-itens
        document.querySelectorAll("[data-conteudo]").forEach(function (btn) {
            btn.classList.remove("sub-ativo");
        });

        // Fecha todos os submenus
        document.querySelectorAll(".submenu").forEach(function (menu) {
            menu.classList.remove("aberto");
        });

        // Remove estado ativo dos botões principais
        document.querySelectorAll(".btn-principal").forEach(function (btn) {
            btn.classList.remove("ativo");
            btn.classList.remove("aberto");
        });

        // Coloca todas as setas para baixo
        document.querySelectorAll(".seta").forEach(function (seta) {
            seta.textContent = "▼";
        });
    }

    /* ==========================================
       ABRIR E FECHAR SUBMENUS
    ========================================== */

    const botoesMenu = document.querySelectorAll(".btn-principal");

    botoesMenu.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const id = botao.getAttribute("data-menu");
            const submenu = document.getElementById(id);

            if (!submenu) {
                console.error("Submenu não encontrado: " + id);
                return;
            }

            const estavaAberto = submenu.classList.contains("aberto");

            /* Fecha todos os submenus */
            document.querySelectorAll(".submenu").forEach(function (menu) {
                menu.classList.remove("aberto");
            });

            /* Retira estado ativo */
            document.querySelectorAll(".btn-principal").forEach(function (btn) {
                btn.classList.remove("ativo");
                btn.classList.remove("aberto");
            });

            /* Coloca todas as setas para baixo */
            document.querySelectorAll(".seta").forEach(function (seta) {
                seta.textContent = "▼";
            });

            /* Abre o submenu clicado */
            if (!estavaAberto) {
                submenu.classList.add("aberto");
                botao.classList.add("ativo");
                botao.classList.add("aberto");

                const seta = botao.querySelector(".seta");
                if (seta) {
                    seta.textContent = "▲";
                }
            }
        });
    });

    /* ==========================================
       MOSTRAR CONTEÚDO
    ========================================== */

    const botoesConteudo = document.querySelectorAll("[data-conteudo]");

    botoesConteudo.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const id = botao.getAttribute("data-conteudo");
            const dados = bancoDeDados[id];

            if (!dados) {
                console.error("Conteúdo não encontrado: " + id);
                return;
            }

            // Exibe as informações do Banco de Dados na tela principal
            const tituloElemento = document.getElementById("titulo-sistema");
            const textoElemento = document.getElementById("texto-sistema");

            if (tituloElemento && textoElemento) {
                tituloElemento.textContent = dados.titulo;
                textoElemento.textContent = dados.texto;
            }

            // Destaca visualmente o botão secundário ativo
            document.querySelectorAll("[data-conteudo]").forEach(function (btn) {
                btn.classList.remove("sub-ativo");
            });
            botao.classList.add("sub-ativo");

            // Fecha automaticamente o menu lateral se o usuário estiver usando celular
            if (window.innerWidth <= 768) {
                alternarMenuLateral();
            }
        });
    });

    /* ==========================================
       CONTROLE DO MENU MOBILE (RESPONSIVO)
    ========================================== */

    const btnMenu = document.getElementById('btn-menu');
    const menuLateral = document.getElementById('menu-lateral');
    const overlay = document.getElementById('overlay');
    const btnTopo = document.getElementById('btn-topo');
    const btnHome = document.getElementById('btn-home');

    function alternarMenuLateral() {
        if (menuLateral && overlay) {
            menuLateral.classList.toggle('menu-visivel');
            overlay.classList.toggle('ativo');
            document.body.style.overflow = menuLateral.classList.contains('menu-visivel') ? 'hidden' : '';
        }
    }

    // Abrir/fechar menu com o botão hambúrguer
    if (btnMenu) {
        btnMenu.addEventListener('click', function(e) {
            e.stopPropagation();
            alternarMenuLateral();
        });
    }

    // Fechar menu ao clicar no overlay
    if (overlay) {
        overlay.addEventListener('click', alternarMenuLateral);
    }

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && menuLateral) {
            menuLateral.classList.remove('menu-visivel');
            if (overlay) overlay.classList.remove('ativo');
            document.body.style.overflow = '';
        }
    });

    /* ==========================================
       BOTÃO INÍCIO - RESETAR PARA TELA INICIAL
    ========================================== */
    if (btnTopo) {
        btnTopo.addEventListener('click', function () {
            exibirInicio();
            
            // Fecha o menu no mobile
            if (window.innerWidth <= 768) {
                alternarMenuLateral();
            }
            
            // Scroll suave para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================
       BOTÃO HOME - RESETAR PARA TELA INICIAL
    ========================================== */
    if (btnHome) {
        btnHome.addEventListener('click', function (e) {
            e.preventDefault();
            exibirInicio();
            
            // Fecha o menu no mobile
            if (window.innerWidth <= 768) {
                alternarMenuLateral();
            }
            
            // Scroll suave para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ==========================================
       EXIBIR TELA INICIAL AO CARREGAR
    ========================================== */
    exibirInicio();

    console.log("✅ Manual Técnico carregado com sucesso!");
    console.log("📚 Total de itens: " + Object.keys(bancoDeDados).length);
});