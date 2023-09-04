// Obtenha a referência ao elemento select
var select = document.getElementById("tipo__app");

// Adicione um evento onchange
select.addEventListener("change", function () {
    // Obtenha o valor selecionado
    var selectedValue = select.value;

    // Redirecione com base na opção selecionada
    switch (selectedValue) {
        case "Corte e Estamparia":
            // Redirecione para a página desejada (por exemplo, /corte_estamparia.html)
            window.location.href = "/";
            break;
        case "Solda":
            window.location.href = "/solda";
            break;
        case "Pintura":
            window.location.href = "/pintura";
            break;
        default:
            // Redirecione para uma página padrão, se necessário
            window.location.href = "/default";
    }
});
