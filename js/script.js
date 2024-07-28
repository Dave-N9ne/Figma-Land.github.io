const button = document.querySelector('#header-burger');
const nav = document.querySelector('#header-nav');

button.addEventListener ('click', function (event) {
    button.classList.toggle('_active');
    nav.classList.toggle('_active');
    document.body.classList.toggle('_lock');
})