# ConcesionariaDeAutos

Este es un Ejercicio completo de JavaScript , la idea es realizarlo sin necesidad de ver el app.js ni la solucion , estos arhivos estan como guia.


EJERCICIO: 

Primera semana de trabajo
María presenta al equipo un nuevo proyecto para una concesionaria de automóviles, cuya principal línea de negocios es la compra y venta de automóviles. La concesionaria necesita construir una lista con todos los vehículos que tiene registrados. Por cada vehículo necesita conocer la siguiente información:

Marca (Ford, Fiat, etc). (marca)
 Modelo (Fiesta, Corolla, etc). (modelo)
 Color (Azul, Rojo, etc). (color)
 Año de fabricación. (año)
 Cantidad de kilómetros recorridos. (km)
Precio final. (precio)
 Cantidad de cuotas. (cuotas)
Patente. (patente)
 Vendido: para indicar si el auto está o no vendido. (vendido).
 
 PRIMER PASO:
 
 En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos. Esta debe contener los siguientes vehículos:

El primer auto es un Ford Fiesta Azul, del 2019, con 200 kilómetros, cuyo precio es 150000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
El segundo auto es un Toyota Corolla Blanco, del 2019, 0 kilómetros, cuyo precio es 100000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
Cada auto debe tener los siguientes atributos: marca, modelo, precio, km, color, cuotas, anio, patente, vendido.

SEGUNDO PASO: ETAPA 1

Etapa 1

En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.

Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.

Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.

CODE GUIA: 
/* requerir módulo autos */

const concesionaria = {
    /* completar */
   autos: ???
};

TERCER PASO: ETAPA 2

Etapa 2

Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto
que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.

Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior.

CODE GUIA:
let concesionaria = {
   autos: ???,
 
   buscarAuto: ???
}

CUARTO PASO: ETAPA 3
 
 Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.

¿Cómo lo resuelven?

Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad,
tendrás que utilizar la función buscarAuto.

CODE GUIA:
let concesionaria = {
   autos: ???,
 
   buscarAuto: ???,

   venderAuto:???
}

QUINTO PASO: FUNCIONABILIDAD EXTRA

La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta.
A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta,
aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior. Tené en cuenta que estamos optimizando nuestro código,
por lo cual, deberíamos utilizar el método filter

CODE GUIA:
let concesionaria = {
   autos: ???,
 
   buscarAuto: ???,

   venderAuto:???,

   autosParaLaVenta:???
}

SEXTO PASO: UNA NUEVA FUNCIONABILIDAD EXTRA

María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra.
Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km.
Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.

¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior

CODE GUIA:

let concesionaria = {
   autos: ???,
 
   buscarAuto: ???,

   venderAuto:???,

   autosParaLaVenta:???,
   
   autosNuevos: ???
}

SEPTIMO PASO: MAS FUNCIONABILIDADES

El cliente le pidió saber cuánto dinero generaron las ventas.

María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido.
A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

CODE GUIA:

let concesionaria = {
   autos: ???,
 
   buscarAuto: ???,

   venderAuto:???,

   autosParaLaVenta:???,

   autosNuevos:???,

   listaDeVentas: ???

}

OCTAVO PASO:TOTAL DE VENTAS

Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas,
que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. 
Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!

CODE GUIA:

let concesionaria = {
   autos: ???,
 
   buscarAuto: ???,

   venderAuto:???,

   autosParaLaVenta:???,

   autosNuevos:???,

   listaDeVentas: ???,

   totalDeVentas:???
}

NOVENO PASO: AGRUEGANDO FUNCIONABILIDADES

Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante:
la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo.
Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra.
Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto.
Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo.
Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

CODE GUIA:
let concesionaria = {
   autos: ???,
 
   buscarAuto: ???,

   venderAuto:???,

   autosParaLaVenta:???,

   autosNuevos:???,

   listaDeVentas: ???,

   totalDeVentas:???,
   
   puedeComprar:???
   
}

DECIMO PASO:AGREGANDO FUNCIONABILIDADES

Ahora, te comprometiste a realizarla. Así que manos a la obra.
Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

La función debe de realizar los siguientes pasos:

1) Obtener los autos para la venta

2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.

3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior

CODE GUIA:

let concesionaria = {
   autos: ???,
 
   buscarAuto: ???,

   venderAuto:???,

   autosParaLaVenta:???,

   autosNuevos:???,

   listaDeVentas: ???,

   totalDeVentas:???,
   
   puedeComprar:???,

   autosQuePuedeComprar: ???
   
}


ESPERO QUE TE DIVIERTAS Y PUEDAS CODEAR CORRECTAMENTE ESTE EJERCICIO!

ATT: MateoMoralesDev


