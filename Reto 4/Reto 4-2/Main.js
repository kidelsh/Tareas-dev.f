let n1 = Number(prompt ("Primer Numero (Ancho)"));
let n2 = Number(prompt ("Segundo Numero (Alto)"));

const ac = (n1,n2) => {
    if (n1-n2 == 0) {
    r = (n1 * n2)
    console.log(`El area del cuadrado es :${r}`)
    }
    else {
        console.log("Este no es un cuadrado")
    }
}

const ar = (n1,n2) => {
    if (n1-n2 != 0) {
     r = (n1 * n2)
    console.log(`El area del rectangulo es :${r}`)
    }
    else {
        console.log("Este no es un Rectangulo")
    }
}

const at = (n1,n2) => {
    r = ((n1 * n2) / 2)
    console.log(`El area del triangulo es :${r}`)
}

ac(n1,n2)
ar(n1,n2)
at(n1,n2)