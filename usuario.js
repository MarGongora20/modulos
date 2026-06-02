export class Usuario{
    constructor(nombre, email, rol){
        this.nombre = nombre;
        this.email = email;
        this.rol = "cliente";
        this.activo = true;
    }

    saludo(){
        console.log("Hola "+this.nombre+", su rol es de: "+this.rol);
    }

    desactivar(){
        this.activo = false;
    }

    resumen(){
        console.log(`
        Nombre: ${this.nombre}
        Email: ${this.email}
        Rol: ${this.rol}
        Estado de cuenta: ${this.activo}
        `);
    }
}

export class UsuarioVIP extends Usuario{
    constructor(nombre,email,rol,membresia){
        super(nombre,email,rol);
        this.rol = "Cliente VIP"
        this.membresia = membresia;
    }

    saludo(){
        console.log("Bienvenid@ "+this.nombre+" usted es un "+this.rol+" nos complace verl@ de nuevo!");   
    }

    beneficios(){
        console.log(`
            Beneficios clientes VIP:
            - Descuento en todos los productos.
            - Puntos acumulables
            - Acceso a productos exclusivos
            - BlackFriday anticipado
            `);
    }
}