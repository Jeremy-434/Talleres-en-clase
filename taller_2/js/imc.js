

const calcularImc = () => {
    var peso = document.getElementById('input-peso').value;
    var altura = document.getElementById('input-altura').value;
    peso = Number(peso);
    altura = Number(altura);
    // var peso = 80;
    // var altura = 1.40;
    var imc = peso / (Math.pow(altura, 2));
    const mensaje = "Su índice de masa corporal es: ";
    
    if (imc < 18.5) {
        var msj_final = "Usted está, bajo de peso";
        // console.log(mensaje + imc.toFixed(2) + " " + msj_final);
        alert(mensaje + imc.toFixed(2) + " " + msj_final);
    } else if ((imc >= 18.5) && (imc < 24.9)) {
        var msj_final = "Usted está, normal de peso";
        // console.log(mensaje + imc.toFixed(2) + " " + msj_final);
        alert(mensaje + imc.toFixed(2) + " " + msj_final);
    } else if ((imc >= 25.0) && (imc <= 29.9)) {
        var msj_final = "Usted está, en sobrepeso";
        // console.log(mensaje + imc.toFixed(2) + " " + msj_final);
        alert(mensaje + imc.toFixed(2) + " " + msj_final);
    } else if ((imc >= 30) && (imc <= 34.9)) {
        var msj_final = "Usted está, en obesidad";
        // console.log(mensaje + imc.toFixed(2) + " " + msj_final);
        alert(mensaje + imc.toFixed(2) + " " + msj_final);
    } else if ((imc > 35)) {
        var msj_final = "Usted está, en obesidad extrema";
        // console.log(mensaje + imc.toFixed(2) + " " + msj_final);
        alert(mensaje + imc.toFixed(2) + " " + msj_final);
    }
    else{
        console.log("hubo algun error")
    }
}