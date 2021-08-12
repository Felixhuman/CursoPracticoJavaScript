

function calculaDescuento(precio, descuento) {
    const porcentajeAPagar = 100 - descuento;
    const precioDescuento = (precio * porcentajeAPagar) / 100;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "El valor del articulo es: " + precio + " pero con el descuento del: " + descuento + "% le sale a: $" + precioDescuento;



}
function onClickCalcular() {
    const precioOriginal = document.getElementById("PrecioOriginal");
    const precioOriginalValue = precioOriginal.value;

    const descuentoTienda = document.getElementById("DescuentoTienda");
    const descuentoTiendaValue = descuentoTienda.value;

    const precioDescuento = calculaDescuento(precioOriginalValue, descuentoTiendaValue);

}