var aviso = alert("Realize el siguiente formulario")

const nombre = document.getElementById('nombre')
nombre.addEventListener('change', (e) => {
    e.target.value; //desactiva el comportamiento por defecto y no te refresques
})

const apellidop = document.getElementById('apellido-p')
apellidop.addEventListener('change', (e) => {
    e.target.value; //desactiva el comportamiento por defecto y no te refresques
})

const apellidom = document.getElementById('apellido-m')
apellidom.addEventListener('change', (e) => {
    e.target.value; //desactiva el comportamiento por defecto y no te refresques
})
const dia = document.getElementById("dia")
const mes = document.getElementById("mes")
const año = document.getElementById("año")
const sexo = document.getElementById("sexo")
const peso = document.getElementById("peso")
const altura = document.getElementById("altura")

var divnb = document.getElementById("nobinario")
var cont = document.getElementById('ficha')

var sexonobinario =`
<input type="text" id="sexo-n" placeholder="Cual" size="15"></input>
`
sexo.addEventListener('change', (e) => {
    if (sexo.value == "Nobinario") {
        divnb.innerHTML = sexonobinario
    }   
}) 

class Ficha {
constructor(nombre,apellidop,apellidom,dia,mes,año,sexo,peso,altura){
    this.nombre = nombre
    this.apellidop = apellidop
    this.apellidom = apellidom
    this.dia = dia
    this.mes = mes
    this.año = año
    this.sexo = sexo
    this.peso = peso
    this.altura = altura
    }
    nombreCompleto(){
        let resultado = `${this.nombre} ${this.apellidop} ${this.apellidom}`
        return resultado
    }
    edad(){
        let resultado = `${2022 - this.año}`
        return resultado
    }
    IMC(){
        let resultado = `${this.peso / (this.altura * this.altura)}`
        return resultado
    }
    Mayor(){
        if(this.edad < 18 ){
            return `${this.nombre} es menor de edad`
        }
        else {
            return `${this.nombre} es mayor de edad`
        }
    }
    RFC(){
        let resultado = this.nombre + this.apellidop + this.apellidom + this.año + this.mes + this.dia + this.sexo
        return resultado
    }
}



const button = document.getElementById("enviar")
button.addEventListener("click", (e) => {
    if (nombre.value==0 || apellidop.value==0 || apellidom.value==0 || dia.value==0 || mes.value==0 || año.value==0 || peso.value==0 || altura.value==0) {
        alert("Rellene todos los campos")
    }else {
     e.target.textContent = "Enviado"
    if (sexo.value == "Nobinario") {

        const sexonb = document.getElementById("sexo-n")
        var Persona = new Ficha(nombre.value,apellidop.value,apellidom.value,dia.value,mes.value,año.value,sexonb.value,peso.value,altura.value)
    } 
    else{

        var Persona = new Ficha(nombre.value,apellidop.value,apellidom.value,dia.value,mes.value,año.value,sexo.value,peso.value,altura.value)
    }
    var ficha =`
        <p> Nombre : ${Persona.nombreCompleto()} </p>
        <p> Edad : ${Persona.edad()} </p>
        <p> Sexo : ${Persona.sexo} </p>
        <p> IMC : ${Persona.IMC()} </p>
        <p> RFC : ${Persona.RFC()} </p>
        `
    cont.innerHTML = ficha
    let holitas = "hol"
    console.log(holitas.length -1)
    }

}) 
