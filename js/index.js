//variables de reserva
let lunesMan = false;
let lunesTar = false;
let martesMan = false;
let martesTar = false;
let miercolesMan = false;
let miercolesTar = false;
let juevesMan = false;
let juevesTar = false;
let viernesMan = false;
let viernesTar = false;

const agenda = [
    {'dia': 'lunes', 'maniana': false, 'tarde': false},
    {'dia': 'martes', 'maniana': false, 'tarde': false},
    {'dia': 'miercoles', 'maniana': false, 'tarde': false},
    {'dia': 'jueves', 'maniana': false, 'tarde': false},
    {'dia': 'viernes', 'maniana': false, 'tarde': false}
]

function agendarDia(dia, man, tar){
    this.dia = dia;
    this.maniana = man;
    this.tarde = tar;
    
    if(man != 'nulo'){
        agenda.find(a => a.dia = this.dia).maniana = this.maniana;
    }
    
    if(this.tarde != 'nulo'){
        agenda.find(a => a.dia = this.dia).tarde = this.tarde;
    }
}


let dia = "";
let hora = "";
let seguir = "";
let diaSeleccionado = '';

do{
    //pregunto dia y hora
    dia = prompt("Ingrese el Dia de la reserva (lunes - martes - miercoles - jueves - viernes)");
    hora = prompt("Ingrese hora de la reserva (mañana - tarde)");

    //me fijo si hay reserva para ese dia y hora
    switch (dia) {
        case "lunes":
            diaSeleccionado  = agenda.find(a => a.dia = 'lunes') //agenda[0].maniana;
            lunesMan = diaSeleccionado.maniana;
            lunesTar = diaSeleccionado.tarde;

            if(lunesMan == false || lunesTar == false){
                if (hora == "mañana") {
                    //console.log('lunes mañana')
                    if (lunesMan == false) {
                        agendarDia('lunes', 'si', 'nulo');
                        //agenda.find(a => a.dia = 'lunes').maniana = true;
                        //agenda[0].maniana = true;
                        //console.log(agenda[0])
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario");
                    }
                }else if(hora == "tarde"){
                    console.log('lunes tarde')
                    if (lunesTar == false) {
                        agendarDia('lunes', 'nulo', 'si');
                        //agenda.find(a => a.dia = 'lunes').tarde = true;
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario")
                    }
                }
            }else{
                alert("El dia ya está ocupado");
            }
            break;
        case "martes":
            diaSeleccionado  = agenda.find(a => a.dia = 'martes');
            martesMan = diaSeleccionado.maniana;
            martesTar = diaSeleccionado.tarde;

            if(martesMan == false || martesTar == false){
                if (hora == "mañana") {
                    if (martesMan == false) {
                        agendarDia('martes', 'si', 'nulo');
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario");
                    }
                }else if(hora == "tarde"){
                    if (martesTar == false) {
                        agendarDia('martes', 'nulo', 'si');
                        alert("Reserva Aceptada")
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario")
                    }
                }
            }else{
                alert("El dia ya está ocupado");
            }
            break;
        case "miercoles":
            diaSeleccionado  = agenda.find(a => a.dia = 'miercoles');
            miercolesMan = diaSeleccionado.maniana;
            miercolesTar = diaSeleccionado.tarde;

            if(miercolesMan == false || miercolesTar == false){
                if (hora == "mañana") {
                    if (miercolesMan == false) {
                        agendarDia('miercoles', 'si', 'nulo');
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario");
                    }
                }else if(hora == "tarde"){
                    if (miercolesTar == false) {
                        agendarDia('miercoles', 'nulo', 'si');
                        alert("Reserva Aceptada")
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario")
                    }
                }
            }else{
                alert("El dia ya está ocupado");
            }
            break;
        case "jueves":
            diaSeleccionado  = agenda.find(a => a.dia = 'jueves');
            juevesMan = diaSeleccionado.maniana;
            juevesTar = diaSeleccionado.tarde;
            
            if(juevesMan == false || juevesTar == false){
                if (hora == "mañana") {
                    if (juevesMan == false) {
                        agendarDia('jueves', 'si', 'nulo');
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario");
                    }
                }else if(hora == "tarde"){
                    if (juevesTar == false) {
                        agendarDia('jueves', 'nulo', 'si');
                        alert("Reserva Aceptada")
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario")
                    }
                }
            }else{
                alert("El dia ya está ocupado");
            }
            break;
        case "viernes":
            diaSeleccionado  = agenda.find(a => a.dia = 'viernes');
            viernesMan = diaSeleccionado.maniana;
            viernesTar = diaSeleccionado.tarde;

            if(viernesMan == false || viernesTar == false){
                if (hora == "mañana") {
                    if (viernesMan == false) {
                        agendarDia('viernes', 'si', 'nulo');
                        alert("Reserva Aceptada");
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario");
                    }
                }else if(hora == "tarde"){
                    if (viernesTar == false) {
                        agendarDia('viernes', 'nulo', 'si');
                        alert("Reserva Aceptada")
                    }else{
                        alert("Horario Ocupado, por favor ingrese otro horario")
                    }
                }
            }else{
                alert("El dia ya está ocupado");
            }
            break;
        default:
            alert("Opcion no valida");
            break;
    }

    seguir = prompt("Desea Seguir? (Si - No)")
}while(seguir != "No" && seguir != "no" && seguir != "NO" && seguir != "nO");

alert("Muchas Gracias");
