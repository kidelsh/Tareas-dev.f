const platillos = ["Enchiladas","Taco","tamal","Pozole","Barbacoa","Guacamole"]
for (let i=0;i<6;i+=1) {
    console.log(platillos[i])
}

for (let i=0;i<6;i+=1) {
    if (platillos[i] == "Pozole" || platillos[i] == "Barbacoa" ) {
            console.log(platillos[i])
    }

}
for (let i=0;i<6;i+=1) {
    if ((i % 2) != 0) {
        console.log(platillos[i])
    }
}
for (let i=0;i<6;i+=1) {
    if ((i % 2) == 0) {
        console.log(platillos[i])
    }
}