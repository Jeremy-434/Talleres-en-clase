let n = 100;
let num = 1;
let impar = 0;
let numImpar = 0;

for (let i = 1; i <= n; i++ ) {
    // num = num + i;
    // promedio = num/n
    
    if (i % 2 != 0) {
        impar = impar + i;
        numImpar = numImpar + 1;
        promedioImpar = impar/numImpar
        // console.log(impar, num, numImpar)
    }
    // console.log( i, num);
}

// console.log(promedio);
// console.log(impar, numImpar, promedioImpar);
console.log(`El promedio de los numeros impares entre el 1 hasta el ${n} es de ${promedioImpar}`)