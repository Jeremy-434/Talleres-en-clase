

const notaFinal = () => {
    var nombre = document.getElementById('input-nombre').value;
    var apellido = document.getElementById('input-apellido').value;
    var documento = document.getElementById('input-documento').value;
    var nota = document.getElementById('input-nota').value;

    nota = Number(nota);

    if (nota > 0 && nota < 5) {
        if (nota > 3) {
            alert(`${nombre} ${apellido} con documento ${documento}, su nota es de ${nota}, por lo tanto, aprobó.`);
        } else {
            alert(`${nombre} ${apellido} con documento ${documento}, su nota es de ${nota}, por lo tanto, reprobó.`);
        }
    } else {
        alert("Ingrese un numero entre 0 y 5")
    }
}