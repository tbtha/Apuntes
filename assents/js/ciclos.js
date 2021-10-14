    //EJERCICIO estructura de control y repetitivas
//var impar = 0;
            //estructura del ciclo repetitivo for para que pueda realizar el conteno desde el numero 0 hasta el numero 20 
//for (let i= 0; i <= 20; i++){
  //  if( i == 10){
   //     continue; //se ignora cualquier proceso
   // };
    //if( i == 19){
      //  break; // se rompe el ciclo actual
   // };
    //if (i % 2 == 0 ){ //mostrar numero pares 
      //  document.write(i + "<br>");
    //}
    //else{
      //  impar ++;
   // };
//};
//document.write("La cantidad de numeros impares es : " + impar)



//EJERCICIO 2 estrucutra de control (NUMERO IMPARES !=)

//var par = 1;
        //estructura del ciclo repetitivo for para que pueda realizar el conteno desde el numero 0 hasta el numero 20 
//for (let i= 1; i <= 50; i++){
  //  if( i == 11){
    //    continue; //se ignora cualquier proceso
    //};
    //if( i == 40){
      //  break; // se rompe el ciclo actual
   // };
    //if (i % 2 != 0 ){ //mostrar numero impares 
      //  document.write(i + "<br>");
   // }
    //else{
      //  par++;
    //};
//};
//document.write("La cantidad de numeros pares es : " + par)

// Ejerciocio numeros impares 
    //for (let i = 1 ; i <= 100 ; i++ ){
    //if (i % 2 == 1 ){
      //  console.log(i);
    //}
//}


//EJERCIOCIO
//let ingreso;
//while (true) {
//ingreso = prompt("Ingrese un número: "); //usuario tiene que ingresar un numero 
//if (ingreso >= 10) { // este numero tiene que ser = o mayor a 10 para poder salirdel ciclo
//break; // se rompre el ciclo
//}
//}

//EJERCICIO
/*  let impar = 0;
let i = 1;
while(i <= 15) {
i++;
if (i == 9) {
continue; // se ignora cualquier otro proceso
};
if (i == 14) {
break; // se rompe el ciclo actual
};
if (i % 2 == 0) {
document.write(i+"<br>");
}else {
impar++;
};
};
document.write("La cantidad de números impares es: "+impar);
*/
    
//EJERCICIO lectura 3 (8) do-while

/* let multiplos = 5; 
let i = 0;

do{
    if(i == 0){
        i++;
        continue;
    }
    if(i == 30){
        break;
    }
    if(i % 5 !== 0){
    document.write(i +"<br>" );
    }
    else {
        multiplos++;
    };
    i++
}
while (i<=50);
document.write("la cantidad de numero multiplos es :" + multiplos)
 */

//EJERCICIO      (muestra que numeros son pares y cuenta los numero impares) FOR Y FUNCTION 
//
/* 

    function esPar(num) {
        if(num % 2 == 0){  // el % de num en 2 tiene que ser == a 0 para numero pares 
            return true
        } else{
            return false
        }
    }

    let totalImpares =0;
    for(let i = 1; i<= 80;i++) {
        if(esPar(i)) {
            console.log("El número "+ i + " es par");
        }else{
         totalImpares++;  //incrementamos y contamos los numeros impares 
    }
    }
    
    console.log("En el rango de 1 a 80 hay " + totalImpares + " de números impares.");
     */

 



// MISMO EJERCICIO ANTERIOR PERO CON WHILE en vez de for 
/* function esPar(num) {
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    };
};

let totalImpares = 0 ;
let i = 1;
while ( i <= 80){
    if (esPar(i)){
        console.log("el numero " + i + "el par");
    }else {
        totalImpares++;
    };
    i++;
};

console.log("en el rango de 1 al 80 hay " + totalImpares + "de numeros impares");

 */

//factorial de 5 lo que quiere decir es (el factorial se representa con un !) 5! = 1 * 2 * 3 * 4 * 5
//let res = 1;
//for (let i =1; i <= 5; i++){
  //  res = res * i;
//}
//console.log(res);

//EJERCICIO GUIADO : FACTORIALES :lectura 3
/* var res = 1;
for (let i =1; i <= 10; i++){
    let res = 1 ;
    for (let j = 1; j <= i; j++){
        res = res * j;
    }

console.log("Factorial de " + i + " es:" + res);
}
 */

//EJERCICIO EN CLASES
/* const edadCliente = parseInt(prompt("Ingrse su edad"));

let verificarEdad = (edad) => {
    if (edad < 18){ return "Eres menor de edad";
    }
    return "Eres mayor de edad";
};

console.log(verificarEdad(edadCliente));


//aplicando funcion de flecha y ternario 
const edadCliente = parseInt(prompt("Ingrse su edad"));

const varificarEdad = (edad) => (edad < 18)? "Eres menor de edad" : "Eres mayor de edad"
 */

//CONTAR LETRAASS con funcion de flecha y recursividad
const palabraUsuario = (prompt("Ingrese un palabra"))

const  contarLetras = (usuario) => usuario.length 

console.log(contarLetras(palabraUsuario))