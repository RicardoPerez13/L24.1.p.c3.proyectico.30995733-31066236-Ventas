/*VENTAS* Se desea llevar un control de las ventas que
realiza una tienda. Se tiene por cada venta: 
nombre del cliente, número de factura, costo y cantidad de artículos.
Se requiere de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
monto inicial en caja y el porcentaje de incremento para
el costo de cada venta.
Estructuras de datos recomendadas
* Cl_tienda: montoCaja, porcIncremento
* Cl_venta: cliente, factura, costo, cnArticulos

**********Requisitos***********

* Monto final en caja
* Clientes que pagaron el monto mayor
* Clientes que sólo llevaron 1 artículo

**Ejemplos de requisitos defensa**
* Clientes con mayor cnArticulos
* Info de factura dada
* Monto ingresado de facturas con 2 artículos*/

//    Aclaraciones, NO confundar venta con ventas
//venta es la clase que toma los datos del array de ventas

import Cl_venta from "./Cl_venta.js";
import Cl_tienda from "./Cl_tienda.js";
//Clases de datos
import Dt_ventas from "./Dt/Dt_ventas.js";
import Dt_tienda from "./Dt/Dt_tienda.js";

//"""OJO""" Agregación de los datos del objeto Dt_tienda a tienda como parámetros
const tienda = new Cl_tienda(Dt_tienda.montoCaja, Dt_tienda.porcIncremento);

//Declaracion para los objetos de Venta
Dt_ventas.forEach((venta) =>
    tienda.agregarVenta(
      new Cl_venta(venta.cliente, venta.factura, venta.costo, venta.cnArticulos, venta.porcIncremento)
    )    
  );

  //Agregacion y eliminacion de las ventas
let agregarVenta = (tienda) => {
    let cliente = prompt("Ingrese el cliente:");
    let factura = Number(prompt("Ingrese la factura:"));
    let costo = Number(prompt("Ingrese el costo:"));
    let cnArticulos = Number(prompt("Ingrese la cantidad de artículos:"));
    let venta = new Cl_venta(cliente, factura, costo, cnArticulos);
    tienda.agregarVenta(venta);
    alert("Venta agregada");
  };

let eliminarVenta = (tienda) => {
    let factura = Number(prompt("Ingrese la factura a eliminar:"));
    if (tienda.eliminarVenta(factura)) {
      alert("Venta eliminada");
    }
    else {
      alert("Venta no encontrada");
    }
  };

// Demás metodos para mostrar

let quienesMontoMayor = (tienda) => {
    let ventas = tienda.quienesMontoMayor()
    salida.innerHTML = `Clientes que pagaron el monto mayor: `
    ventas.forEach((venta) => { 
    salida.innerHTML += `<br>Nombre: ${venta.cliente}; Factura: ${venta.factura}; Monto: ${venta.montoPedido()}`;
  });
}
let quienesllevaronSoloUno = (tienda) => {
    let ventas = tienda.quienesllevaronSoloUno()
    salida.innerHTML = `Clientes que solo llevaron 1 articulo: `
    ventas.forEach((venta) => { 
    salida.innerHTML += `<br>Nombre: ${venta.cliente}; Factura: ${venta.factura}; Articulos: ${venta.cnArticulos}`;
  });
}

//Creación de las Salidas
let salida= document.getElementById("salida");
//Boton
let opciones = document.getElementById("opciones");


  opciones.onclick = () => {
    let opcion = Number(prompt("Seleccione una opcion:"));
    switch (opcion) {
      case 1:
        agregarVenta(tienda);
        break;
      case 2:
        eliminarVenta(tienda);
        break;
      case 3:
        quienesMontoMayor(tienda);
        break;
      case 4:
        quienesllevaronSoloUno(tienda);
        break;
    }
  }
