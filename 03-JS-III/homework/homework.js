// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    // De la forma FOR
    var suma= 0 // se define la variable
    for (var i=1 ; i<11; i++ ){
      // es mejor que empiece en 1, va hasta 11 porque es de 1 al 10, vamos a agregar de 1 en 1 i++
      suma= suma + i;
    }
      return(suma);
  }
  // De la forma FOR OF
  //var numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //var suma= 0;
  //for (var element of numeros){
  //    suma= element + suma;
  //}
  //return suma;
  //}

  //De la forma FOR EACH
  // var numeros= [1, 2, 3, 4, 5, 6]
  // var suma=0;
  // numeros.forEach((noImporta)) => {
  // suma = suma + noImporta;
  //});
  //return suma;
  //}



function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
return nuevoArray= array.filter((element)=> element % 2=== 0); 
  
}


function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
return array.map((elemento)=> elemento **2)
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  return array.reduce((anterior, siguiente)=> anterior + siguiente)
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var numeroString= num.toString();
  return numeroString.length
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
