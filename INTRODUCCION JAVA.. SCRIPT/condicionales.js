
















/* ejemplo  # 1
*/
/*const usuario = {
    edad: 17,
    pais: 'colombia',
    ticket: true,
}

if(usuario.edad > 17){
console.log('el usuario es mayor de edad. puede entrar al concierto.');
} else {
console.log( 'el usuario es menor de edad, no puede entrar al concierto');
}
*/

// ejemplo  # 2 combinando operadores

/*const usuario = {
    edad: 40,
    pais: 'colombia',
    ticket: false, 
};
  
if(usuario.edad >=  18 && usuario.ticket){
    console.log( 'el usurio es mayor de edad ytiene ticket.' );
} else { 
    console.log('el usurio es menor de edad y tiene ticket o no tiene un ticket.')

}


ejemplo  # 3 aninando condiciones
*/
/*const usuario = {
    edad: 17,
    pais: 'colombia',
    ticket: false,
}
if(usuario.edad >= 18) {
        if( usuario.ticket)  {
           console.log(' el usuario es mayor de edad y tiene un ticket.');
    } else{
     console.log('el usuario es mayor de edad y tiene no tiene un ticket.');
    }
}else {
    console.log('el usuario es menor de edad.')
}

/* ejemplo  # 4 elseif
*/

const usuario = {
    edad: 27,
    pais: 'argentina',
    ticket: false,
} ;

if (usuario.pais === 'mexico'){
         console.log('el usuario es mexicano.');
} else if('usuario.pais=== colombia.'){
         console.log(' el usuario es colombiano');
} else if('usuario.pais=== españa.'){
         console.log('el ususario es español');
} else {
        console.log('el usuario es de otro pais');
}