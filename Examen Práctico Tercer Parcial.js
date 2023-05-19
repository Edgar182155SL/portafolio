function verificarCumpleanos() {
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth() + 1; // Los meses van de 0 a 11, sumamos 1 para que vaya de 1 a 12
  
    var mesCumpleanosInput = document.getElementById("mesCumpleanos");
    var mesCumpleanos = parseInt(mesCumpleanosInput.value);
  
    var descuentoContainer = document.getElementById("descuentoContainer");
    var descuentoMensaje = document.getElementById("descuentoMensaje");
    var imagenDescuento = document.getElementById("imagenDescuento");
    var noDescuentoContainer = document.getElementById("noDescuentoContainer");
  
    if (mesActual === mesCumpleanos) {
      descuentoContainer.style.display = "block";
      noDescuentoContainer.style.display = "none";
  
      descuentoMensaje.innerHTML = "¡Feliz cumpleaños! Obtuviste un 2x1 en tu compra.";
      imagenDescuento.src = "Oferta_2x1.jpg";
    } else {
      descuentoContainer.style.display = "none";
      noDescuentoContainer.style.display = "block";
    }
  }
  