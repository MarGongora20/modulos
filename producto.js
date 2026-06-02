export class Producto{
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    calcularTotal(){
        let iva = this.precio * 1.19;
        return iva
    }

    aplicarDescuento(porcentaje){
        this.porcentaje = porcentaje;
        let descuento = this.precio - this.porcentaje;
        console.log("Su producto quedaria a "+descuento+" pesos, con un descuento del "+this.porcentaje+ " porciento."); 
    }

    resumen(){
        console.log(`
        ** RESUMEN **
        Producto: ${this.nombre}
        Precio: $${this.precio}
        Categoria: ${this.categoria}
        `);
    }

    tarjeta(){
        const iva = this.calcularTotal();
        
        console.log(`
        ** RESUMEN **
        Producto: ${this.nombre}
        Precio: $${iva}
        Categoria: ${this.categoria}
        `);
    }
}

export class ProductoDigital extends Producto{
    constructor(nombre, precio, licencia){
        super(nombre, precio)
        this.licencia = licencia;
    }

    calcularTotal(){
        let sinIva = this.precio;
        return sinIva
    }

    tarjeta(){
        console.log(`
        ** PRODUCTO **
        Nombre: ${this.nombre}
        Precio: ${this.precio}
        Licencia: ${this.licencia}
        `);
    }
}