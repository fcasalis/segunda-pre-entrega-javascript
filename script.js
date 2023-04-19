const libros = [];

const crearLibros = () => {
  const nombreLibro = prompt("ingrese nombre del libro")
  const autorLibro = prompt("ingrese autor del libro")
  const precioLibro = prompt("ingrese precio del libro")
  libros.push({
    nombre: nombreLibro,
    autor: autorLibro,
    precio: precioLibro
  })
  
};

const actualizarPrecioLibro = () => {
    const buscarLibro = prompt("ingrese el nombre del libro que desea actualizar")
    const index = libros.findIndex(libros => libros.nombre == buscarLibro)
    if(index != -1){

        const precioNuevo = prompt("ingrese nuevo precio")
        libros[index].precio = precioNuevo
    }else{
        alert("no existe ese libro")
    }
    
    
};
const borrarLibros = () => {
    const buscarLibro = prompt("ingrese el nombre del libro que desea borrar")
    const index = libros.findIndex(libros => libros.nombre == buscarLibro)
    if(index !=-1){
        libros.splice[index,1]
    }
  
};

const verLibros = () => {
  libros.forEach((libros)=>{
    alert("Nombre: "+ libros.nombre + " Autor: " + libros.autor + " Precio: " + libros.precio)
  })
};

const inicializar = (continuar) =>{
  while (continuar) {
    const accion = prompt(
      "ingrese accion: crear libro = c / actualizar precio del libro = a / borrar libro = b / ver libros = v"
    );
    switch (accion) {
      case "c":
        crearLibros();
        break;
      case "a":
        actualizarPrecioLibro();
        break;
      case "b":
        borrarLibros();
        break;
      case "v":
        verLibros();
        break;
      default:
        alert("accion no valida");
    }
    continuar = confirm("seguir editando libros")
  }

};

inicializar(true)
