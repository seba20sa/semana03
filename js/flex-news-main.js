//Variables
var burgerButton = document.getElementById('burger-menu');
var hiddenNavBar = document.getElementById('hidden-nav-bar');
//Event listeners
burgerButton.addEventListener('click', OpenMenuBar);
//Actions
function OpenMenuBar(e){
    hiddenNavBar.style.display = 'block';
    burgerButton.style.display= 'none';
    e.preventDefault();
}