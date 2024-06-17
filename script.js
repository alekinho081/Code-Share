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
function mostrarDados(){
    alert(localStorage.getItem(email) + "\n" +
          localStorage.getItem(user) + "\n" +
          localStorage.getItem(senha) + "\n" +
          localStorage.getItem(titulo)  + "\n" +
          localStorage.getItem(conteudo)
    )

}

function logarUser(){
let usuario = document.getElementById('usuario').value 
let password = document.getElementById('pass').value
let usu = localStorage.getItem(user)
let senh = localStorage.getItem(senha)
if(usuario == usu && password == senh){
    alert("Login realizado com sucesso")
    window.location.href='perfil.html'
}else{
    alert("Usuario e/ou senha incorretos")
}
}

function resetarLogin(){
    localStorage.clear(email)
    localStorage.clear(senha)
    localStorage.clear(user)
    localStorage.clear(logad)
}

function criaPost(){
    let titul = localStorage.setItem('item4', document.getElementById('title').value)
    let conteud = localStorage.setItem('item5', document.getElementById('content').value)
    alert(titul + "/n" + conteud)
    window.location.href = 'principal.html'
}

function guardaComent(){
    localStorage.setItem(comentario, document.getElementById('coments').value)
    document.getElementById('comentarios').innerHTML = localStorage.getItem('item2') + '<br>' + localStorage.getItem('item6')
    document.getElementById('comentarios').value = ''
}

function carregaComent(){
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

function mandaComent(){
    document.getElementById('comentarios').innerHTML = localStorage.getItem('item2') + '<br>' + localStorage.getItem('item6')
}

window.onload = loadButtonBackground
window.addEventListener('load', carregaComent)
window.addEventListener('load', mandaComent)

//Carregar foto ============================================================================================

/*
function criaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr')) //JSON - Javascript Object Notation: podem ser representados em forma de String e utilizaos em outas linguagens.
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    let novoUsr = prompt("login:")
    usr.push(novoUsr)
    localStorage.usrArr = JSON.stringify(usr)
    let novaSnh = prompt("senha")
    snh.push(novaSnh)
    localStorage.snhArr = JSON.stringify(snh)
    if(usr.includes(novoUsr) && snh.includes(novaSnh)){
        alert("Login criado com sucesso!")
    }else{
        alert("Login não pode ser criado!")
    }
}

function abreTelaLogin(){
    if(localStorage.usrArr){
        usr = JSON.parse(localStorage.getItem('usrArr'))
    }
    if(localStorage.snhArr){
        snh = JSON.parse(localStorage.getItem('snhArr'))
    }
    login = prompt("login:")
    senha =  prompt("senha")
    let indUsr = usr.indexOf(login)
    if(usr[indUsr] == login && snh[indUsr] == senha){
        document.getElementById("log").innerHTML = `Bem-vindo, ${login}`
    }else{
        alert("Digite um usuário/senha válidos!\nOu crie um login no link ao lado")
    }
}
*/