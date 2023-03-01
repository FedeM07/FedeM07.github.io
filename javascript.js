$.ajax({
    url: 'https://randomuser.me/api/?nat=es,mx&exc=login&noinfo',
    dataType: 'json',
    success: function(datosusuario) {
      console.log(datosusuario);

      var imgperfil = datosusuario.results[0].picture.large;
      var imgElemento = document.getElementById('fotoperfil');
      imgElemento.src = imgperfil;
      console.log(imgElemento.src);
      
      var nombres = document.querySelectorAll('.primernombre');
      nombres.forEach(function(nombre) {
        nombre.textContent = datosusuario.results[0].name.first;
      });
      
      var apellidos = document.querySelectorAll('.apellido');
      apellidos.forEach(function(apellido) {
       apellido.textContent = datosusuario.results[0].name.last;
      });

      var edades = document.querySelectorAll('.edad');
      edades.forEach(function(edad) {
       edad.textContent = datosusuario.results[0].dob.age;
      });

      var nacionalidades = document.querySelectorAll('.nac');
      nacionalidades.forEach(function(nacionalidad) {
       nacionalidad.textContent = datosusuario.results[0].nat;
      });

      var fechasnac = document.querySelectorAll('.fechanac');
      fechasnac.forEach(function(fechanac) {
       fechanac.textContent = datosusuario.results[0].dob.date;
      });

      var genero = datosusuario.results[0].gender;
      var generoES = genero === 'female' ? 'Femenino' : 'Masculino';  
      console.log(generoES); 
      var generos = document.querySelectorAll('.genero');
      generos.forEach(function(genero) {
      genero.textContent = generoES;
      });

      var emails = document.querySelectorAll('.email');
      emails.forEach(function(email) {
       email.textContent = datosusuario.results[0].email;
      });

      var cells = document.querySelectorAll('.telefono');
      cells.forEach(function(telefono) {
       telefono.textContent = datosusuario.results[0].cell;
      });

      var direcciones = document.querySelectorAll('.direccion');
      direcciones.forEach(function(direccion) {
       direccion.textContent = datosusuario.results[0].location.street.name;
      });

      var paises = document.querySelectorAll('.pais');
      paises.forEach(function(pais) {
       pais.textContent = datosusuario.results[0].location.country;
      });

      var ciudades = document.querySelectorAll('.ciudad');
      ciudades.forEach(function(ciudad) {
       ciudad.textContent = datosusuario.results[0].location.city;
      });

      var cps = document.querySelectorAll('.cp');
      cps.forEach(function(cp) {
       cp.textContent = datosusuario.results[0].location.postcode;
      });
    }
  });

