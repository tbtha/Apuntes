 /*    //MANIPULAR EL DOM MEDIANTE 
        //ID .getElementById
const parrafo = document.getElementById("parrafo");
        //TAG o ETIQUETA .getElemtsByTagName
const parrafo = document.getElementsByTagName("p")
        //CLASS .getElemtentsByClassName
const boton = document.getElementsByClassName("boton");
        //SELECTOR CSS 
            //todos los elementos .querySelectorAll
const parrafo = document.querySelectorAll(".parrafo")
            //solo el primer elemento .querySelector
const parrafo = document.querySelector(".parrafo")
*/ 


//EJERCICIO lectura 4 
    //Intrucciones que traen el nodo del elemtento HTML mediante el DOM
/* const idContenedor = document.getElementById("contenedor");
console.log(idContenedor);

const etiquetaUl = document.getElementsByTagName("ul");
console.log(etiquetaUl)

const classMenu = document.getElementsByClassName("menu");
console.log(classMenu)

const lista = document.querySelectorAll(".item");
console.log(lista)
 */


//Ejercicio propuesto 11 lectura 4

const itemClass = document.querySelector(".item");
console.log(itemClass) 

const listId = document.getElementById("lista");
console.log(listId)

const bottonClass = document.querySelectorAll(".botones");
console.log(bottonClass)

const parrafo = document.getElementsByTagName("p");
console.log(parrafo)


//ACCESO AL CONTENIDO (para etiquetas que su texto sea visible o sea que esten entres estas llaves >"texto visible"<)
const parrafoDos = document.getElementById("parrafoDos").innerHTML;
console.log(parrafoDos)
//AL AGREGARLE VALOR PODEMOS CAMBIAR SU CONTENIDO EN HTML
const parrafoTres = document.getElementById("parrafoTres").innerHTML = "Cambie el contenido de 'Hola a todos' en js";
console.log(parrafoTres)

//ACCESO AL CONTENIDO (para etiquetas que su contenido visible este en los atributos)
const algoUno = document.getElementById("btnAccionUno").value;
console.log(algoUno)
//AL AGREGARLE VALOR PODEMOS CAMBIAR SU CONTENIDO EN HTML
const algoDos = document.getElementById("btnAccionDos").value = "Cambie el contenido de 'Accion' en js";
console.log(algoDos)
//PODEMOS CAMBIAR EL boton por una caja 
const botonCaja = document.getElementById("btnAccionTres").type= "text";
console.log(botonCaja)

//configurar atriburos mediante (.setAttribute (parametro(nombre del atributo , valor )))
const configurarAtributos = document.getElementById('btnAccionNuevo').setAttribute('style',
'background-color: yellow');


//ESCRIBIR SOBRE EL DOCUMENTO
document.write('<input type="text"  value="soy una caja de texto creada en js">');


//CREAR ELEMENTO DIRECTAMENTE EN HTML
var parrafoMil = document.createElement('p');  //escribirmos un elemento con este metodo y el ('p') corresponde a la etiqueta o tag a crear 
parrafoMil.innerHTML = 'Soy un párrafo'; //mediante .innerHTML agregamos el texto a la etiqueta
document.body.appendChild(parrafoMil); //permite agregar al body el elemento recien creado <p>

//REEMPLAZAR ELEMENTOS DEL BODY POR ELEMENTOS CREADOS EN JS
    //tenemos en html el <div> con el id = "box"
    // lo reemplazaremos por el sig boton
let caja = document.getElementById('box'); 
let boton = document.createElement('input');
boton.setAttribute('type', 'button'); //permite darle el atributo de type button
boton.setAttribute('value', 'Boton nuevo'); //permite darle el atributo value que es donde se le agrega el texto a los botones 
document.body.replaceChild(boton, caja); //permite reemplazar una etiqueta del body por una creada aqui en js parametros:(ahora,antes) (el que remplaza , el que estaba antes )


//EN CAMBIO PARA ELIMINAR UN ELEMENTO DEL DOM
 //document.body.removeChild(boton);
