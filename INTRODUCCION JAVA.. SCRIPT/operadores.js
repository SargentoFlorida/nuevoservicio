/* operadores aritmeticos.
   = operador de asignación, se usa para asiganar valores a una variable.
   + suma
   - resta
   * multiplicación
   / division
   % modulo
   ++ aumento
   -- disminucion
 */

//const resultado = 10 + 10;
//const resultado2 = 10 - 10;      ejempl quitar//
//const resultado3 = 10 % 3;

//let numero = 1;
//numero++;

//console.log(numero);

/* operadores de asignación
  += suma un numero al valor de una variable.
  -= resta un numero al valor de una variable.
  *= resta un numero al valor de una varible.
  /= resta un numero al valor de una variable.
  %= obtiene el sobrante de una division y lo saigna a la variable.
  */

let numero = 10;
//numero = numero + 5;
numero -= 5;
//console.log(numero);





/*  operadores de compracion:
nos permiten comparar valores
    ==  igual que
    === igual en valor y tipo de valor
    !=  diferente
    !== diferente en valor y diferente en tipo
    >  mayor que
    <  menor que
    >= mayor  o  igual que
    <= menor o igual que
    ?  operador ternario
*/

//const resultado = 5 > 1;  // true
//const resultado = 20 >= 20;  true ejemplos
//const resultado = 20 == 20   // true
//const resultado = 20 === '20';  // es false

const resultado = 7 > 10 ? 'el primer valor es mayor que el segundo': ' el segundo valor es mayor que el primero;'
console.log(resultado);