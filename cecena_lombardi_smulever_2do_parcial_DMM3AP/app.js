function cargarRutinas() {
    const rutinasContainer = document.getElementById('rutinas');
    const rutinasGuardadas = localStorage.getItem('rutinasGuardadas');
    if (rutinasGuardadas) {
        rutinasContainer.innerHTML = rutinasGuardadas; 

        const rutinas = rutinasContainer.querySelectorAll('.rutina');
        for (let i = 0; i < rutinas.length; i++) {
            const rutina = rutinas[i];

            const btnAgregarEjercicio = rutina.querySelector('button:nth-child(2)');
            btnAgregarEjercicio.addEventListener('click', function () {
                const ejercicioNombre = prompt('Ingrese el nombre del ejercicio:');
                if (ejercicioNombre !== '') {
                    const divEjercicio = document.createElement('div');
                    divEjercicio.classList.add('ejercicio');

                    const p = document.createElement('p');
                    p.textContent = ejercicioNombre;

                    const btnEliminarEjercicio = document.createElement('button');
                    btnEliminarEjercicio.textContent = 'Eliminar';
                    btnEliminarEjercicio.classList.add('btn', 'btn-danger', 'btn-sm');
                    btnEliminarEjercicio.addEventListener('click', function () {
                        divEjercicio.remove();
                        guardarRutinas();
                    });

                    divEjercicio.appendChild(p);
                    divEjercicio.appendChild(btnEliminarEjercicio);
                    rutina.appendChild(divEjercicio);
                    guardarRutinas();
                }
            });

            const btnEliminarRutina = rutina.querySelector('button:nth-child(3)');
            btnEliminarRutina.addEventListener('click', function () {
                rutina.remove();
                guardarRutinas();
            });
        }
    }
}

function guardarRutinas() {
    const rutinasContainer = document.getElementById('rutinas');
    localStorage.setItem('rutinasGuardadas', rutinasContainer.innerHTML); 
}

document.getElementById('AgrRutina').addEventListener('click', function () {
    document.getElementById('ingreso').classList.toggle('oculto');
});

document.getElementById('AgregarRutinaBtn').addEventListener('click', function () {
    const nombreRutina = document.getElementById('NombreRutina').value;
    if (nombreRutina === '') {
        alert('El nombre no puede estar vacio');
        return;
    }

    const rutinasContainer = document.getElementById('rutinas');

    const divRutina = document.createElement('div');
    divRutina.classList.add('rutina');

    const h2 = document.createElement('h2');
    h2.textContent = nombreRutina;

    const btnAgregarEjercicio = document.createElement('button');
    btnAgregarEjercicio.textContent = 'Agregar Ejercicio';
    btnAgregarEjercicio.classList.add('btn', 'btn-success', 'me-2');
    btnAgregarEjercicio.addEventListener('click', function () {
        const ejercicioNombre = prompt('Ingrese el nombre del ejercicio:');
        if (ejercicioNombre !== '') {
            const divEjercicio = document.createElement('div');
            divEjercicio.classList.add('ejercicio');

            const p = document.createElement('p');
            p.textContent = ejercicioNombre;

            const btnEliminarEjercicio = document.createElement('button');
            btnEliminarEjercicio.textContent = 'Eliminar';
            btnEliminarEjercicio.classList.add('btn', 'btn-danger', 'btn-sm');
            btnEliminarEjercicio.addEventListener('click', function () {
                divEjercicio.remove();
                guardarRutinas();
            });

            divEjercicio.appendChild(p);
            divEjercicio.appendChild(btnEliminarEjercicio);
            divRutina.appendChild(divEjercicio);
            guardarRutinas();
        }
    });

    const btnEliminarRutina = document.createElement('button');
    btnEliminarRutina.textContent = 'Eliminar Rutina';
    btnEliminarRutina.classList.add('btn', 'btn-danger');
    btnEliminarRutina.addEventListener('click', function () {
        divRutina.remove();
        guardarRutinas();
    });

    divRutina.appendChild(h2);
    divRutina.appendChild(btnAgregarEjercicio);
    divRutina.appendChild(btnEliminarRutina);

    rutinasContainer.appendChild(divRutina);
    guardarRutinas();

    document.getElementById('ingreso').classList.add('oculto');
    document.getElementById('NombreRutina').value = '';
});

window.addEventListener('DOMContentLoaded', cargarRutinas);
