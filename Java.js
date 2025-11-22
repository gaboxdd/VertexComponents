document.getElementById('form-Contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const confirmacion = document.getElementById('confirmacion');

    let errores = [];
    if (!nombre) errores.push("El nombre es obligatorio.");
    if (!correo) errores.push("El correo es obligatorio.");
    if (!mensaje) errores.push("El mensaje es obligatorio.");

    if (errores.length > 0) {
        confirmacion.style.color = "#e07a7a";
        confirmacion.innerHTML = errores.map(e => "❌ " + e).join("<br>");
    } else {
        confirmacion.style.color = "#2f6f6a";
        confirmacion.innerHTML = "✅ ¡Mensaje enviado correctamente!";
        document.getElementById('form-Contacto').reset();
    }
});