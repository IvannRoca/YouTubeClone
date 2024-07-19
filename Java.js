const container = document.querySelector ('#container');

document.querySelector('#boton-menu').addEventListener('click', () => {
    container.classList.toggle('active');
});