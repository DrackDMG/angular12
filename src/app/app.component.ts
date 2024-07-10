import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular12";

  constructor() {
    //EL map() método crea una nueva matriz con los resultados de llamar a una función para cada elemento de la matriz.
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => i * 2);
    console.log(array); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

    //El forEach()  no devuelve nada, simplemente itera sobre la matriz y ejecuta la función de devolución de llamada para cada elemento.
    const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((i) => i * 2);
    console.log(array2); //undefined

    //El find() método devuelve el primer elemento que cumple con la condición dada en la función de prueba.
    const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].find((i) => i === 5);
    console.log(array3); //5

    //El filter() método crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función de prueba.
    const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((i) => i > 5);
    console.log(array4); //[6, 7, 8, 9, 10]

    //El reduce() método ejecuta una función reductora en cada elemento de la matriz, dando como resultado un único valor de salida.
    const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, i) => acc + i);
    console.log(array5); //55

    const array6 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].reduce(
      (acc, i) => acc + i
    );
    console.log(array6); //abcdefghij

    //El some() método comprueba si al menos un elemento de la matriz pasa la prueba implementada por la función proporcionada.
    const array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].some((i) => i > 5);
    console.log(array7); //true o false //true

    //El every() método comprueba si todos los elementos de la matriz pasan la prueba implementada por la función proporcionada.
    const array8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].every((i) => i > 5);
    console.log(array8); //true o false //false

    //El includes() método determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
    const array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(5);
    console.log(array9); //true o false //true

    //El indexOf() método devuelve el primer índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente.
    const array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].indexOf(5);
    console.log(array10); //4

    //El lastIndexOf() método devuelve el último índice en el que se puede encontrar un elemento dado en la matriz, o -1 si no está presente.
    const array11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5].lastIndexOf(5);
    console.log(array11); //10

    //El findIndex() método devuelve el índice del primer elemento de una matriz que cumple con la función de prueba proporcionada.
    const array12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].findIndex((i) => i === 5);
    console.log(array12); //4

    //El sort() método ordena los elementos de una matriz localmente y devuelve la matriz ordenada.
    const array13 = [5, 2, 3, 4, 1, 6, 7, 8, 9, 10].sort();
    console.log(array13); //[1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

    //El reverse() método invierte el orden de los elementos de una matriz.
    const array14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();
    console.log(array14); //[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

    //El join() método une todos los elementos de una matriz en una cadena.
    const array15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].join("-");
    console.log(array15); //1-2-3-4-5-6-7-8-9-10

    //El split() método divide un objeto de tipo String en un array (vector) de cadenas mediante la separación de la cadena en subcadenas.
    const array15_1 = "1-2-3-4-5-6-7-8-9-10".split("-");
    console.log(array15_1); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    //El slice() método devuelve una copia de una parte de una matriz dentro de un nuevo arreglo comenzando desde inicio hasta fin (fin no incluido).
    const array16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].slice(2, 5);
    console.log(array16); //[3, 4, 5]

    //El splice() método cambia el contenido de una matriz eliminando elementos existentes y/o agregando nuevos elementos.
    const array17 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    array17.splice(2, 0, 11, 12);
    console.log(array17); //[1, 2, 11, 12, 3, 4, 5, 6, 7, 8, 9, 10]

    //El concat() método se utiliza para unir dos o más matrices. Este método no cambia las matrices existentes, sino que devuelve una nueva matriz.
    const array18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].concat([11, 12]);
    console.log(array18); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    //El push() método agrega uno o más elementos al final de una matriz y devuelve la nueva longitud de la matriz.
    const array19 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    array19.push(11, 12);
    console.log(array19); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    //El unshift() método agrega uno o más elementos al principio de una matriz y devuelve la nueva longitud de la matriz.
    const array20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    array20.unshift(11, 12);
    console.log(array20); //[11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    //El pop() método elimina el último elemento de una matriz y lo devuelve.
    const array21 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(array21.pop()); //10
    console.log(array21); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

    //El shift() método elimina el primer elemento de una matriz y lo devuelve.
    const array22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(array22.shift()); //1
    console.log(array22); //[2, 3, 4, 5, 6, 7, 8, 9, 10]

    //El fill() método llena todos los elementos de una matriz desde un índice inicial hasta un índice final con un valor estático.
    const array23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(array23.fill(0, 2, 5)); //[1, 2, 0, 0, 0, 6, 7, 8, 9, 10]

    //El copyWithin() método copia parte de una matriz a otra ubicación en la misma matriz y la sobrescribe sin cambiar su longitud.
    const array24 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(array24.copyWithin(0, 2, 5)); //[3, 4, 5, 4, 5, 6, 7, 8, 9, 10]

    //el Object.keys() método devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal.
    const object = { a: 1, b: 2, c: 3 };
    console.log(Object.keys(object)); //["a", "b", "c"]

    //El Object.values() método devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
    console.log(Object.values(object)); //[1, 2, 3]

    //El Object.entries() método devuelve un array de pares [clave, valor] de una propiedad enumerable de un objeto.
    console.log(Object.entries(object)); //[["a", 1], ["b", 2], ["c", 3]]

    //Spread Operator
    const array25 = [1, 2, 3, 4, 5];
    const array26 = [6, 7, 8, 9, 10];
    const array27 = [...array25, ...array26];
    console.log(array27); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const object2 = { a: 1, b: 2, c: 3 };
    const object3 = { d: 4, e: 5, f: 6, ...object2 };
    console.log(object3); //{d: 4, e: 5, f: 6, a: 1, b: 2, c: 3}

    //Desestructuración
    const array28 = [1, 2, 3, 4, 5];
    const [a, b, c, d, e] = array28;
    console.log(a); //1

    const object4 = { a: 1, b: 2, c: 3 };
    const { a: x, b: y, c: z } = object4;
    console.log(x); //1

    const object5 = { name: "John", age: 30, city: "New York" };
    const { name: nombre } = object5;
    console.log(nombre); //John

    //Ejercicio 1 - {1: "a", 2: "a", 3: "a", 4: "a", 5: "a", 6: "a"} convertir a Array y sumar todos los pares
    const object6 = { 1: "a", 2: "a", 3: "a", 4: "a", 5: "a", 6: "a" };
    const array29 = Object.keys(object6);
    const suma = array29
      .map((i) => parseInt(i))
      .filter((i) => i % 2 === 0)
      .reduce((acc, i) => acc + i);
    console.log(suma); //12
    const suma2 = Object.keys(object6)
      .map((i) => parseInt(i))
      .reduce((acc, i) => (i % 2 === 0 ? acc + i : acc), 0);
    console.log(suma2); //12

    //Ejercicio 2 - [1, 2, 3, 4, 5, 6] filtrar los pares y mostrarlos como cadena
    const array30 = [1, 2, 3, 4, 5, 6];
    const array31 = array30.filter((i) => i % 2 === 0);
    const cadena = array31.join("-");
    console.log(cadena); //2-4-6
  }
}
