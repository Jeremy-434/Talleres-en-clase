let num  = 5;
let i = 0;
console.log(num);
while (num != 5) {
    console.log(i, num);
    i++;
    num = Math.floor(Math.random() * 10);
}
console.log(i, num);