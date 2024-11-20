export default class Cl_tienda {
    constructor(montoCaja, porcIncremento,) {
        //Atributos
        this.ventas = [];
        this.montoCaja = montoCaja
        this.porcIncremento = porcIncremento  
    }   // Setters y Getters
    set montoCaja(montoCaja) {
        this._montoCaja = +montoCaja;}
    get montoCaja() {
        return this.montoCaja;}
    set porcIncremento(porcIncremento) {
        this._porcIncremento = +porcIncremento;}
    get porcIncremento() {
        return this.porcIncremento;}

        // ***Metodos Agregar, Modificar y Eliminar Venta***
    agregarVenta(venta) {
        this.ventas.push(venta);
    };

    eliminarVenta(factura) {
        let facturaVenta = -1;
        for (let i = 0; i < this.ventas.length; i++)
          if (this.ventas[i].factura == factura) facturaVenta = i;
        if (facturaVenta !== -1) this.ventas.splice(facturaVenta, 1);
        return facturaVenta !== -1;
    };

    modificarVenta(factura, nuevosDatos){
        const ventas = this.ventas.find((ventas) => ventas.factura == factura);
        if(ventas){
            ventas.cliente = nuevosDatos.cliente || ventas.nombre;
            ventas.factura = nuevosDatos.factura || ventas.factura;
            ventas.costo = nuevosDatos.costo || ventas.costo;
            ventas.cnArticulos = nuevosDatos.cnArticulos || ventas.cnArticulos;
        }
    };


//     ********Metodos********


        // Primer Requisito
    montoTotal() {
        let acumTotal = 0;
        let montoTotal = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            acumTotal += this.ventas[i].montoPedido();
            montoTotal=acumTotal+this.montoCaja}
        return montoTotal;
    }

        // Segundo Requisito
    montoMayor() {
        let mayor = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            if (this.ventas[i].montoPedido() > mayor) {
                return this.ventas.filter((venta) => venta.montoPedido() == mayor);}}
        return mayor;
    }
    quienesMontoMayor() {
        let mayor = this.montoMayor();
        return this.ventas.filter((venta) => venta.montoPedido() == mayor);
        }

        // Tercer Requisito
    llevaronSoloUno() {
        let uno=0
        for (let i = 0; i < this.ventas.length; i++) {
            if (this.ventas[i].cnArticulos == 1) {
                return this.ventas.filter((venta) => venta.cnArticulos == uno);}}
        return uno;
    }
    quienesllevaronSoloUno() {
        let uno = this.llevaronSoloUno()
        return this.ventas.filter((venta) => venta.cnArticulos == uno);
}






}