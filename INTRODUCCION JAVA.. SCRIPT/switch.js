const usuario= {
    nombre: 'angelo',
    pais:'colombia',
};
/*if (usuario.pais ===  'colombia'){
    console.log(' el usuario es colombiano');
  }  else if(usuario.pai ==='españa'){
    console.log(' el usuario es español');

    }else if(usuario.pai ==='alemania'){
    console.log('el usuario es aleman');
    } else {
        console.log(' el usuario es de otro pais');
    }
*/

switch(usuario.pais) {
    case'mexico':
    console.log('el usuario es colombiano.');
    case 'italia':
    console.log('el usuario es italiano.');
}
