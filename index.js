import { Producto, ProductoDigital } from "./producto.js";
import { Usuario, UsuarioVIP } from "./usuario.js";

//Usuarios
const cliente1 = new Usuario("Pepe el pollo","PepeElPollo@hotmail.com");
const cliente2 = new Usuario("Carlos", "carlitoscorreo@gmail.com");

cliente1.saludo();
cliente1.resumen();

cliente2.saludo();
cliente2.resumen();
//UsuarioVIP
const clienteVip1 = new UsuarioVIP("Inuyasha","inuperro@gmail.com");

clienteVip1.saludo();

clienteVip1.resumen();
clienteVip1.desactivar();
clienteVip1.resumen();

//------------------------------------------------------------------------
//Productos
const producto1 = new Producto("Shampoo",14000,"Cuidado personal");
const producto2 = new Producto("Microfono",700000,"Tecnologia");

console.log(producto1.calcularTotal());
producto1.tarjeta();
producto2.tarjeta();

producto2.resumen();
producto2.aplicarDescuento(20);
producto2.resumen();

//Producto digital
const producto3 = new ProductoDigital("Netflix","30000",32549505)

console.log(producto3.calcularTotal());

producto1.tarjeta();
producto3.tarjeta();
