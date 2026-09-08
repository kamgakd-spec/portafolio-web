// ===== PROYECTOS DEL PORTAFOLIO =====

const proyectos = [
    {
        titulo: "Tienda Tecnológica",

        descripcion:
            "Tienda web dedicada a la presentación de productos tecnológicos modernos, con un catálogo interactivo y funciones desarrolladas con JavaScript.",

        tecnologias: ["HTML5", "CSS3", "JavaScript"],

        imagen: "proyectos/tienda-tecnologica/preview.jpg",

        enlace: "proyectos/tienda-tecnologica/index.html"
    },

    {
        titulo: "Sistema de Gestión Académica",

        descripcion:
            "Plataforma web diseñada para organizar y consultar información académica de estudiantes, cursos, docentes y rendimiento académico.",

        tecnologias: ["HTML5", "CSS3", "JavaScript"],

        imagen: "proyectos/sistema-academico/preview.jpg",

        enlace: "proyectos/sistema-academico/index.html"
    },

    {
        titulo: "Página Web de Videojuegos",

        descripcion:
            "Sitio web interactivo dedicado al mundo de los videojuegos, con información de juegos, tarjetas dinámicas y un diseño moderno y adaptable.",

        tecnologias: ["HTML5", "CSS3", "JavaScript"],

        imagen: "proyectos/videojuegos/preview.jpg",

        enlace: "proyectos/videojuegos/index.html"
    }
];


// ===== MOSTRAR PROYECTOS =====

const proyectosGrid = document.querySelector("#proyectos-grid");

if (proyectosGrid) {

    proyectos.forEach((proyecto) => {

        const tarjeta = document.createElement("article");

        tarjeta.classList.add("proyecto-card");

        tarjeta.innerHTML = `
            <img
                src="${proyecto.imagen}"
                alt="Vista previa de ${proyecto.titulo}"
                class="proyecto-imagen"
            >

            <div class="proyecto-contenido">

                <h3>
                    ${proyecto.titulo}
                </h3>

                <p>
                    ${proyecto.descripcion}
                </p>

                <div class="proyecto-tecnologias">

                    ${proyecto.tecnologias
                        .map(
                            (tecnologia) =>
                                `<span>${tecnologia}</span>`
                        )
                        .join("")}

                </div>

                <a
                    href="${proyecto.enlace}"
                    class="btn">
                    Ver proyecto
                </a>

            </div>
        `;

        proyectosGrid.appendChild(tarjeta);

    });

}


// ===== MENÚ MÓVIL =====

const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("activo");

    });

}


// ===== CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN =====

const enlacesMenu = document.querySelectorAll(".nav-link");

enlacesMenu.forEach((enlace) => {

    enlace.addEventListener("click", () => {

        if (navMenu) {

            navMenu.classList.remove("activo");

        }

    });

});