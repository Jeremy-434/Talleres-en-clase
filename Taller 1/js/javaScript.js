
const calcular = () => {
    var x = document.getElementById('formX').value;
    var y = document.getElementById('formY').value;
    
    
    if (x == -6 || y == -5) {
         document.write("es una operacion da una indeterminación");
    }
    else {
        // resultado = (3+x)*(4+5) / (x+6)*(y+5);
        var resultado = y+x;   
        document.write(resultado);
    }
    
}


