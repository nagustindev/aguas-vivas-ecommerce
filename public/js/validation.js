form.addEventListener('submit', function (event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    let isValid = true;

    document.querySelectorAll('.error').forEach(el => el.remove());

    // Validar nombre
    if (name.value.trim().length < 3 || !/^[a-zA-Z\s]+$/.test(name.value.trim())) {
        const error = document.createElement('span');
        error.textContent = 'El nombre debe tener al menos 3 caracteres y solo contener letras.';
        error.classList.add('error');
        error.style.color = 'red';
        name.after(error);
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        const error = document.createElement('span');
        error.textContent = 'Por favor, ingrese un email válido.';
        error.classList.add('error');
        error.style.color = 'red';
        email.after(error);
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});