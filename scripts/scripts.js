const modal = document.querySelector('#modal-producto');
const btnCerrar = document.querySelector('#btn-cerrar');

const modalDescripcion = document.querySelector('#modal-descripcion');
const modalTallas = document.querySelector('#modal-tallas');


document.querySelectorAll('.btn-ver-detalles').forEach(boton => {
    boton.addEventListener('click', e => {
        const tarjeta = e.target.closest('article');


        const descripcion = tarjeta.querySelector('.Descripcion-Producto').textContent;
        const tallas = tarjeta.querySelector('.Talla-Producto').textContent;


        modalDescripcion.textContent = descripcion;
        modalTallas.textContent = tallas;

        modal.showModal();
    });
});


btnCerrar.addEventListener('click', () => {
    modal.close();
});


document.querySelectorAll('nav button').forEach(boton => {
    boton.addEventListener('click', e => {
        const cat = e.target.closest('button').dataset.categoria.toLowerCase();
        
        document.querySelectorAll('article').forEach(tarjeta => {
            const catTarjeta = tarjeta.dataset.categoria.toLowerCase();
            tarjeta.classList.toggle('oculto', cat !== 'todos' && catTarjeta !== cat);
        });
    });
});


document.querySelector('#Modo-Oscuro').addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
});