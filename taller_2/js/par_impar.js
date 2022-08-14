

const calcularParImpar = () => {
    var num = document.getElementById('input-num_parimpar').value;

    if (num % 2 == 0) {
        alert(num + " es un numero par");
    } else {
        alert(num + " es un numero impar");
    }
}