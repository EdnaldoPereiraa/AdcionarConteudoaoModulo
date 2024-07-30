function toggleOptions() {
    var optionsContainer = document.getElementById('options-container');
    if (optionsContainer.style.display === 'block') {
        optionsContainer.style.display = 'none';
    } else {
        optionsContainer.style.display = 'block';
    }
}

function toggleOptions() {
    const optionsContainer = document.getElementById('options-container');
    const arrow = document.querySelector('.tags-button .arrow');
    
    // Alternar a visibilidade das opções
    if (optionsContainer.style.display === 'none' || optionsContainer.style.display === '') {
        optionsContainer.style.display = 'block';
        arrow.classList.add('active');
    } else {
        optionsContainer.style.display = 'none';
        arrow.classList.remove('active');
    }
}
