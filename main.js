$(document).ready(function () {

    $('#botao-principal').click(function (e) {
        e.preventDefault();

        const texto = $('#inputTarefa').val().trim();
        const categoria = $('#meuSelect').val();
        const dia = $('#diaSemana').val();

        if (texto === '') {
            alert("Digite uma tarefa válida.");
            return;
        }

        const li = $(`<li class="${categoria}"></li>`);
        li.append(`<p>${texto}</p>`);
        li.append(`<p>${categoria}</p>`);
        const checkbox = $('<input type="checkbox">');
        const label = $('<label></label>').append(checkbox);
        li.append(label);

        checkbox.change(function () {
            li.toggleClass("riscado");
            atualizarProgresso(dia);
        });

        $(`#${dia} .lista-tarefas`).append(li);
        $('#inputTarefa').val('');

        filtrarTarefas();
        atualizarProgresso(dia);
    });

    $('.filtro-categoria').change(function () {
        filtrarTarefas();
    });

    function filtrarTarefas() {
        const selecionadas = $('.filtro-categoria:checked').map(function () {
            return this.value;
        }).get();

        $('.lista-tarefas li').each(function () {
            const categoria = $(this).attr('class');
            if (selecionadas.includes(categoria)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    function atualizarProgresso(dia) {
        const lista = $(`#${dia} .lista-tarefas`);
        const total = lista.find('li').length;
        const concluidas = lista.find('input:checked').length;

        const porcentagem = total === 0 ? 0 : Math.round((concluidas / total) * 100);
        $(`#${dia} .progress-bar`).css('width', `${porcentagem}%`);
    }
});