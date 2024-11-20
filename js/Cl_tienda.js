export default class Cl_tienda {
    constructor(montoCaja, porcIncremento) {
        //Inicializacion del Array Ventas
        this.ventas = [];
        //Atributos
        this.montoCaja = montoCaja;
        this.porcIncremento = porcIncremento;
    }   // Setters y Getters
    set montoCaja(montoCaja) {
        this._montoCaja = +montoCaja;}
    get montoCaja() {
        return this._montoCaja;}
    set porcIncremento(porcIncremento) {
        this._porcIncremento = +porcIncremento;}
    get porcIncremento() {
        return this._porcIncremento;}
        // ***Metodos Agregar, Modificar y Eliminar Venta***
    agregarVenta(venta) {
        this.ventas.push(venta);
    }
    eliminarVenta(factura) {
        let facturaVenta = -1;
        for (let i = 0; i < this.ventas.length; i++)
          if (this.ventas[i].factura == factura) facturaVenta = i;
        if (facturaVenta !== -1) this.ventas.splice(facturaVenta, 1);
        return facturaVenta !== -1;
    }
    modificarVenta(factura, nuevosDatos){
        const ventas = this.ventas.find((ventas) => ventas.factura == factura);
        if(ventas){
            ventas.cliente = nuevosDatos.cliente || ventas.cliente;
            ventas.factura = nuevosDatos.factura || ventas.factura;
            ventas.costo = nuevosDatos.costo || ventas.costo;
            ventas.cnArticulos = nuevosDatos.cnArticulos || ventas.cnArticulos;
        }
    }
//     *****************Metodos******************

        // Monto Inicial
    mostrarInicial(){
        return this.montoCaja
    }
        // Monto Mayor, Por cada requisito a comparar se necesitan dos metodos uno que
        // haga el ciclo, y el segundo que lo compruebe para saber si hay más datos iguales
    montoMayor() {
        let mayor = this.ventas[0].montoPedido();
        for (let i = 0; i < this.ventas.length; i++) 
            if (this.ventas[i].montoPedido() > mayor) 
                mayor=this.ventas[i].montoPedido();
        return mayor;
    }
    quienesMontoMayor() {
        let mayor = this.montoMayor();
        return this.ventas.filter((venta) => venta.montoPedido() == mayor);
        }

        // Los que llevaron solo Un Articulo
    llevaronSoloUno(){
        let uno=1
        let SoloUno=this.ventas;
        for (let i = 0; i < this.ventas.length; i++) 
            if (this.ventas[i].cnArticulos==uno)
               SoloUno.push(this.ventas[i]);
            return SoloUno;
    }
    quienesllevaronSoloUno() {
        let uno=1
        return this.ventas.filter((venta) => venta.cnArticulos==uno);
    }
        // Monto Total
    montoTotal() {
        let acumTotal = 0;
        let montoTotal = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            acumTotal += this.ventas[i].montoPedido();
            montoTotal=acumTotal+this.montoCaja}
        return montoTotal;
    }

}