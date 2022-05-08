let menuBar = document.querySelector('.menu-bar');
let navBar = document.querySelector('.navbar');
let loginBtn = document.querySelector('.user-login');
let loginForm = document.querySelector('.loginForm');
let nigthMod = document.querySelector('.nigth-mod');


menuBar.addEventListener('click', () => {
    navBar.classList.toggle('active');
    menuBar.classList.toggle('fa-times');
    loginForm.classList.remove('active');
    loginBtn.classList.remove('fa-times');
    loginBtn.classList.add('fa-user');
});

loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('active');
    loginBtn.classList.toggle('fa-times');
    loginBtn.classList.toggle('fa-user');
    navBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
});

nigthMod.addEventListener('click', () => {
    document.body.classList.toggle('active');
    nigthMod.classList.toggle('fa-sun');
});

window.onscroll = () => {
    navBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    loginForm.classList.remove('active');
    loginBtn.classList.remove('fa-times');
    loginBtn.classList.add('fa-user');
};
