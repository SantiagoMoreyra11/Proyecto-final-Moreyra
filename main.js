//logeo de pagina
const email = prompt("ingrese su mail");
const emailRegistrado = "Santigamer240@gmail.com";
ContieneArroba = false;
console.log(email);

for (let i = 0; i < email.length; i++) {
  if (email[i] === "@") {
    ContieneArroba = true;
    break;
  }
}
if (ContieneArroba) {
  if (ContieneArroba == true && emailRegistrado === email) {
    console.log("Sesion iniciada correctamente");
    alert("Sesion iniciada correctamente");
  } else if (ContieneArroba == true) {
    console.log("Su mail es incorrecto");
    alert("Su mail es incorrecto");
  }
} else {
  alert("Mail no valido");
  console.log("Mail no valido");
}

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
      alert("Producto agregado al carrito.");
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
