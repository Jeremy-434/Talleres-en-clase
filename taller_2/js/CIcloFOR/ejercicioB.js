

// Ejercicio B
var menores_15 = 0;
var entre_25_y_45 = 0;
var mayor_50 = 0;
for(i=0;i<=100;i++){
  if(i<15){
      menores_15= menores_15+1;
    }else{
        if(i>=25 && i<=45){
            entre_25_y_45=entre_25_y_45+1;
        }else{
          if(i>50){
            mayor_50=mayor_50+1;
          }
        }
    }
}
console.log(menores_15);
console.log(entre_25_y_45);
console.log(mayor_50);