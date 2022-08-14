
const calcularCuadrante = () => {
    var cuaX = document.getElementById('input-cua_x').value;
    var cuaY = document.getElementById('input-cua_y').value;
    cuaX = Math.sign(cuaX);
    cuaY = Math.sign(cuaY);

    // console.log(cuaX);
    // console.log(cuaY);

    if (cuaX == 0 && cuaY == 0) {
        alert("Esta en el origen");
    } else {
        if (cuaX == 1 && cuaY == 1) {
            alert("Esta en el cuadrante 1");
        } else {
            if (cuaX == -1 && cuaY == 1) {
                alert("Esta en el cuadrante 2");
            } else {
                if (cuaX == -1 && cuaY == -1) {
                    alert("Esta en el cuadrante 3");
                } else {
                    if (cuaX == 1 && cuaY == -1) {
                        alert("Esta en el cuadrante 4");
                    }else{
                        alert("ERROR")
                    }
                }
            }
        }
    }
}

// var cuaX = 0;
// var cuaY = 0;
// cuaX = Math.sign(cuaX);
// cuaY = Math.sign(cuaY);

// // console.log(cuaX);
// // console.log(cuaY);
// if (cuaX == 0 && cuaY == 0) {
//     console.log("Esta en el origen");
// } else {
//     if (cuaX == 1 && cuaY == 1) {
//         console.log("Esta en el cuadrante 1");
//     } else {
//         if (cuaX == -1 && cuaY == 1) {
//             console.log("Esta en el cuadrante 2");
//         } else {
//             if (cuaX == -1 && cuaY == -1) {
//                 console.log("Esta en el cuadrante 3");
//             } else {
//                 if (cuaX == 1 && cuaY == -1) {
//                     console.log("Esta en el cuadrante 4");
//                 }
//             }
//         }
//     }
// }
