let autos = require("./autos");

let concesionaria = {
  autos: autos,

  buscarAuto: function (pat) {
    let buscar = autos.filter((auto) => auto.patente === pat);

    let resultado = buscar.length == !0 ? buscar[0] : null;
    return resultado;
  },

  venderAuto: function (pat) {
    let buscar = this.buscarAuto(pat);

    buscar.vendido = true;
  },

  autosParaLaVenta: function () {
    let buscar = autos.filter((auto) => auto.vendido !== true);
    return buscar;
  },

  autosNuevos: function () {
    let autosDisponibles = this.autosParaLaVenta();

    let buscar = autosDisponibles.filter((auto) => auto.km < 100);
    return buscar;
  },

  listaDeVentas: function () {
    let listadoVendidos = this.autos.filter((auto) => auto.vendido === true);
    let soloPrecios = listadoVendidos.map((auto) => auto.precio);

    return soloPrecios;
  },
  totalDeVentas: function () {
    let soloPrecios = this.listaDeVentas();
    let preciosVendidos =
      soloPrecios.length == !0
        ? soloPrecios.reduce((acc, valor) => acc + valor)
        : 0;
    let verificar = preciosVendidos.length === 0 ? 0 : preciosVendidos;
    return verificar;
  },

  puedeComprar: function (auto, persona1) {
    let autoSeleccionado = auto;
    let personaSeleccionada = persona1;
    let valorCuotaAuto = autoSeleccionado.precio / autoSeleccionado.cuotas;
    let cuotaPersona = personaSeleccionada.capacidadDePagoEnCuotas;
    let valorTotalAuto = autoSeleccionado.precio;
    let valorTotalPersona = personaSeleccionada.capacidadDePagoTotal;

    let calcularPagodeCuotas = cuotaPersona >= valorCuotaAuto ? true : false;
    let calcularPagoTotal = valorTotalPersona >= valorTotalAuto ? true : false;

    let resultado =
      calcularPagodeCuotas == true && calcularPagoTotal == true ? true : false;

    return resultado;
  },

  autosQuePuedeComprar: function (persona) {
    let autosDisponibles = this.autosParaLaVenta();
    let puedeComprar = autosDisponibles.filter((auto) => this.puedeComprar(auto,persona) == true)
   return puedeComprar
  },
};