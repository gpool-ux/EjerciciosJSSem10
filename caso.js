
/* Pregunta 1 */


let sum = (a, b) => a + b;

console.log(sum(30, 20));

/* Pregunta 2 */

let power = (base, exp) => Math.pow(base, exp);

console.log(power(3, 2));

/* Pregunta 3 */

let sumOfCubes = function() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum = sum + Math.pow(arguments[i], 3);
	}
	return sum;
}

console.log(sumOfCubes(1, 5, 9));

/* Pregunta 4 */

let triArea = (base, height) => base * height / 2;

console.log(triArea(3, 2));

/* Pregunta 5 */

let calculator = (n1, n2, op) => {
	switch (op){
		case "+":
			return n1 + n2;
		case "-":
		return n1 - n2;
		case "/":
			return n1 / n2;
		case "x":
			return n1 * n2;
		case "%":
			return n1 % n2;
		default:
			return "El parámetro no es reconocido.";
	}
};

console.log(calculator(6, 7, "+"));
