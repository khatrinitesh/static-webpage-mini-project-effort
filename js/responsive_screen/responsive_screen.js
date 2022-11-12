const Height = document.getElementById('height')
const Width = document.getElementById('width')

function resizeScreen(){
    Height.textContent = window.innerHeight;
    Width.textContent = window.innerWidth;
}

window.addEventListener('resize',resizeScreen)