
const calcular = () => {
    let x = document.getElementById('formX').value;
    let y = document.getElementById('formY').value;
    let resultado;

    x = Number(x);
    y = Number(y);

    if (x == -6 || y == -5) {
        alert("Esta operacion da una indeterminación");
    }
    else {
        resultado = (3+x)*(4+5) / (x+6)*(y+5);
        alert(resultado);
    }
}

