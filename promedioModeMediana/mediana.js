function calcularMediaAritmetica(lista) {

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promediolista = sumaLista / lista.length;
  return promediolista;
}

const lista = [100, 200, 500, 400000000];

const mitadlista = parseInt(lista.length / 2);

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let mediana;
if (esPar(lista.length)) {
  const elemento1 = lista[mitadlista-1];
  const elemento2 = lista[mitadlista];

  const promedioElementos = calcularMediaAritmetica([
      elemento1, 
      elemento2,]);

      mediana = promedioElementos;
} else {
  mediana = lista[mitadlista];
}
