
//EJEMPLO DE UNA FUNCTION (RESTA)
//let num1 = prompt ("Ingrese un primer numero");
//let num2 = prompt ("Ingrese un segundo numero");
 //function resta (a,b){
   //  let resultado = parseInt(a) - parseInt(b);
     //return resultado
 //};

 //document.write(" resultado de la resta : " + resta(num1,num2));

//EJEMPLO CALCULO DEL AREA DE UN TRIAGULO RECTANGULO
// let base = prompt("Ingrese la base del triangulo rectagulo");
 //let altura = prompt("Ingrese la altural triangulo rectangulo");

 //function calculo_area (b,a){
   //     let resultado = (b*a)/2
     //   return resultado 
 //};

 //document.write("El resultado del area es " + calculo_area(base,altura));


 //FUNCTION SIN RETORNO (SUMA)
 //let primerNum = parseInt(prompt("Ingrese un primer numero :"));
 //let segundoNum = parseInt(prompt("Ingrese un segundo numero :"));
 //let tercerNum  = parseInt(prompt("Ingrese un tercer numero :"));

// function sumaNumeros (n1,n2,n3){
  //   let resultado = n1 + n2 + n3
    //alert(" la sumas es " + resultado );
// };

 //sumaNumeros(primerNum,segundoNum,tercerNum)


 
 //FUNCTION CON RETORNO (SUMA) 
 //let primerNum = parseInt(prompt("Ingrese un primer numero :"));
 //let segundoNum = parseInt(prompt("Ingrese un segundo numero :"));
 //let tercerNum  = parseInt(prompt("Ingrese un tercer numero :"));

// function sumaNumeros (n1,n2,n3){
  //   let resultado = n1 + n2 + n3
    // return resultado );
// };

 //alerta(sumaNumeros(primerNum,segundoNum,tercerNum));


 //FUNCTION ANONIMA (division)
 //let num1 = parseInt(prompt("Ingrese un numero entero "));  
// let num2 = parseInt(prompt("Ingrese un numero entero "));
 
 //const division = function (a,b){
   //  let resultado = a / b
     //return resultado 
 //}

 //document.write("El resultado es el sig " + division(num1,num2));

//ALCANCE DE VARIABLES

// var miVariable = 10


 //function miFuncion(){
   //  var miVariable = 5
     //console.log("aqui esta " + miVariable)
 //}

 //console.log(" aqui esta " + miVariable);

// miFuncion();

 //console.log(" aqui esta " + miVariable);


 //EJERCICIO ALCANCE DE VARIABLES 
 //var lenguaje = "JavaScript"

 //function miFuncion(){
   //  lenguaje = "Javascript"
     //console.log(lenguaje)
     //var lenguaje = "NodeJs";
     //console.log(lenguaje)
 //}

 //miFuncion();

 //console.log(lenguaje)

 // ARRAY
//let frutas = ["manzana" , "pera" , "banana"]
//console.log(frutas);
        //.LENGHT (CANTIDAD DE VALORES EN UNA ARRAY)
//console.log(ftutas.light)

//SUMA DE TERMINOS CON ARRAY (y .shift)
//const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//function suma (nums) {
        // La Recursión se detiene cuando un array está vacío
//if (nums.length < 1) { // con el length se mide la cantidad de espacios que tiene la variable nums
//return 0;
//}
        // El método shift() remueve el primer elemento del array
        // y retorna ese valor. Este método cambia la longitud del array
//var valor = nums.shift();
        // retornando en cada pasada la suma de los primeros valores que se van removiendo
//return valor + suma(nums);
//}
//console.log(suma(nums))


//ALCANCE DE VARIABLES

//function suma() {
  //  let num1 = parseInt(prompt("Ingrese un numero"));
    //let num2 = parseInt(prompt("Ingrese un numero"));
    //resultado = num1 + num2;
    //return resultado 
//}


//function resta() {
  //  let num1 = parseInt(prompt("Ingrese un numero"));
    //let num2 = parseInt(prompt("Ingrese un numero"));
    //resultado = num1 - num2;
    //return resultado 
//};

//var resultado;
//document.write("El resultado de la suma es: " + suma());
//document.write("El resultado de la resta es: " + resta());

//document.write(`El resultado de la suma es: ${suma()} <br>`);
//document.write(`El resultado de la resta es: ${resta()}`);

//EJERCICIOS
//let i = 0;
//while(i < 10) {
//i++;
//}
//console.log(i)
//MAS EJERCIOSIO
//function recorrer() {
  //  let i = 0;
    //while(i < 10) {
   // i++;
    //}
    //}
    //recorrer();

//FUNCION DE FECHA (ARROW FUNCTIONS)
//var num = parseInt(prompt("Ingrese un numero :"));
//const alCuadrado = (numero) => resultado = Math.pow(numero, 2) ;
    
//console.log("El cuadrado del numero es: " + alCuadrado(num));

//ARRAY 
//let personas =  ['juan', 'diego','maria']
//for (let i = 0 ; i < personas.lenght ; i++){
  //  if (i === personas.lenght - 1){
    //    console.log(personas [i])
    //}
//}
