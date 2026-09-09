document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MENU PRINCIPAL
    ========================================= */

    const botoesMenu =
        document.querySelectorAll(".btn-principal");


    botoesMenu.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const id =
                botao.getAttribute("data-menu");

            const submenu =
                document.getElementById(id);

            if (!submenu) {
                return;
            }


            const estavaAberto =
                submenu.classList.contains("aberto");


            /* FECHA TODOS */

            document
                .querySelectorAll(".submenu")
                .forEach(function (menu) {

                    menu.classList.remove("aberto");

                });


            /* REMOVE ATIVO DE TODOS */

            document
                .querySelectorAll(".btn-principal")
                .forEach(function (btn) {

                    btn.classList.remove("ativo");

                });


            /* SE ESTAVA FECHADO, ABRE */

            if (!estavaAberto) {

                submenu.classList.add("aberto");

                botao.classList.add("ativo");

            }

        });

    });


    /* =========================================
       ITENS DOS SUBMENUS
    ========================================= */

    const botoesConteudo =
        document.querySelectorAll("[data-conteudo]");


    botoesConteudo.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const id =
                botao.getAttribute("data-conteudo");


            /* Remove seleção anterior */

            botoesConteudo.forEach(function (item) {

                item.classList.remove("sub-ativo");

            });


            /* Marca o item */

            botao.classList.add("sub-ativo");


            /* Fecha menu no celular */

            if (window.innerWidth <= 768) {

                fecharMenuMobile();

            }

        });

    });


    /* =========================================
       MENU MOBILE
    ========================================= */

    const menuLateral =
        document.getElementById("menu-lateral");


    const overlay =
        document.getElementById("overlay");


    const btnMenu =
        document.getElementById("btn-menu");


    function abrirMenuMobile() {

        menuLateral.classList.add("menu-visivel");

        overlay.classList.add("ativo");

    }


    function fecharMenuMobile() {

        menuLateral.classList.remove("menu-visivel");

        overlay.classList.remove("ativo");

    }


    /* =========================================
       BOTÃO ☰
    ========================================= */

    btnMenu.addEventListener("click", function (event) {

        event.stopPropagation();


        if (
            menuLateral.classList.contains("menu-visivel")
        ) {

            fecharMenuMobile();

        } else {

            abrirMenuMobile();

        }

    });


    /* =========================================
       CLICAR FORA
    ========================================= */

    overlay.addEventListener("click", function () {

        fecharMenuMobile();

    });


    /* =========================================
       ESC
    ========================================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            fecharMenuMobile();

        }

    });


});
