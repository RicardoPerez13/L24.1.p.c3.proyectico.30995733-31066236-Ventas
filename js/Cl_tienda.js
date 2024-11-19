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
        // ***Metodos Cl_tienda***

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
    
    // Agregacion de el Precio dentro del array para poderse aplicar el segundo Requisito y salidas
    agregarMontoPedido() {
        let montoPedido = 0 ;
        for (let i = 0; i < this.ventas.length; i++) {
            montoPedido = venta.costo * (1 + this.porcIncremento / 100);}
//      return this.ventas.filter((venta) => venta.montoPedido() == montoPedido);
        return this.ventas.push(montoPedido);
    }


        // Primer Requisito
    montoTotal() {
        let montoTotal = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            montoTotal += this.ventas[i].montoPedido;}
        return montoTotal;
    }

        // Segundo Requisito
    montoMayor() {
        let mayor = 0;
        for (let i = 0; i < this.ventas.length; i++) {
            if (this.ventas[i].montoPedido > mayor) {
                return this.ventas.filter((venta) => venta.montoPedido == mayor);}}
        return mayor;
    }
    quienesMontoMayor() {
        let mayor = this.montoMayor();
        return this.ventas.filter((venta) => venta.montoPedido == mayor);
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