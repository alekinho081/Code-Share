document.getElementById('imageButton').addEventListener('click', function() {
        document.getElementById('fileInput').click();
})

function setButtonBackground(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64Image = e.target.result;
            document.getElementById('pfpc').style.backgroundImage = `url(${base64Image})`;
            document.getElementById('imageButton').style.backgroundImage = `url(${base64Image})`;
            document.getElementById('imageButton').textContent = ''; // Remove o texto do botão
            localStorage.setItem('buttonBackgroundImage', base64Image); // Salva a imagem no localStorage
        }
        reader.readAsDataURL(file);
    }
}

// Função para carregar a imagem do localStorage ao carregar a página
function loadButtonBackground() {
    const base64Image = localStorage.getItem('buttonBackgroundImage');
    if (base64Image) {
        document.getElementById('pfpc').style.backgroundImage = `url(${base64Image})`;
        document.getElementById('imageButton').style.backgroundImage = `url(${base64Image})`;
        document.getElementById('imageButton').textContent = ''; // Remove o texto do botão
    }
}

// Chama a função para carregar a imagem ao carregar a página
window.onload = loadButtonBackground;

/*
document.getElementById('i1').value = localStorage.getItem(email)
document.getElementById('i2').value = localStorage.getItem(user)
document.getElementById('i3').value = localStorage.getItem(senha)
*/

function salvarPerfil(){
    localStorage.setItem(email,document.getElementById('i1').value)
    localStorage.setItem(user,document.getElementById('i2').value)
    localStorage.setItem(senha,document.getElementById('i3').value)
} 

