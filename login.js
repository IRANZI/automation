const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link'); // Fixed the selector here
const btnPopup = document.querySelector('.btnLogin-popup'); // Fixed the selector here

const iconClose = document.querySelector('.icon-close'); // Fixed the selector here


registerLink.addEventListener('click', ()=>  {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
