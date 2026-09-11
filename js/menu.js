document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu-lateral");
    const overlay = document.getElementById("overlay");
    const botaoMenu = document.getElementById("btn-menu");
    const botaoInicio = document.getElementById("btn-inicio");
    const botoesPrincipais = document.querySelectorAll(".btn-principal");
    const botoesConteudo = document.querySelectorAll("[data-conteudo]");

    // Elementos da área de conteúdo principal
    const tituloSistema = document.getElementById("titulo-sistema");
    const categoriaSistema = document.getElementById("categoria-sistema");
    const textoSistema = document.getElementById("texto-sistema");

    // Banco de conteúdos para exibição dinâmica
    const conteudos = {
        "tab_lubrificacao": {
            titulo: "Tabela de Lubrificação",
            categoria: "Sistema de Lubrificação",
            texto: "Especificações técnicas para troca de óleo, viscosidades recomendadas (ex: 5W30, 10W40) e intervalos de manutenção preventiva."
        },
        "luz_pressao": {
            titulo: "Luz e Pressão de Óleo",
            categoria: "Sistema de Lubrificação",
            texto: "Diagnóstico do interruptor de pressão do óleo, níveis críticos de operação e procedimentos em caso de alerta no painel."
        },
        "fusiveis": {
            titulo: "Fusíveis e Lâmpadas",
            categoria: "Sistema Elétrico",
            texto: "Mapeamento da caixa de fusíveis, amperagens corretas e tabela de equivalência para substituição de lâmpadas."
        },
        "farol": {
            titulo: "Farol e Seta",
            categoria: "Sistema Elétrico",
            texto: "Esquema elétrico dos faróis principais, milha e relés do sistema de sinalização de direção."
        },
        "tanque": {
            titulo: "Tanque, Filtro e Mangueiras",
            categoria: "Linha Combustível",
            texto: "Especificações da linha de baixa pressão, substituição do filtro primário e alívio de pressão do sistema."
        },
        "bomba_eletrica": {
            titulo: "Bomba Elétrica",
            categoria: "Linha Combustível",
            texto: "Procedimentos de teste de vazão e pressão da bomba do tanque, além do esquema de alimentação elétrica."
        },
        "bomba_engrenagem": {
            titulo: "Bomba de Engrenagem",
            categoria: "Linha Combustível",
            texto: "Manutenção e verificação de desgaste nas engrenagens de transferência de combustível."
        },
        "valvula_kuv": {
            titulo: "Válvula KUV",
            categoria: "Linha Combustível",
            texto: "Função, testes de estanqueidade e regulagem da válvula de retenção e retorno."
        },
        "bomba_alta": {
            titulo: "Bomba de Alta Pressão",
            categoria: "Linha Combustível",
            texto: "Cuidados com o sistema Common Rail, sincronismo mecânico e tolerâncias da bomba de alta."
        },
        "tubo_rail": {
            titulo: "Tubo Rail",
            categoria: "Linha Combustível",
            texto: "Inspeção da flauta de distribuição, sensor de pressão acoplado e substituição das tubulações rígidas."
        },
        "valvula_mprop": {
            titulo: "Válvula MProp",
            categoria: "Sensores e Atuadores",
            texto: "Sinais PWM de controle, medição de resistência da solenoide e código de falhas associados à dosagem."
        },
        "sensor_rotacao": {
            titulo: "Sensor de Rotação (CKP)",
            categoria: "Sensores e Atuadores",
            texto: "Medição do sinal indutivo/Hall da roda fônica, gap de instalação e sincronismo com a fase."
        },
        "sensor_fase": {
            titulo: "Sensor de Fase (CMP)",
            categoria: "Sensores e Atuadores",
            texto: "Verificação do sinal de posição do comando de válvulas para alinhamento da injeção."
        },
        "sensor_pres_adm": {
            titulo: "Sensor de Pressão de Admissão (MAP)",
            categoria: "Sensores e Atuadores",
            texto: "Tabela de tensão vs. pressão (bar), limpeza do elemento sensor e diagnóstico de entradas falsas de ar."
        },
        "pedal_acelerador": {
            titulo: "Pedal do Acelerador",
            categoria: "Sensores e Atuadores",
            texto: "Pistas do potenciômetro duplo, tensão de referência de 5V e calibração via scanner."
        },
        "sensor_temp_ecm": {
            titulo: "Sensor de Temp. ECM (CLT)",
            categoria: "Sensores e Atuadores",
            texto: "Curva NTC de resistência por temperatura e identificação de curtos na fiação do módulo."
        },
        "modulador_turbina": {
            titulo: "Modulador da Turbina",
            categoria: "Sensores e Atuadores",
            texto: "Controle da geometria variável (VGT) via vácuo/eletrovalvula e testes de atuador elétrico."
        },
        "sensor_pres_rail": {
            titulo: "Sensor de Pressão do Rail",
            categoria: "Sensores e Atuadores",
            texto: "Leitura de alta pressão em tempo real (bar) e identificação de picos fora da especificação."
        },
        "bicos_injetores": {
            titulo: "Bicos Injetores",
            categoria: "Sensores e Atuadores",
            texto: "Códigos IMA/QR para codificação na ECM, teste de retorno e estanqueidade das agulhas."
        },
        "filtros_mangueiras": {
            titulo: "Filtros e Mangueiras",
            categoria: "Admissão e Escape",
            texto: "Inspeção visual da tubulação do intercooler, filtro de ar primário e vedações de entrada."
        },
        "turbina": {
            titulo: "Turbina e Sobrealimentação",
            categoria: "Admissão e Escape",
            texto: "Folga axial/radial do eixo do turbo, verificação do coletor de escape e vazamentos de óleo."
        },
        "bomba_direcao": {
            titulo: "Bomba de Direção",
            categoria: "Sistema de Direção",
            texto: "Pressão de trabalho da bomba hidráulica, ruídos característicos e sangria do circuito."
        },
        "caixa_direcao": {
            titulo: "Caixa de Direção",
            categoria: "Sistema de Direção",
            texto: "Ajuste de cremalheira, substituição de coifas de proteção e pontos de lubrificação."
        },
        "oleo_direcao": {
            titulo: "Óleo de Direção",
            categoria: "Sistema de Direção",
            texto: "Fluido recomendado (ATF / Hidráulico), volume total do sistema e periodicidade de substituição."
        },
        "bomba_vacuo": {
            titulo: "Bomba de Vácuo",
            categoria: "Sistemas de Freios",
            texto: "Medição da depressão gerada para o hidrovácuo e inspeção do acoplamento mecânico."
        },
        "freios_traseiros": {
            titulo: "Freios Traseiros e Mão",
            categoria: "Sistemas de Freios",
            texto: "Regulagem do freio de estacionamento, espessura mínima de lonas/pastilhas e tambores/discos."
        }
    };

    const fecharMenu = () => {
        menu?.classList.remove("menu-visivel");
        overlay?.classList.remove("ativo");
        botaoMenu?.setAttribute("aria-expanded", "false");
    };

    const abrirMenu = () => {
        menu?.classList.add("menu-visivel");
        overlay?.classList.add("ativo");
        botaoMenu?.setAttribute("aria-expanded", "true");
    };

    botaoMenu?.addEventListener("click", () => {
        menu?.classList.contains("menu-visivel") ? fecharMenu() : abrirMenu();
    });

    overlay?.addEventListener("click", fecharMenu);

    botoesPrincipais.forEach((botao) => {
        botao.setAttribute("aria-expanded", "false");
        botao.addEventListener("click", () => {
            const submenu = document.getElementById(botao.dataset.menu || "");
            if (!submenu) return;

            const vaiAbrir = !submenu.classList.contains("aberto");

            document.querySelectorAll(".submenu").forEach((item) => item.classList.remove("aberto"));
            botoesPrincipais.forEach((item) => {
                item.classList.remove("ativo", "aberto");
                item.setAttribute("aria-expanded", "false");
            });

            if (vaiAbrir) {
                submenu.classList.add("aberto");
                botao.classList.add("ativo", "aberto");
                botao.setAttribute("aria-expanded", "true");
            }
        });
    });

    // Troca dinâmica de conteúdo
    botoesConteudo.forEach((botao) => {
        botao.addEventListener("click", () => {
            const chave = botao.dataset.conteudo;
            
            botoesConteudo.forEach((item) => item.classList.remove("sub-ativo"));
            botao.classList.add("sub-ativo");

            if (chave && conteudos[chave]) {
                if (tituloSistema) tituloSistema.textContent = conteudos[chave].titulo;
                if (categoriaSistema) categoriaSistema.textContent = conteudos[chave].categoria;
                if (textoSistema) textoSistema.textContent = conteudos[chave].texto;
            }

            if (window.innerWidth <= 768) fecharMenu();
        });
    });

    window.addEventListener("scroll", () => {
        if (botaoInicio) botaoInicio.style.display = window.scrollY > 300 ? "block" : "none";
    }, { passive: true });

    botaoInicio?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") fecharMenu(); });
});
