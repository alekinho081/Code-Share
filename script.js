let email = 'item1', user = 'item2'
let senha = 'item3', comentario = 'item6'
let titulo = 'item4', conteudo = 'item5'
let coment = localStorage.getItem('item6')


//Cadastro de usuário e Login ===============================================================================
function cadastroUser(){
    localStorage.setItem(email,document.getElementById('email').value)
    localStorage.setItem(user,document.getElementById('usuario').value)
    localStorage.setItem(senha,document.getElementById('pass').value)
    alert("Cadastro realizado com sucesso")
    window.location.href = 'login.html'
}

function logarUser(){
let usuario = document.getElementById('usuario').value 
let password = document.getElementById('pass').value
let usu = localStorage.getItem(user)
let senh = localStorage.getItem(senha)
if(usuario == usu && password == senh){
    alert("Login realizado com sucesso")
    localStorage.setItem('logado', true)
    window.location.href = 'index.html'
}else{
    alert("Usuario e/ou senha incorretos")
}
}

function resetaLogin(){
    localStorage.clear(email)
    localStorage.clear(user)
    localStorage.clear(senha)
    localStorage.clear(titulo)
    localStorage.clear(conteudo)
    localStorage.clear(comentario)
}
//Cadastro de usuário e Login ===============================================================================

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

//Cria Post e Comentário ====================================================================================
function criaPost(){
    let titul = localStorage.setItem('item4', document.getElementById('title').value)
    let conteud = localStorage.setItem('item5', document.getElementById('content').value)
    alert('Post Criado')
}

function guardaComent(){
    localStorage.setItem(comentario, document.getElementById('coments').value)
    document.getElementById('comentarios').innerHTML = localStorage.getItem('item2') + '<br>' + localStorage.getItem('item6')
    document.getElementById('comentarios').value = ''
}
//Cria Post e Comentário ====================================================================================


//Carregar foto =============================================================================================
function loadButtonBackground() {
    const base64Image = localStorage.getItem('buttonBackgroundImage');
    if (base64Image) {
        document.getElementById('pfpc').style.backgroundImage = `url(${base64Image})`;
    }
}
window.onload = loadButtonBackground
//Carregar foto =============================================================================================

//Carregar post e comentário ================================================================================

//Só ativa a função se estiver na página certa ==============================================================
if(window.location.pathname == '/post.html'){
    window.addEventListener('load', carregaPost)
}
//Só ativa a função se estiver na página certa ==============================================================


function carregaPost(){
    document.getElementById('titolo').innerHTML = localStorage.getItem('item4')
    document.getElementById('contente').innerHTML = localStorage.getItem('item5')
}

if(coment == ''){
        document.getElementById('comentarios').innerHTML = localStorage.getItem('item2') + '<br>' + localStorage.getItem('item6')
}
//Carregar post e comentário ================================================================================