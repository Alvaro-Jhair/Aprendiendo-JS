var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];

//.filter nos ayuda a filtrar
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
articulosFiltrados

//.map nos ayuda a recorrer (devolviendo un nuevo array)
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
})

//.find nos ayuda a encontrar un elemento 
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})

//.foreach nos ayuda a recorrer el array y imprimir los elementos
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

//.some nos ayuda a saber si hay elementos que cumplan la condicion true/false
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
})

