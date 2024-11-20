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

* Clientes con mayor cnArticulos
* Info de factura dada
* Monto ingresado de facturas con 2 artículos*/

//     Aclaraciones, NO confundar venta con ventas
//venta es la clase que toma los datos del array de ventas
import Cl_venta from "./Cl_venta.js";
import Cl_tienda from "./Cl_tienda.js";
//Clases de datos
import Dt_ventas from "./Dt_ventas.js";
import Dt_tienda from "./Dt_tienda.js";
//"""OJO""" Agregación de los datos del objeto Dt_tienda a tienda como parámetros
const tienda = new Cl_tienda(Dt_tienda.montoCaja, Dt_tienda.porcIncremento);
//Declaracion para los objetos de Venta
Dt_ventas.forEach((venta) =>
    tienda.agregarVenta(
      new Cl_venta(venta.cliente, venta.factura, venta.costo, venta.cnArticulos, tienda.porcIncremento))    
  );

  //Metodos deAgregacion, Eliminacion y Modificación de las ventas
let agregarVenta = (tienda) => {
    let cliente = prompt("Ingrese el Nombre del Cliente:");
    let factura = Number(prompt("Ingrese la factura:"));
    let costo = Number(prompt("Ingrese el costo:"));
    let cnArticulos = Number(prompt("Ingrese la cantidad de artículos:"));
    let venta = new Cl_venta(cliente, factura, costo, cnArticulos, tienda.porcIncremento);
    tienda.agregarVenta(venta);
    alert("Venta agregada, Seleccione listar ventas para ver los cambios");
  };
let eliminarVenta = (tienda) => {
    let factura = Number(prompt("Ingrese la factura de la Venta a eliminar:"));
    if (tienda.eliminarVenta(factura)) {
      alert("Venta eliminada, Seleccione listar ventas para ver los cambios");
    }
    else {
      alert("Venta no encontrada, Intente otra Factura");
    }
  }; 
let modificarVenta = (tienda, salida) => {
    let factura = prompt('Ingrese Factura de la venta a modificar:');   
    let nuevosDatos = {};
    nuevosDatos.cliente = prompt('Ingrese el nuevo cliente:');
    nuevosDatos.factura = Number(prompt('Ingrese la nueva factura:'));
    nuevosDatos.costo = Number(prompt('Ingrese el nuevo costo:'));
    nuevosDatos.cnArticulos = Number(prompt('Ingrese la nueva cantidad de articulos:'));
    tienda.modificarVenta(factura, nuevosDatos);
    salida.innerHTML = alert("Los datos fueron modificados, Seleccione listar ventas para ver los cambios");
}

// Metodos de Requerimentos
let montoTotal = (tienda, salida2) => {
    let montoTotal = tienda.montoTotal()
    salida2.innerHTML = `Monto Total: ${montoTotal}`
}

let quienesMontoMayor = (tienda, salida2) => {
    let ventas = tienda.quienesMontoMayor()
    salida2.innerHTML = `Clientes que pagaron el monto mayor: `
    ventas.forEach((venta) => { 
    salida2.innerHTML += `<br>Nombre: ${venta.cliente};----Factura: ${venta.factura};----Monto: ${venta.montoPedido()}`;
  });
}
let quienesllevaronSoloUno = (tienda, salida2) => {
    let ventas = tienda.quienesllevaronSoloUno()
    salida2.innerHTML = `Clientes que solo llevaron 1 articulo: `
    ventas.forEach((venta) => { 
    salida2.innerHTML += `<br>Nombre: ${venta.cliente};----Factura: ${venta.factura}`;
  });
}

//      *******Listar Ventas *********
let listarVentas = (tienda) => {
    let ventas = tienda.ventas;
    let salidaTmp = `
    <br><table>
        <tr>
            <th>Cliente</th>
            <th>Factura</th>
            <th>Costo</th>
            <th>Articulos</th>
            <th>Monto Pedido</th>
        </tr>`;
    ventas.forEach(venta => {
        salidaTmp += `
        <tr>
            <td>${venta.cliente}</td>
            <td>${venta.factura}</td>
            <td>${venta.costo}</td>
            <td>${venta.cnArticulos}</td>
            <td>${venta.montoPedido()}</td>
        </tr>`
    });
    salidaTmp += '</table>';
    salida.innerHTML = salidaTmp;
}

//Creación de las Salidas
let salida= document.getElementById("salida");
let salida2= document.getElementById("salida2");
//Boton
let opciones = document.getElementById("opciones");
// Switch del boton para la salida de los metodos
  opciones.onclick = () => {
    let opcion = Number(prompt("Seleccione una opcion:"));
    switch (opcion) {
      case 1:
        listarVentas(tienda, salida);
        break;
      case 2:
        agregarVenta(tienda, salida);
        break;
      case 3:
        eliminarVenta(tienda, salida);
        break;
      case 4:
        modificarVenta(tienda, salida);
        break;
      case 5:
        quienesMontoMayor(tienda, salida2); 
        break;
      case 6:
        quienesllevaronSoloUno(tienda, salida2);
        break;
      case 7:
        montoTotal(tienda, salida2); 
        break;
      default:
        alert("Seleccione una opción correcta");
        break;
    }
  }
