let estudiante = [
    {nombre: "carlos", nota: 8 },
    {nombre: "luis", nota: 7 },
    {nombre: "ana", nota: 9}
];

// creamos una copia usando spread para modificar la nota de carlos
let estudiantesModificados = estudiante.map(estudiante =>
   estudiante.nombre === "carlos" 
   ?{...estudiante, nota:7}
   :{...estudiante}
);

console.log(estudiantesModificados);

//resultados
console.log(estudiante);