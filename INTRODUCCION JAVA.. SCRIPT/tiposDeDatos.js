/*tipos de datos que podemos guardar en la variables:
  string -- cadena de texto
  number -- numero
  boolean -- boleano (verdadero o falso)
  objet -- objeto
  function -- funciones (bloques de codigo)

  null --  valor nulo ( cuando quiero que una variable no tenga valo)
  undefined -- valor sin definir ( cuando javascrib define el valor)
  */

// cadena de texto ejemplo

const nombre = 'angelo';
const parrafo = 'este es un "parrafo"';
const parrafo2 = "este es un 'parrafo'";
//const parrafo3 = "este es un /'parrafo/'";

//  numero
const numero = 4;
const numero2 = -4.163;

// boleano verdadero o falfo
const usuarioConectado = true;
const mayorQue = 10> 2;
console.log(mayorQue);

//  arrays = arreglos... nos permite guardar multiples valores

const arreglo = ['texto', 456, true,{propiedad: 'valor'}, [1 , 2, 3]];
console.log(arreglo);

// objeto

const persona = {
    nombre : 'angelo',
    edad : '41',
    carro : {
        marca : 'renault',
        color : 'azul',
    }
}
console.log(persona.nombre);

// function  = funciones

function hola(){
    console.log('HOLA');
}
hola();

// Null
   // Normalmente lo usamos cuando queremos especificar que un valor sea nulo.
const miVariable = null;


//  undefined
  //undefined se usa para indicarnos que un valor no esta definido.
const  miVariable2 = undefined;
