let num1 = document.getElementById('num1')
num1.addEventListener('change', (e) => {
    e.target.value;
})
let num2 = document.getElementById('num2')
num2.addEventListener('change', (e) => {
    e.target.value;
})
let num3 = document.getElementById('num3') 
num3.addEventListener('change', (e) => {
    e.target.value;
})
let resultado = document.getElementById('resultado')
resultado.innerHTML = 0

class operaciones {
    constructor(n1,n2,n3){
        this.n1 = Number(n1)
        this.n2 = Number(n2)
        this.n3 = Number(n3)
    }
    sumar(){
        let resultado = `El resultado es : ${this.n1 + this.n2 + this.n3}`
        return resultado
    }
    restar(){
        let resultado = `El resultado es : ${this.n1 - this.n2 - this.n3}`
        return resultado
    }
    multiplicar(){
        let resultado = `El resultado es : ${this.n1 * this.n2 * this.n3}`
        return resultado
    }
    dividir(){
        if (this.n1 == 1) {
            let resultado = `El resultado es : ${this.n2 / this.n3}`
            return resultado
        } else{
        if (this.n2 == 1) {
            let resultado = `El resultado es : ${this.n1 / this.n3}`
            return resultado
        } else{  
        let resultado = `El resultado es : ${this.n1 / this.n2 / this.n3}`
        return resultado}}
    }
}

const Sumar = document.getElementById("sum")
Sumar.addEventListener("click", (e) => {
    e.target.value;
    var calculadora = new operaciones(num1.value,num2.value,num3.value)
    if ((calculadora.n1 == 0 & calculadora.n2 == 0) || (calculadora.n1 == 0 & calculadora.n3 == 0) || (calculadora.n2 == 0 & calculadora.n3 == 0)) {
        alert("Ingresa dos numeros")
    } else {
    resultado.innerHTML = calculadora.sumar()
    }
})

const restar = document.getElementById("res")
restar.addEventListener("click", (e) => {
    e.target.value;
    var calculadora = new operaciones(num1.value,num2.value,num3.value)
    if ((calculadora.n1 == 0 & calculadora.n2 == 0) || (calculadora.n1 == 0 & calculadora.n3 == 0) || (calculadora.n2 == 0 & calculadora.n3 == 0)) {
        alert("Ingresa dos numeros")
    } else {
    resultado.innerHTML = calculadora.restar()
    }
})

const multiplicar = document.getElementById("mul")
multiplicar.addEventListener("click", (e) => {
    e.target.value;
    var calculadora = new operaciones(num1.value,num2.value,num3.value)
    if ((calculadora.n1 == 0 & calculadora.n2 == 0) || (calculadora.n1 == 0 & calculadora.n3 == 0) || (calculadora.n2 == 0 & calculadora.n3 == 0)) {
        alert("Ingresa dos numeros")
    } else {

        if (calculadora.n1 == 0) {
            calculadora.n1 = 1
        }
        if (calculadora.n2 == 0) {
            calculadora.n2 = 1
        }
        if (calculadora.n3 == 0) {
            calculadora.n3 = 1
        }
        resultado.innerHTML = calculadora.multiplicar()
    }
})

const dividir = document.getElementById("div")
dividir.addEventListener("click", (e) => {
    e.target.value;
    var calculadora = new operaciones(num1.value,num2.value,num3.value)
    if ((calculadora.n1 == 0 & calculadora.n2 == 0) || (calculadora.n1 == 0 & calculadora.n3 == 0) || (calculadora.n2 == 0 & calculadora.n3 == 0)) {
        alert("Ingresa dos numeros")
    } else {

        if (calculadora.n1 == 0) {
            calculadora.n1 = 1
        }
        if (calculadora.n2 == 0) {
            calculadora.n2 = 1
        }
        if (calculadora.n3 == 0) {
            calculadora.n3 = 1
        }
        resultado.innerHTML = calculadora.dividir()
    }
})