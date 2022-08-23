let n = 1000
let existentes = 0;

for (let i = 1; i < n; i++) {
    existentes = existentes + 1;
    if (i % 2 != 0) {
        console.log(i);
    }
}

console.log(existentes);