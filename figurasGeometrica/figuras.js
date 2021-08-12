// Código del cuadrado
//console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden:" + ladoCuadrado + " cm");

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");
function perimetroCuadrado(lado) {
  return lado * 4;
}

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
function areaCuadrado(lado) {
  return lado * lado;
}
//console.groupEnd();

// Código del triángulo
//console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "los lados del tríangulo miden:" +
//     ladoTriangulo1 +
//     " cm, " +
//     ladoTriangulo2 +
//     " cm, " +
//     baseTriangulo +
//     " cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del tríangulo es de:" + alturaTriangulo + " cm");

function perimetroTrianguilo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// const perimetroTrianguilo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del tríangulo es: " + perimetroTrianguilo + " cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del tríangulo es: " + areaTriangulo + " cm^2");

//console.groupEnd();

// Código del círculo
// console.group("Círculos");
// // Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de:" + radioCirculo + " cm");

// //Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del círculo es de:" + diametroCirculo + " cm");
function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const PI = Math.PI;
// console.log("PI es: " + PI);

// //Circuferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("La circuferencia del círculo es de:" + perimetroCirculo + " cm");
// function perimetroCirculo(radio){
//     const diametro = diametroCirculo(radio);
//     return diametro * PI;
// }


// //Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es: " + areaCirculo + " cm^2");
function areaCirculo(radio){
    return (radio * radio) * PI;
}
// console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
  
}

function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}