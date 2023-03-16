let loginButton = document.querySelector('.button_login');
let popUp = document.querySelector('.login_popup');
loginButton.addEventListener('click', showPopUop);
function showPopUop(evt) {
    evt.preventDefault();
    popUp.classList.toggle('show_popup');
}

// login_button.addEventListener('click', showPopUop);
// function showPopUop(el) {
//     el.preventDefault(); 
//     popUp.classList.toggle('visible');
// }
