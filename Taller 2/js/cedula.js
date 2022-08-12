

const manOrWoman = () => {
    var cedula = document.getElementById('input-cedula').value;
    can_cedula = cedula.length;

    if (can_cedula <= 5 ) {
        alert('Eres un hombre')
    }else{
        alert("Eres una mujer")
    }
}