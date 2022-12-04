/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import * as bootstrap from 'bootstrap';

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
      alertPlaceholder.innerHTML = "";
      const wrapper = document.createElement('div')
      var mensaje = '';
      var estilo = '';
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        mensaje = 'Error en el formulario'
        estilo = 'danger'
      } else{
        mensaje = 'Formulario correcto'
        estilo = 'success'
      }

      wrapper.innerHTML = [
        `<div class="alert alert-${estilo} alert-dismissible" role="alert">`,
        `   <div>${mensaje}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('')
    
      alertPlaceholder.append(wrapper)

      form.classList.add('was-validated')
    }, false)
  })
})()