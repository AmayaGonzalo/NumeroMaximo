let numeroIngresado: number;
let numeroMayor: number;
let numAux: number = 0;

numeroIngresado = Number(prompt("Ingrese un número: "));
numeroMayor = numeroIngresado;

while (numeroIngresado !== 0) {
  numeroIngresado = Number(prompt("Ingrese un número: "));
  if (numeroIngresado === 0) {
    numAux = numeroIngresado;
  } else if (numeroIngresado > numeroMayor) {
    numeroMayor = numeroIngresado;
  }
}
console.log("El número mayor es: " + numeroMayor);
