// INPUTS
document.getElementById("lado").style.display = "initial";
document.getElementById("base").style.display = "initial";
document.getElementById("radio").style.display = "initial";
// LABELS
document.getElementById("lblLado").style.display = "initial";
document.getElementById("lblBase").style.display = "initial";
document.getElementById("lblRadio").style.display = "initial";
// BOTONES
document.getElementById("form__buttons").style.display = "initial";
document.getElementById("calcularPerimetro").style.display = "initial";
document.getElementById("calcularDiametro").style.display = "initial";
document.getElementById("calcularArea").style.display = "initial";
const PI = Math.PI;

function OnclikcSeleccion() {
  const seleccion = document.getElementById("seleccion");
  const figura = seleccion.value;
  console.log(figura);

  switch (figura) {
    case "Cuadrado":
      camposCuadrado();
      break;

    case "Rectangulo":
      camposRectangulo();
      break;
    case "Circulo":
      camposCirculo();
      break;
    case "":
      camposVacios();
      break;
  }
}

function onClickcalcularArea() {
  const figura = document.getElementById("seleccion");
  const figuraValue = figura.value;

  const lado = document.getElementById("lado");
  const ladoValue = lado.value;

  const base = document.getElementById("base");
  const baseValue = base.value;

  const radio = document.getElementById("radio");
  const radioValue = radio.value;

  switch (figuraValue) {
    case "Cuadrado":
      const areaCuadrado = ladoValue * ladoValue;
      console.log(areaCuadrado);
      break;

    case "Rectangulo":
      const areaRectangulo = ladoValue * baseValue;
      console.log(areaRectangulo);
      break;
    case "Circulo":
        const areaCirculo = PI *(radioValue *radioValue);
        console.log(areaCirculo);
      break;
  }
}

function onClickcalcularPerimetro() {
  const figura = document.getElementById("seleccion");
  const figuraValue = figura.value;

  const lado = document.getElementById("lado");
  const ladoValue = lado.value;

  const base = document.getElementById("base");
  const baseValue = base.value;

  switch (figuraValue) {
    case "Cuadrado":
      const perimetroCuadrado = ladoValue * 4;
      console.log(perimetroCuadrado);
      break;
    case "Rectangulo":
      const perimetroRectangulo = 2 * ladoValue + 2 * baseValue;
      console.log(perimetroRectangulo);
  }
}

function onClickcalcularCircunferencia() {
  const radio = document.getElementById("radio");
  const radioValue = radio.value;

  const circunferencia = PI*(radioValue*2);
  console.log(circunferencia);
}

function camposCuadrado() {
  // Labels
  document.getElementById("lblLado").style.display = "initial";
  document.getElementById("lblBase").style.display = "initial";
  document.getElementById("lblRadio").style.display = "initial";
  //Inputs
  document.getElementById("lado").style.display = "initial";
  document.getElementById("base").style.display = "initial";
  document.getElementById("radio").style.display = "initial";

  //Buttons
  document.getElementById("form__buttons").style.display = "initial";
  document.getElementById("calcularPerimetro").style.display = "initial";
  document.getElementById("calcularArea").style.display = "initial";
  document.getElementById("calcularDiametro").style.display = "initial";
}
function camposRectangulo() {
  // INPUTS
  document.getElementById("lado").style.display = "initial";
  document.getElementById("base").style.display = "initial";
  document.getElementById("radio").style.display = "initial";
  // Labels
  document.getElementById("lblLado").style.display = "initial";
  document.getElementById("lblBase").style.display = "initial";
  document.getElementById("lblRadio").style.display = "initial";
  // BOTONES
  document.getElementById("form__buttons").style.display = "initial";
  document.getElementById("calcularPerimetro").style.display = "initial";
  document.getElementById("calcularArea").style.display = "initial";
  document.getElementById("calcularDiametro").style.display = "initial";
}

function camposCirculo() {
  // INPUTS
  document.getElementById("lado").style.display = "initial";
  document.getElementById("base").style.display = "initial";
  document.getElementById("radio").style.display = "initial";
  // LABELS
  document.getElementById("lblLado").style.display = "initial";
  document.getElementById("lblBase").style.display = "initial";
  document.getElementById("lblRadio").style.display = "initial";
  // BOTONES
  document.getElementById("form__buttons").style.display = "initial";
  document.getElementById("calcularPerimetro").style.display = "initial";
  document.getElementById("calcularDiametro").style.display = "initial";
  document.getElementById("calcularArea").style.display = "initial";
}

function camposVacios() {
  // INPUTS
  document.getElementById("lado").style.display = "initial";
  document.getElementById("base").style.display = "initial";
  document.getElementById("radio").style.display = "initial";
  // LABELS
  document.getElementById("lblLado").style.display = "initial";
  document.getElementById("lblBase").style.display = "initial";
  document.getElementById("lblRadio").style.display = "initial";
  // BOTONES
  document.getElementById("form__buttons").style.display = "initial";
  document.getElementById("calcularPerimetro").style.display = "initial";
  document.getElementById("calcularDiametro").style.display = "initial";
  document.getElementById("calcularArea").style.display = "initial";
}
