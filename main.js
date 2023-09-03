//logeo de pagina

(async () => {
  const { value: email } = await Swal.fire({
    title: "Ingrese su correo electrónico",
    input: "email",
    inputLabel: "Su dirección de correo electrónico",
    inputPlaceholder: "Ingrese su dirección de correo electrónico",
  });

  if (email) {
    const emailRegistrado = "Santigamer240@gmail.com";
    let ContieneArroba = false;
    console.log(email);

    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") {
        ContieneArroba = true;
        break;
      }
    }

    if (ContieneArroba) {
      if (ContieneArroba && emailRegistrado === email) {
        console.log("Sesión iniciada correctamente");
        Swal.fire("Sesión iniciada correctamente");
      } else {
        console.log("Su correo electrónico es incorrecto");
        Swal.fire("Su correo electrónico es incorrecto");
      }
    } else {
      Swal.fire("Correo electrónico no válido");
      console.log("Correo electrónico no válido");
    }
  }
})();
//

const producto = [
  {
    id: 1,
    producto: "Creatina 300 grs de XXL Pro Nutrition",
    categoria: "Suplemento",
    precio: 49.99,
    marca: "XXL",
    imagen: "img/creatina1.jpg",
    descripcion:
      "Ideal para prevenir fatiga muscular, aumento muscular y mejorar el rendimiento.",
  },
  {
    id: 2,
    producto: "Protein Star Nutrition",
    categoria: "Suplemento",
    precio: 49.99,
    marca: "Star Nutrition",
    imagen: "img/creatina2.jpg",
    descripcion:
      "Envase de 300 gramos. Ideal para cualquier tipo de deportes. Masa muscular. Recuperación.",
  },
  {
    id: 3,
    producto: "TrueMade Whey Protein",
    categoria: "Suplemento",
    precio: 29.99,
    marca: "Ena",
    imagen: "img/creatina3.jpg",
    descripcion:
      "Whey Protein Isolate (WPI) es la forma más pura de proteína de suero que existe actualmente.",
  },
  {
    id: 4,
    producto: "bcaa 6000 grs de XXL nutrex",
    categoria: "Suplemento",
    precio: 49.99,
    marca: "XXL",
    imagen: "img/creatina4.jpg",
    descripcion:
      "Ideal para prevenir fatiga muscular, aumento muscular y mejorar el rendimiento.",
  },
];

console.log(producto);

const productoContainer = document.querySelector(".productos-container");
console.log(productoContainer);

const generarTarjetas = (productos) => {
  const contenedor = document.getElementById("productos-container");

  const tarjetasHTML = productos.reduce((acumulador, producto) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");

    const nombre = document.createElement("h2");
    nombre.textContent = producto.producto;

    const precio = document.createElement("p");
    precio.textContent = `Precio: $${producto.precio}`;

    const descripcion = document.createElement("p");
    descripcion.textContent =
      producto.descripcion || "Descripción no disponible";

    const imagen = document.createElement("img");
    if (producto.imagen) {
      imagen.src = producto.imagen;
      imagen.alt = producto.producto;
    } else {
      imagen.src = "imagen_por_defecto.jpg";
      imagen.alt = "Imagen no disponible";
    }

    const botonAgregar = document.createElement("button");
    botonAgregar.textContent = "Agregar al Carrito";

    botonAgregar.addEventListener("click", () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      Swal.fire("Producto agregado al carrito Agregado!", "", "success");
    });

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(botonAgregar);

    acumulador.appendChild(tarjeta);
    return acumulador;
  }, document.createElement("div"));

  contenedor.innerHTML = "";
  contenedor.appendChild(tarjetasHTML);
};

generarTarjetas(producto);

//
