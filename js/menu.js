document.addEventListener("DOMContentLoaded", function () {

    /* ================================
       ELEMENTOS
    ================================= */

    const menu = document.getElementById("menu-lateral");
    const overlay = document.getElementById("overlay");
    const botaoMenu = document.getElementById("btn-menu");
    const botaoInicio = document.getElementById("btn-inicio");

    const botoesPrincipais =
        document.querySelectorAll(".btn-principal");

    const botoesConteudo =
        document.querySelectorAll("[data-conteudo]");


    /* ================================
       MENU MOBILE
    ================================= */

    function abrirMenu() {

        if (!menu || !overlay) {
            return;
        }

        menu.classList.add("menu-visivel");
        overlay.classList.add("ativo");

    }


    function fecharMenu() {

        if (!menu || !overlay) {
            return;
        }

        menu.classList.remove("menu-visivel");
        overlay.classList.remove("ativo");

    }


    /* BOTÃO ☰ */

    if (botaoMenu) {

        botaoMenu.addEventListener("click", function (e) {

            e.preventDefault();
            e.stopPropagation();

            if (menu.classList.contains("menu-visivel")) {

                fecharMenu();

            } else {

                abrirMenu();

            }

        });

    }


    /* CORTINA */

    if (overlay) {

        overlay.addEventListener("click", function () {

            fecharMenu();

        });

    }


    /* ================================
       SUBMENUS
    ================================= */

    botoesPrincipais.forEach(function (botao) {

        botao.addEventListener("click", function (e) {

            e.preventDefault();

            const id =
                botao.getAttribute("data-menu");

            const submenu =
                document.getElementById(id);

            if (!submenu) {
                return;
            }


            const aberto =
                submenu.classList.contains("aberto");


            /* Fecha todos */

            document
                .querySelectorAll(".submenu")
                .forEach(function (item) {

                    item.classList.remove("aberto");

                });


            /* Retira ativo */

            document
                .querySelectorAll(".btn-principal")
                .forEach(function (item) {

                    item.classList.remove("ativo");
                    item.classList.remove("aberto");

                });


            /* Abre o escolhido */

            if (!aberto) {

                submenu.classList.add("aberto");

                botao.classList.add("ativo");
                botao.classList.add("aberto");

            }

        });

    });


    /* ================================
       CONTEÚDO
    ================================= */

    botoesConteudo.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const id =
                botao.getAttribute("data-conteudo");

            /*
               Aqui você pode ligar futuramente
               cada item à sua página.
            */

            botoesConteudo.forEach(function (item) {

                item.classList.remove("sub-ativo");

            });

            botao.classList.add("sub-ativo");


            /* Fecha o menu no celular */

            if (window.innerWidth <= 768) {

                fecharMenu();

            }

        });

    });


    /* ================================
       BOTÃO INÍCIO
    ================================= */

    if (botaoInicio) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 300) {

                botaoInicio.style.display = "block";

            } else {

                botaoInicio.style.display = "none";

            }

        });


        botaoInicio.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* ================================
       ESC
    ================================= */

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {

            fecharMenu();

        }

    });

});
