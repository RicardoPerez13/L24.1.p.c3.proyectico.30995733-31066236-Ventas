export default class Cl_tienda {
    constructor(montoCaja, porcIncremento,) {
        //Atributos
        this.ventas = [];
        this.montoCaja = montoCaja
        this.porcIncremento = porcIncremento  
/**/    this.acum_monto=0
    }   // Setters y Getters
    set montoCaja(montoCaja) {
        this._montoCaja = +montoCaja;}
    get montoCaja() {
        return this.montoCaja;}
    set porcIncremento(porcIncremento) {
        this._porcIncremento = +porcIncremento;}
    get porcIncremento() {
        return this.porcIncremento;}
/**/set acum_monto(acum_monto){
        this.acum_monto = acum_monto}
    get acum_monto (){
        return this._acum_monto}
        // Metodos Cl_tienda
    agregarVenta(venta) {
        this.ventas.push(venta);
    }
    montoPedido(venta) {
        return venta.costo * (1 + this.porcIncremento / 100);
        
    }
        //como meto este valor al array?




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
            if (this.ventas[i].cnArticulos() == 1) {
                return this.ventas.filter((venta) => venta.cnArticulos() == uno);}}
        return uno;
    }
    quienesllevaronSoloUno() {
        let uno = this.llevaronSoloUno()
        return this.ventas.filter((venta) => venta.cnArticulos == uno);
}






}