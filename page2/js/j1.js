// Enlaza jQuery antes de este código
$(document).ready(function() {
    // Lógica para el registro de usuarios
    $('#registerForm').submit(function(event) {
      event.preventDefault();
      // Obtener datos del formulario
      const username = $('#username').val();
      const password = $('#password').val();
      
      // Realizar una petición AJAX para registrar al usuario en la base de datos
      // (Necesitarás configurar un servidor que maneje esta petición)
    });
    
    // Lógica para el inicio de sesión
    $('#loginForm').submit(function(event) {
      event.preventDefault();
      // Obtener datos del formulario
      const loginUsername = $('#loginUsername').val();
      const loginPassword = $('#loginPassword').val();
      
      // Realizar una petición AJAX para autenticar al usuario en la base de datos
      // (Necesitarás configurar un servidor que maneje esta petición)
    });
    
    // Lógica para cargar y mostrar los productos desde la base de datos
    // (Necesitarás realizar otra petición AJAX para obtener los productos)
  });
  