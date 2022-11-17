let Titular = prompt ("Titular");
let cont1 = document.getElementById("Cont-t")
let Usuario = `<h3>Titular = ${Titular} </h3>`
cont1.innerHTML = Usuario

let Cantidad = 10

class cuenta {
    constructor(Titular,Cantidad){
        this.Titular = Titular
        this.Cantidad = Cantidad
    }
    Cantidadt() {
    let resultado = `$ ${Datos.Cantidad}`
    return resultado
    }
}

var Datos = new cuenta(Titular,Cantidad)

let cont2 = document.getElementById("Cont-c")
let monto = `$ ${Datos.Cantidad}`
cont2.innerHTML = monto

let cantidad = document.getElementById('cantidad')
cantidad.addEventListener('change', (e) => {
    e.target.value;
})

const depositar = document.getElementById("depositar")
depositar.addEventListener("click", (e) => {
    e.target.value;
    if (cantidad.value == 0){

        alert("Escriba un numero")
    }
    else{
        
        let monto1 = Number(Datos.Cantidad)
        let monto2 = Number(cantidad.value)
        if (monto1 + monto2 <= 9 || monto1 + monto2 >= 900 ){

            alert("El monto exede los limites estipulados")
        }
        else {
            Datos.Cantidad = monto1 + monto2
            cont2.innerHTML = Datos.Cantidadt()
        }
    }
})

const retirar = document.getElementById("retirar")
retirar.addEventListener("click", (e) => {

    e.target.value;
    if (cantidad.value == 0){

        alert("Escriba un numero")
    }
    else{
        
        let monto1 = Number(Datos.Cantidad)
        let monto2 = Number(cantidad.value)
        if (monto1 - monto2 <= 9 || monto1 - monto2 >= 900 ){

            alert("El monto exede los limites estipulados")
        }
        else {
            Datos.Cantidad = monto1 - monto2
            cont2.innerHTML = Datos.Cantidadt()
        }
    }
})