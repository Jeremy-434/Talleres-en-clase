

let glucosa = 44;
let insulina = [4, 6, 8, 10, 12, 14, 16];

if (glucosa >= 7.7 && glucosa <= 10) {
    console.log("Su glucosa es de " + glucosa + ", por lo que las unidades de insulina son de " + insulina[0] + ".");
} else {
    if (glucosa >= 10.1 && glucosa <= 12.2) {
        console.log("Su glucosa es de " + glucosa + ", por lo que las unidades de insulina son de " + insulina[1] + ".");
    } else {
        if (glucosa >= 12.3 && glucosa <= 14.4) {
            console.log("Su glucosa es de " + glucosa + ", por lo que las unidades de insulina son de " + insulina[2] + ".");
        } else {
            if (glucosa >= 14.5 && glucosa <= 16.6) {
                console.log("Su glucosa es de " + glucosa + ", por lo que las unidades de insulina son de " + insulina[3] + ".");
            } else {
                if (glucosa >= 16.7 && glucosa <= 18.8) {
                    console.log("Su glucosa es de " + glucosa + ", por lo que las unidades de insulina son de " + insulina[4] + ".");
                } else {
                    if (glucosa >= 18.9 && glucosa <= 22.1) {
                        console.log("Su glucosa es de " + glucosa + ", por lo que las unidades de insulina son de " + insulina[5] + ".");
                    } else {
                        console.log("Su glucosa es de " + glucosa + ", por lo que las unidades de insulina son de " + insulina[6] + ".");
                    }
                }
            }
        }
    }
}