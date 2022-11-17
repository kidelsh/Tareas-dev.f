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

let name3 = "Miguel"
let password3 = 123456
let saldo3 = 424
var Miguel = new nueva_cuenta(name3,password3,saldo3)

const consultarSaldo = document.getElementById("saldo")
const ejecutarAccion = document.getElementById("accion")

const consulta = document.getElementById("consulta")
const ingresa = document.getElementById("ingresa")
const retira = document.getElementById("retira")

consulta.addEventListener('click', (e) => {
    e.preventDefault();
    consultarSaldo.innerHTML = Miguel.consultar_saldo()
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
        let monto1 = Number(Miguel.saldo)
        let monto2 = Number(cantidadIngresar.value)
        if (monto1 + monto2 <= 10 || monto1 + monto2 >= 900){
            alert("El monto se exede de los limites establecidos (10 $ a 900 $)")
        }
        else {
        Miguel.saldo = monto1 + monto2
        consultarSaldo.innerHTML = Miguel.consultar_saldo()
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
        let monto1 = Number(Miguel.saldo)
        let monto2 = Number(cantidadIngresar.value)
        if (monto1 - monto2 <= 10 || monto1 - monto2 >= 900){
            alert("El monto se exede de los limites establecidos (10 $ a 900 $)")
        }
        else {
        Miguel.saldo = monto1 - monto2
        consultarSaldo.innerHTML = Miguel.consultar_saldo()
        }
    }
})
})
