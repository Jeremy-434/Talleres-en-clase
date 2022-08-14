
const posPlaneta = () => {
    let planetas = [, "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
    let posicion = document.getElementById('input-posicion').value;

    for (let i = 0; i < planetas.length; i++) {
        if (posicion == i) {
            // console.log(planetas[i] + ", está en la posición " + planetas.indexOf(planetas[i]) + ".")
            document.getElementById('parrafo-posicion').innerHTML = `${planetas[i]}, está en la posición ${planetas.indexOf(planetas[i])}.`;
        }
    }
}



// Intento #2 Este while me muestra todos los elementos del array

// while (posicion == i) {
//     for ( i ; i < poss.length; i++) {
//         // const element = array[i];
//         // console.log(i);
//         console.log(poss[i]+", está en la posición "+poss.indexOf(poss[i])+".")
//     }
//     break
// }

// Intento #1 Este for me muestra todos los elementos del array

// for (let i = 1; i < poss.length; i++) {
//     // const planeta = poss[i];
//     console.log(poss[i]+", está en la posición "+poss.indexOf(poss[i])+".")
// }


// if (posicion == 1) {
//     console.log("Mercury, Está en la posición 1.")
// }else{
//     if (posicion == 2) {
//         console.log("Venus, Está en la posición 2.")
//     }else{
//         if (posicion == 3) {
//             console.log("Earth, Está en la posición 3.")
//         }else{
//             if (posicion == 4) {
//                 console.log("Mars, Está en la posición 4.")
//             }else{
//                 if (posicion == 5) {
//                     console.log("Jupiter, Está en la posición 5.")
//                 }else{
//                     if (posicion == 6) {
//                         console.log("Saturn, Está en la posición 6.")
//                     }else{
//                         if (posicion == 7) {
//                             console.log("Uranus, Está en la posición 7.")
//                         }else{
//                             if (posicion == 8) {
//                                 console.log("Neptune, Está en la psición 8.")
//                             }else{
//                                 if (posicion == 9) {
//                                     console.log("Pluto, Está en la psición 9.")
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }