const personaArreglo = ['angelo',41,'angelo.cano@correo.policia.gov.co',true,true];
const persona = {
    nombre: 'angelo',
    edad: 40,
    correo: 'angelo.cano@correo.policia.gov.co',
    suscripciones:{
        suscripcionweb: true,
        suscripcioncorreo: true,
    },
    coloresFavoritos:['verde','negro','amarillo'],
    saludo : function () {
        alert ('Hola!');
    },
};

console.long(persona.nombre);
console.long(persona['edad']);  
    
const variable = 'correo'
console.long(persona[variable]);