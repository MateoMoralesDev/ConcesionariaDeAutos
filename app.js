/* Etapa 1 y 2
En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.
Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.
Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.
*/

/* let autos = require("./autos");
let concesionaria = {
    autos: autos,
    
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null // ternario
    },
}
console.log(concesionaria.buscarAuto("APL123")) */

/* Etapa 3
Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.
¿Cómo lo resuelven?
Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.
*/

/* let autos = require("./autos");
let concesionaria = {
    autos: autos,
    
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null; // ternario
    },
    venderAuto: function(patente){
         let autoBuscado = this.buscarAuto(patente);
         autoBuscado.vendido = true;
    },
    }
concesionaria.venderAuto("APL123")
console.log(concesionaria.buscarAuto("APL123")) */

/* Funciones extras
La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.
Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. Tené en cuenta que estamos optimizando nuestro código, por lo cual, deberíamos utilizar el método filter.
*/

/* let autos = require("./autos");
let concesionaria = {
    autos: autos,
    
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null; // ternario
    },
    venderAuto: function(patente){
         let autoBuscado = this.buscarAuto(patente);
         autoBuscado.vendido = true;
    },
    autosParaLaVenta: function(){
        return this.autos.filter(autos=> autos.vendido === false)
    },
    }
console.log(concesionaria.autos)
concesionaria.venderAuto('APL123')
console.log(concesionaria.autosParaLaVenta()) */

/* Nueva funcionalidad extra
María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.
¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?
Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.
*/

/* let autos = require("./autos");
let concesionaria = {
    autos: autos,
    
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null; // ternario
    },
    venderAuto: function(patente){
         let autoBuscado = this.buscarAuto(patente);
         autoBuscado.vendido = true;
    },
    autosParaLaVenta: function(){
        return this.autos.filter(autos=> autos.vendido === false)
    },
    autosNuevos: function(){
         let autosParaVender =  this.autosParaLaVenta();
         return autosParaVender.filter(autos=> autos.km<100)
    },
    }
console.log(concesionaria.autos)
console.log(concesionaria.autosNuevos()) */

/* Mas funcionalidades
El cliente le pidió saber cuánto dinero generaron las ventas.
María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".
Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
*/
/* 
let autos = require("./autos");
let concesionaria = {
    autos: autos,
    
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null; // ternario
    },
    venderAuto: function(patente){
         let autoBuscado = this.buscarAuto(patente);
         autoBuscado.vendido = true;
    },
    autosParaLaVenta: function(){
        return this.autos.filter(autos=> autos.vendido === false)
    },
    autosNuevos: function(){
         let autosParaVender =  this.autosParaLaVenta();
         return autosParaVender.filter(autos=> autos.km<100)
    },
    listaDeVentas: function(){
        let autosVendidos = this.autos.filter(autos=> autos.vendido === true)
         return autosVendidos.map(autos=> autos.precio)
    },
    }
console.log(concesionaria.autos)
concesionaria.venderAuto('APL123')
concesionaria.venderAuto('JJK116')
console.log(concesionaria.autos)
console.log(concesionaria.listaDeVentas())
 */




/* Total de ventas
Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!
*/

/* let autos = require("./autos");
let concesionaria = {
    autos: autos,
    
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null; // ternario
    },
    venderAuto: function(patente){
         let autoBuscado = this.buscarAuto(patente);
         autoBuscado.vendido = true;
    },
    autosParaLaVenta: function(){
        return this.autos.filter(autos=> autos.vendido === false);
    },
    autosNuevos: function(){
         let autosParaVender =  this.autosParaLaVenta();
         return autosParaVender.filter(autos=> autos.km<100);
    },
    listaDeVentas: function(){
        let autosVendidos = this.autos.filter(autos=> autos.vendido === true);
         return autosVendidos.map(autos=> autos.precio);
    },
    totalDeVentas: function(){
        let autosVendidos = this.listaDeVentas();
        return autosVendidos.length === 0 ? 0 : autosVendidos.reduce( (acumulador, num) => acumulador+num )
        
    },
    }
console.log(concesionaria.autos)
concesionaria.venderAuto('APL123')
concesionaria.venderAuto('JJK116')
console.log(concesionaria.autos)
console.log(concesionaria.totalDeVentas()) */



