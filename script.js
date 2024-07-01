document.addEventListener("DOMContentLoaded", function() {
    // Exibe a seção de macarrão por padrão
    showSection('macarrao');
});

function showSection(sectionId) {
    // Oculta todas as seções de produtos
    document.querySelectorAll('.product-section').forEach(function(section) {
        section.style.display = 'none';
    });

    // Exibe a seção de produtos selecionada
    document.getElementById(sectionId).style.display = 'block';
}