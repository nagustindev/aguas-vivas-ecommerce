const form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        console.log('Por favor, complete todos los campos antes de enviar el formulario.');
        event.preventDefault(); 
    } else {
        console.log('Todos los campos están completos. Enviando formulario...');
    }
});