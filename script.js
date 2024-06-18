let email = 'item1', user = 'item2'
let senha = 'item3', comentario = 'item6'
let titulo = 'item4', conteudo = 'item5'

function cadastroUser(){
    localStorage.setItem(email,document.getElementById('email').value)
    localStorage.setItem(user,document.getElementById('usuario').value)
    localStorage.setItem(senha,document.getElementById('pass').value)
    alert("Cadastro realizado com sucesso")
    window.location.href='login.html'
}
function resetaLogin(){
    localStorage.clear(email)
    localStorage.clear(user)
    localStorage.clear(senha)
    localStorage.clear(titulo)
    localStorage.clear(conteudo)
    localStorage.clear(comentario)
}


function logarUser(){
let usuario = document.getElementById('usuario').value 
let password = document.getElementById('pass').value
let usu = localStorage.getItem(user)
let senh = localStorage.getItem(senha)
if(usuario == usu && password == senh){
    alert("Login realizado com sucesso")
    window.location.href='index.html'
}else{
    alert("Usuario e/ou senha incorretos")
}
}

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

function carregaPost(){
    document.getElementById('titolo').innerHTML = localStorage.getItem('item4')
    document.getElementById('contente').innerHTML = localStorage.getItem('item5')
}

//Carregar foto ============================================================================================
function loadButtonBackground() {
    const base64Image = localStorage.getItem('buttonBackgroundImage');
    if (base64Image) {
        document.getElementById('pfpc').style.backgroundImage = `url(${base64Image})`;
    }
}
//Carregar foto ============================================================================================


let coment = localStorage.getItem('item6')
window.onload = loadButtonBackground
window.addEventListener('load', carregaPost)
if(coment == ''){
        document.getElementById('comentarios').innerHTML = localStorage.getItem('item2') + '<br>' + localStorage.getItem('item6')
}


