function onClickCalcular() {
  const precioTienda = document.getElementById("precioTienda");
  const precioOriginal = precioTienda.value;

  const descuentoTienda = document.getElementById("descuentoTienda");
  const descuentoOriginal = descuentoTienda.value;

  const cuponDescuento = document.getElementById("cuponDescuento");
  const cuponNuevo = cuponDescuento.value;

  let cuponD;
  let porcentajeTotal;
  let calcular;

  switch (cuponNuevo) {
    case "Cupon1":
      cuponD = 5;
    porcentajeTotal = parseInt(descuentoOriginal) + cuponD;
      calcular = calcularDescuento(precioOriginal, porcentajeTotal);
      break;
    case "Cupon2":
      cuponD = 10;
      porcentajeTotal = parseInt(descuentoOriginal) + cuponD;
      calcular = calcularDescuento(precioOriginal, porcentajeTotal);
      break;
    case "Cupon3":
      cuponD = 15;
      porcentajeTotal = parseInt(descuentoOriginal) + cuponD;
      calcular = calcularDescuento(precioOriginal, porcentajeTotal);
      break;
  }
}

function calcularDescuento(precio, descuento) {
  console.log(descuento);
  const porcentajeDescuento = 100 - descuento;
  const precioAPagar = (precio * porcentajeDescuento) / 100;

  const resultP = document.getElementById("resultP");
  resultP.innerHTML = "$"+precio;

  const resultD = document.getElementById("resultD");
  resultD.innerHTML = "$"+precioAPagar;
}
