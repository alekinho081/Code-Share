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
// Função para carregar a imagem do localStorage ao carregar a página

// Chama a função para carregar a imagem ao carregar a página
window.onload = loadButtonBackground;
// Chama a função para carregar a imagem ao carregar a página

//Mostra os dados do perfil e salva ele =====================================================================
document.getElementById('i1').value = localStorage.getItem('item1')
document.getElementById('i2').value = localStorage.getItem('item2')
document.getElementById('i3').value = localStorage.getItem('item3')

function salvarPerfil(){
    localStorage.setItem('item1',document.getElementById('i1').value)
    localStorage.setItem('item2',document.getElementById('i2').value)
    localStorage.setItem('item3',document.getElementById('i3').value)
}
//Mostra os dados do perfil e salva ele =====================================================================

//Verifica se o usário está logado ==========================================================================
function verificarLogin() {
    let logado = localStorage.getItem('logado');
    if (logado === 'true') {
        return true;
    } else {
        alert("Usuário não está logado")
        window.location.href='login.html'
        return false;
    }
}

if(window.location.pathname != '/login.html' && window.location.pathname != '/registro.html'){
    window.addEventListener('load', verificarLogin)
}
//Verifica se o usário está logado ==========================================================================