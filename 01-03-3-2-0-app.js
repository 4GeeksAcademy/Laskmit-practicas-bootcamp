// Define the subjects and their courses
const subjects = {
    Programming: ["JavaScript Basics", "Python Fundamentals", "Java for Beginners"],
    Design: ["Graphic Design", "UX/UI Principles", "Adobe Photoshop"],
    Business: ["Marketing 101", "Entrepreneurship", "Finance Basics"]
};

const subjectSelect = document.getElementById('subject');
const courseSelect = document.getElementById('course');

// Actualiza el dropdown de cursos según la asignatura seleccionada.
function updateCourseDropdown() {
    // 1) Limpia todas las opciones actuales del select de cursos.
    courseSelect.innerHTML = '';
    // 2) Lee qué asignatura eligió el usuario.
    const selectedSubject = subjectSelect.value;
    // 3) Siempre agrega una opción por defecto al inicio.
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '--Seleccionar Curso--';
    courseSelect.appendChild(defaultOption);

    // 4) Si no hay asignatura seleccionada, se queda solo la opción por defecto.
    if (!selectedSubject) {
        return;
    }

    // 5) Obtiene la lista de cursos de la asignatura elegida.
    const courses = subjects[selectedSubject] || [];

    // 6) Crea y agrega una opción <option> por cada curso.
    courses.forEach((course) => {
        const option = document.createElement('option');
        option.value = course;
        option.textContent = course;
        courseSelect.appendChild(option);
    });
}

// Cada vez que cambia la asignatura, vuelve a cargar los cursos disponibles.
subjectSelect.addEventListener('change', updateCourseDropdown);

// Inicializa el dropdown de cursos al cargar la página.
updateCourseDropdown();
