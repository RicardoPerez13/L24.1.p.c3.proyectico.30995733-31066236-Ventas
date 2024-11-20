export default class Cl_venta {
    constructor(cliente, factura, costo, cnArticulos, porcIncremento) {
        this.cliente = cliente;
        this.factura = factura;
        this.costo = costo;
        //Atributos importados de Cl_tienda
        this.cnArticulos = cnArticulos;
        this.porcIncremento = porcIncremento;
    }   //Setters y Getters
    set cliente(cliente) {
        this._cliente = cliente;}
    get cliente() {
        return this._cliente;}
    set factura(factura) {
        this._factura = +factura;}
    get factura() {
        return this._factura;}
    set costo(costo) {
        this._costo = +costo;}    
    get costo() {
        return this._costo;}
    set cnArticulos(cnArticulos) {
        this._cnArticulos = +cnArticulos;}
    get cnArticulos() {
        return this._cnArticulos;}
        //Setters y Getters de porcIncremento como parametros de Cl_tienda
    set porcIncremento(porcIncremento) {
        this._porcIncremento = +porcIncremento;}
    get porcIncremento() {
        return this._porcIncremento;}
        //Metodos
    montoPedido() {
        return (this.costo*(this.porcIncremento/100))+this.costo;
    }
}