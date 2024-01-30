const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('register-link');
const btnPopup = document.querySelector('btnLogin-Popup');
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});


loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});


btnPopupk.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