/* Agregando funcionalidades 
Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.
Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.
Una persona va a ser representada mediante un objeto literal de la siguiente forma:
{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}
Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
*/

/* let autos = require("./autos");
let concesionaria = {
    autos: autos,
    
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null; // ternario
    },
    venderAuto: function(patente){
         let autoBuscado = this.buscarAuto(patente);
         autoBuscado.vendido = true;
    },
    autosParaLaVenta: function(){
        return this.autos.filter(autos=> autos.vendido === false);
    },
    autosNuevos: function(){
         let autosParaVender =  this.autosParaLaVenta();
         return autosParaVender.filter(autos=> autos.km<100);
    },
    listaDeVentas: function(){
        let autosVendidos = this.autos.filter(autos=> autos.vendido === true);
         return autosVendidos.map(autos=> autos.precio);
    },
    totalDeVentas: function(){
        let autosVendidos = this.listaDeVentas();
        return autosVendidos.length === 0 ? 0 : autosVendidos.reduce( (acumulador, num) => acumulador+num );
    },
    puedeComprar: function (autoSelec, personaSelec) {
        let costoTtl = autoSelec.precio;
        let costoCts = costoTtl / autoSelec.cuotas;
        console.log(costoCts)
        console.log(costoTtl)
        return costoTtl <= personaSelec.capacidadDePagoTotal && costoCts <= personaSelec.capacidadDePagoEnCuotas ? true : false
    },
    }
console.log(concesionaria.autos)
console.log(concesionaria.puedeComprar(autos[1], {
                                                nombre: "Juan", 
                                                capacidadDePagoEnCuotas: 20000, 
                                                capacidadDePagoTotal: 100000}
                                                )) */


/*
Agragando Funcionalidades *****LA ULTIMA ********
*/



/*let autos = require("./autos");

let concesionaria = {
    autos: autos,
    
    buscarAuto: function(patente){
        let resultado = concesionaria.autos.filter(auto => auto.patente === patente);
        return resultado.length == !0 ? resultado[0] : null; // ternario
    },

    venderAuto: function(patente){
         let autoBuscado = this.buscarAuto(patente);
         autoBuscado.vendido = true;
    },

    autosParaLaVenta: function(){
        return this.autos.filter(autos=> autos.vendido === false);

    },

    autosNuevos: function(){
         let autosParaVender =  this.autosParaLaVenta();
         return autosParaVender.filter(autos=> autos.km<100);
    },

    listaDeVentas: function(){
        let autosVendidos = this.autos.filter(autos=> autos.vendido === true);
         return autosVendidos.map(autos=> autos.precio);
    },

    totalDeVentas: function(){
        let autosVendidos = this.listaDeVentas();
        return autosVendidos.length === 0 ? 0 : autosVendidos.reduce( (acumulador, num) => acumulador+num );
    },

    puedeComprar: function (autoSelec, personaSelec) {
        let costoTtl = autoSelec.precio;
        let costoCts = costoTtl / autoSelec.cuotas;
        //console.log(costoCts);
        //console.log(costoTtl);
        return costoTtl <= personaSelec.capacidadDePagoTotal && costoCts <= personaSelec.capacidadDePagoEnCuotas ? true : false
    },

    autosQuePuedeComprar: function(personaSelec){
        let autosEnVenta = this.autosParaLaVenta();
        //let autosQuePuede = autosEnVenta.map(autos=> this.puedeComprar(autos, personaSelec));
        let puedeComprar = autosEnVenta.filter((auto) => this.puedeComprar(auto,personaSelec) == true)
        return  puedeComprar
    }


    }

//console.log(concesionaria.autos)
console.log(concesionaria.autosQuePuedeCompra({
                                                nombre: "Juan", 
                                                capacidadDePagoEnCuotas: 20000, 
                                                capacidadDePagoTotal: 100000}
                                                ))*/