//  Calcular area de un Triángulo Isósceles
// Verificar que tipo de Triángulo Isósceles
// Verificar con que datos contamos
// Aplicar las formulas correspondientes

// altura es raiz de altura al cuadrado menos base al cuadrado entre 4
//  h = √(a^2 - (b^2/4))

// function altura() {
//   const lado1 = document.getElementById("lado1");
//   const valueLado1 = lado1.value;

//   const base = document.getElementById("base");
//   const valueBase = base.value;

//   const altura = Math.sqrt(
//     valueLado1 * valueLado1 - (valueBase * valueBase) / 4
//   );
//   alert(altura);
// }

// area es base por altura entre 2
//  area = (b*h)/2
// function area() {
//   const base = document.getElementById("base");
//   const valueBase = base.value;

//   const altura = document.getElementById("altura");
//   const valueAltura = altura.value;

//   const area = (valueBase * valueAltura) / 2;
//   alert(area);
// }

function start() {
  const lado1 = document.getElementById("lado1");
  const valueLado1 = lado1.value;

  const lado2 = document.getElementById("lado2");
  const valueLado2 = lado2.value;

  const base = document.getElementById("base");
  const valueBase = base.value;

  if (valueLado1 != "" && valueLado2 != "" && valueBase != "") {
    if (valueLado1 != valueLado2) {
      alert("Es un triangulo Rectangulo, no uno Isósceles");
    } else {
      const area = (valueBase * (Math.sqrt((valueLado1 * 2) - (valueBase ** 2 / 4)))) / 2;
      alert(area);
    }
  } else{
    alert("falta ingresar algun dato");
  }
}
