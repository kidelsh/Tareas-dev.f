const buttonLogin   = document.getElementById('btn-login')
const formLogin = document.getElementById('formLogin')

class nueva_cuenta {
    constructor(name,password, saldo){
        this.name = name
        this.password = password
        this.saldo = saldo
    }
}

let name1 = "Jose"
let password1 = 1234
let saldo1 = 20
var Jose = new nueva_cuenta(name1,password1,saldo1)

let name2 = "Pedro"
let password2 = 12345
let saldo2 = 60
var Pedro = new nueva_cuenta(name2,password2,saldo2)

let name3 = "Miguel"
let password3 = 123456
let saldo3 = 424
var Miguel = new nueva_cuenta(name3,password3,saldo3)

const welcome = document.getElementById("welcome")


buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (name0.value == Jose.name & password.value == Jose.password) {
        window.location.href = "http://127.0.0.1:5500/Index-J.html"
        
    }
    else if(name0.value == Pedro.name & password.value == Pedro.password){
        window.location.href = "http://127.0.0.1:5500/Index-P.html"

    }
    else if(name0.value == Miguel.name & password.value == Miguel.password) {
        window.location.href = "http://127.0.0.1:5500/Index-M.html"

    }
    else if(name0.value == 0 || password.value == 0){
        alert("Rellena los todos los campos")
    }
    else {
        alert("El usuario y la contraseña no coinciden")
    }
})
const name0 = document.getElementById('name')
name0.addEventListener('change', (e) => {
    e.target.value;
})
const password = document.getElementById('password')
password.addEventListener('change', (e) => {
    e.target.value;
})



