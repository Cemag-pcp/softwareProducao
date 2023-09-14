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
            window.location.href = "/login";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o elemento <select>
    const selectElement = document.getElementById("tipo__app");

    // Verifica a URL atual e define a opção no <select> com base nela
    switch (window.location.pathname) {
        case "/":
            selectElement.value = "Corte e Estamparia";
            break;
        case "/solda":
            selectElement.value = "Solda";
            break;
        case "/pintura":
            selectElement.value = "Pintura";
            break;
        default:
            // Se a URL não corresponder a nenhuma das opções, você pode deixar a seleção padrão (vazio)
            selectElement.value = "";
    }
});