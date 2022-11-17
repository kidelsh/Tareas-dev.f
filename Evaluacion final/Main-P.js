class nueva_cuenta {
    constructor(name,password, saldo){
        this.name = name
        this.password = password
        this.saldo = saldo
    }
    consultar_saldo(){
        let resultado = `<h4>Tu saldo es : ${this.saldo} $</h4>`
        return resultado
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

const consultarSaldo = document.getElementById("saldo")
const ejecutarAccion = document.getElementById("accion")

const consulta = document.getElementById("consulta")
const ingresa = document.getElementById("ingresa")
const retira = document.getElementById("retira")

consulta.addEventListener('click', (e) => {
    e.preventDefault();
    consultarSaldo.innerHTML = Pedro.consultar_saldo()
})


ingresa.addEventListener('click', (e) => {
    e.preventDefault();
    let ingresar = `
    <div class="p-2 bg-light border-info border border-3 rounded grap-0 col-5">
        <input type="number" id="ingresa_cantidad" class="mb-2 form-control form-control-lg" placeholder="Ingresa cantidad">
    </div>
    <div class="p-2 bg-light border-info border border-3 rounded grap-0 col-5">
        <button type="button" id="ingresa2" class=" btn btn-dark btn-lg">Ingresar</button>
    </div>
    `
    ejecutarAccion.innerHTML = ingresar

    const cantidadIngresar = document.getElementById("ingresa_cantidad")
    cantidadIngresar.addEventListener('change', (e) => {
        e.target.value;
    }) 
    const ingresa2 = document.getElementById("ingresa2")
    ingresa2.addEventListener('click', (e) => {
    e.preventDefault();
    if (cantidadIngresar.value == 0) {
        alert("Por favor ingrese un numero")
    }
    else if (cantidadIngresar.value <= -1) {
        alert("No se admiten numeros negativos")
    }
    else {
        let monto1 = Number(Pedro.saldo)
        let monto2 = Number(cantidadIngresar.value)
        if (monto1 + monto2 <= 10 || monto1 + monto2 >= 900){
            alert("El monto se exede de los limites establecidos (10 $ a 900 $)")
        }
        else {
        Pedro.saldo = monto1 + monto2
        consultarSaldo.innerHTML = Pedro.consultar_saldo()
        }
    }
})
})

retira.addEventListener('click', (e) => {
    e.preventDefault();
    let retirar = `
    <div class="p-2 bg-light border-info border border-3 rounded grap-0 col-5">
        <input type="number" id="ingresa_cantidad" class="mb-2 form-control form-control-lg" placeholder="Ingresa cantidad">
    </div>
    <div class="p-2 bg-light border-info border border-3 rounded grap-0 col-5">
        <button type="button" id="ingresa2" class=" btn btn-dark btn-lg">Retirar</button>
    </div>
    `
    ejecutarAccion.innerHTML = retirar

    const cantidadIngresar = document.getElementById("ingresa_cantidad")
    cantidadIngresar.addEventListener('change', (e) => {
        e.target.value;
    }) 
    const ingresa2 = document.getElementById("ingresa2")
    ingresa2.addEventListener('click', (e) => {
    e.preventDefault();
    if (cantidadIngresar.value == 0) {
        alert("Por favor ingrese un numero")
    }
    else if (cantidadIngresar.value <= -1) {
        alert("No se admiten numeros negativos")
    }
    else {
        let monto1 = Number(Pedro.saldo)
        let monto2 = Number(cantidadIngresar.value)
        if (monto1 - monto2 <= 10 || monto1 - monto2 >= 900){
            alert("El monto se exede de los limites establecidos (10 $ a 900 $)")
        }
        else {
        Pedro.saldo = monto1 - monto2
        consultarSaldo.innerHTML = Pedro.consultar_saldo()
        }
    }
})
})