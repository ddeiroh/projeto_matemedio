$(function() {

            $('article#secao1 button.btn').click(function() {
                $(this).siblings('section.conteudo').slideToggle();
                if ($(this).text() == "Clique") {
                    $(this).text("Desclique");
                } else {
                    $(this).text("Clique")
                }
            });

        });

        $(function() {

            $('article#secao2 button.btn').click(function() {
                $(this).siblings('section.conteudo').slideToggle();
                if ($(this).text() == "Clique") {
                    $(this).text("Desclique");
                } else {
                    $(this).text("Clique")
                }
            });

        });

        $(function() {

            $('article#secao3 button.btn').click(function() {
                $(this).siblings('section.conteudo').slideToggle();
                if ($(this).text() == "Clique") {
                    $(this).text("Desclique");
                } else {
                    $(this).text("Clique")
                }
            });

        });
