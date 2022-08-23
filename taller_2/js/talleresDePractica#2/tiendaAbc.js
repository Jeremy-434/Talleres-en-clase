
let valor_compra = 270000;
let valor_descuento;
let valor_total;

if (valor_compra > 80000 && valor_compra < 250000) {
    valor_descuento = valor_compra * 5 / 100;
    valor_total = valor_compra - valor_descuento;

    console.log(`El valor de su compra es de ${valor_compra}.00, por lo tanto, su descuento es de ${valor_descuento}.00. El total es de ${valor_total}.00`);
} else {
    if (valor_compra > 250000) {
        valor_descuento = valor_compra * 10 / 100;
        valor_total = valor_compra - valor_descuento;

        console.log(`El valor de su compra es de ${valor_compra}.00, por lo tanto, su descuento es de ${valor_descuento}.00. El total es de ${valor_total}.00`);
    } else {
        valor_descuento = 0;
        valor_total = valor_compra - valor_descuento;

        console.log(`El valor de su compra es de ${valor_compra}.00, por lo tanto, su descuento es de ${valor_descuento}.00. El total es de ${valor_total}.00`);
    }
}
console.log('Hola mundo');