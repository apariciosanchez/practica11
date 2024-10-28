function procesarUsuario(nombre, edad, ...otrosDatos) {
    let usuarioFormateaso = {
        nombre,
        edad,
        infoAdicional: {...otrosDatos}
    };
    return usuarioFormateaso
}

let usuario = procesarUsuario("ana", 25, "ingeniera", "brasil", "marzo 2024");
console.log(usuario);