let productos = [
    {nombre: "laptop", precio: 900, categoria: "electronica" },
    {nombre: "bicicleta", precio: 500, categoria: "deportes" },
    {nombre: "celular", precio: 250, categoria: "electronica" },
    {nombre: "zapatillas", precio: 300, categoria: "deportes"}
];

// funcion para remplazar productos en el arreglo
function filtrarProductosPorCategoria(categoria, ...listaproductos) {
    let filtrados = listaproductos.filter(producto => producto.categoria === categoria);

    let precios = filtrados.map(producto => producto.precio);

    return {
    categoria,
    productosFiltrados: filtrados,
    // usasmos spread para los precios
    precios: [...precios]
    };
}

let resultado = filtrarProductosPorCategoria("electronica", ...productos);

console.log(resultado);