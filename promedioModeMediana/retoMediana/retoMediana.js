const lista = [100, 200, 300, 500, 200, 100];
const listaOrdenada = lista.sort(function(a,b){
    return a - b;
});
console.log(listaOrdenada);

function medianaAritmetica(lista){
    console.log(lista);
    const sumalista= lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });

const promediolista = sumalista / lista.length;
return promediolista;

}

const mitadlista = parseInt(listaOrdenada.length / 2); 


function esPar(numero){
    if(numero%2===0){
        return true;
    }else{
        return false;
    }
}

let mediana;
if(esPar(listaOrdenada.length)){
    const elemento1 = listaOrdenada[mitadlista -1];
    const elemento2 = listaOrdenada[mitadlista];

    const promedioElementos = medianaAritmetica([elemento1,elemento2,]);
    media = promedioElementos;
} else{
    mediana = listaOrdenada[mitadlista];
}