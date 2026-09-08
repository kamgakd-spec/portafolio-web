// ===== FORMULARIO DE CONTACTO =====
// ===== FORMULARIO DE CONTACTO =====

const formulario = document.querySelector("#form-contacto");
const mensajeFormulario = document.querySelector("#mensaje-formulario");

if (formulario && mensajeFormulario) {

    const nombre = document.querySelector("#nombre");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");


    // ===== VALIDACIÓN EN TIEMPO REAL =====

    nombre.addEventListener("input", () => {

        if (nombre.value.trim() === "") {
            nombre.setCustomValidity("El nombre es obligatorio.");
        } else {
            nombre.setCustomValidity("");
        }

    });


    email.addEventListener("input", () => {

        if (email.value.trim() === "") {
            email.setCustomValidity("El correo electrónico es obligatorio.");
        } else if (!email.validity.valid) {
            email.setCustomValidity("Introduce un correo electrónico válido.");
        } else {
            email.setCustomValidity("");
        }

    });


    mensaje.addEventListener("input", () => {

        if (mensaje.value.trim() === "") {
            mensaje.setCustomValidity("El mensaje es obligatorio.");
        } else {
            mensaje.setCustomValidity("");
        }

    });


    // ===== ENVÍO DEL FORMULARIO =====

    formulario.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!formulario.checkValidity()) {

            formulario.reportValidity();
            return;

        }


        // Simulación del envío

        mensajeFormulario.textContent =
            `¡Gracias, ${nombre.value.trim()}! Tu mensaje ha sido enviado correctamente.`;


        // Limpiar formulario

        formulario.reset();

    });

}