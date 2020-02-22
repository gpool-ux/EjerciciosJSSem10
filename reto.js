
///////////RETO SEMANA 10/////////////////
// pregunta 1

let datos = (nombre, apellido, edad) => {
  return `Hola mi nombre es : ${nombre}, ${apellido} y mi edad es ${edad}`;
};
let info = datos("Sebastian", "Yabiku", "33 años");
console.log(info);

// pregunta 2

function matematica(a, b, c) {
  let m1 = Math.pow(a, 3);
  let m2 = Math.pow(b, 3);
  let m3 = Math.pow(c, 3);
  return m1 + m2 + m3;
}

console.log(
  "El resultado de numeros al cubo es: 2^3 + 3^3 + 5^3 =",
  matematica(2, 3, 5)
);

// pregunta 3
var toType = function(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-z|A-Z]+)/)[1]
    .toLowerCase();
};

toType({ a: 4 }); //" tipo object"
toType([1, 2, 3]); //" tipo array"
toType(new ReferenceError()); //"tipo error"
toType(new Date()); //"tipo date"
toType(Math); //"tipo math"
toType(JSON); //"tipo json"
toType(Number(1)); //"tipo number"
toType(String("abc")); //"tipo string"
toType(Boolean(true)); //"tipo boolean"

// pregunta 4
const sumTot = (...rest) => rest.reduce((a, b) => a + b);
console.log("La suma de de los parametros es:", sumTot(30, 50, 30, 10, 100));

// pregunta 5

function filtrarArray(arr) {
  return arr.filter(item => typeof item == "string");
}
console.log(
  "Vector Filtro SoloString: 1 , 2, a, b",
  filtrarArray([1, 2, "a", "b"])
);
console.log(
  "Vector Filtro SoloString: 1 , a , b , 0 ,200",
  filtrarArray([1, "a", "b", 0, 200])
);
console.log(
  "Vector Filtro SoloString: 1 , 2 , hola , 123",
  filtrarArray([1, 2, "hola", 123])
);

// pregunta 6
const NumMax = arr => {
  let max = [];
  for (var i = 0; i < arr.length; i++) {
    max.push(Math.max(...arr[i]));
  }
  return max;
};
console.log(
  "Los numeros mayores de los 3 vectores son:",
  NumMax([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0]
  ])
);

//pregunta 7

function telef(celString) {
  var vacio = ("" + celString).replace(/\D/g, "");
  var unir = vacio.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (unir) {
    return "(" + unir[1] + ") " + unir[2] + "-" + unir[3];
  }
}

console.log("El numero de telefono es:", telef("1234567890"));

//pregunta 8

const findLargestNums = arr => {
  let max = [];
  for (var i = 0; i < arr.length; i++) {
    max.push(Math.max(...arr[i]));
  }
  return max;
};
console.log(
  "Los numeros mayores de los 3 vectores son:",
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0]
  ])
);

//pregunta 9
const charIndex = (sentence, letter) => {
  let result = [];
  result.push(sentence.indexOf(letter));
  result.push(sentence.lastIndexOf(letter));
  return result;
};

console.log("Palabra con el primer indice y ultimo indice:",charIndex("circumlocution", "c"));

//pregunta 10

let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
};

console.log(Object.entries(obj));

 //pregunta 11



 let arr = [
     { name: "John", age: 21, budget: 23000 },
     { name: "Steve",  age: 32, budget: 40000 },
     { name: "Martin",  age: 16, budget: 2700 },
     { name: "Mario",  age: 16, budget: 3000 }


 ];

 function sumaNumeros(arr) {
   
     let suma = 0;
     for(i = 0; i < arr.length; i++) {
         suma = suma + arr[i].budget;
     }

     return suma;
 }

 console.log(sumaNumeros(arr));

//pregunta 12


  
 let students = [
     {name: "Oscar"},
     {name: "Franco"},
     {name: "Luis"},
     {name: "pepe"}
 ];


 function NombreStudents(students) {
      let arr = [];
     for(i=0; i< students.length; i++) {     

        arr.push(students[i].name);
     }

     return arr;
 }

 console.log(NombreStudents(students));

//pregunta 13

//pregunta 14
  

 function sumaCuadrados(n) {
             let suma = 0;
             for ( i = 1; i <= n; i++) {
                 suma = suma + Math.pow(i,2);
             }
             return suma;    
         }
        
 console.log(sumaCuadrados(3));

//pregunta 15


//pregunta 16

 let number = parseInt(prompt("Ingrese el numero: "));
 function matrizNumbers(number) {    

        
         for (i=number; i>= 0; i-- ) {
         console.log(i);       
      }
      return [i]; }
  console.log(matrizNumbers(number));

//pregunta 17

 let numbers = [10, 4, 1, 4, -10, -50, 32, 21];

 function minMax(numbers) {
     
     let min = Math.min.apply(null, numbers);
     let max = Math.max.apply(null, numbers); 
     let result = max - min;
     return result;
 }

 console.log(minMax(numbers));

//pregunta 18


 let result = arr.filter(e => typeof e !== 'string');

 console.log(result);


//pregunta 19

 var repeatelem = function(elem, n){
      
     var arr = [];

     for (var i = 0; i < n; i++) {
         arr = arr.concat(elem);
     };

     return arr;
 };

 console.log(repeatelem(13, 5))



