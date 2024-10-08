// eventos
const cuerpo = document.body

const boton1 = document.querySelector('#eventoUno');
const boton2 = document.querySelector('#eventoDos');
const parrafoSpan = document.querySelector('#parrafoSpan');
const parrafoCompleto = document.querySelector('#parrafoCompleto');
const imagen =document.querySelector('#coder');
const header = document .querySelector ('#header');


// elemento.addEventListener("Tipo de Evento", la Funcion);


// elemnto al que le quiero aplicar 
boton1.addEventListener("click", () => {
//   console.log("se hizo click en el boton 1") ; 
cuerpo.style.backgroundColor = 'orange';
})

//otro metodo // Funcion anonima
boton2.onclick = () => { cuerpo.style.backgroundColor = 'black';}
 //   console.log("se hizo click en el boton 2") ; 



 // sirbe cuando psamos maus sobre un texto
 parrafoSpan.addEventListener("mouseover", () => {
    parrafoCompleto.style.color = 'blue';
})


// para pasar over por enciama de la uma imagen

// imagen.addEventListener("mouseover", () => {
//   imagen.style.width = '30%';
    
// })

// para guardar el dato en la consolo
const nombreProducto = document.querySelector('#nombreProducto');

nombreProducto.onchange = () => {
        console.log("Cambiando el Valor del Input: " + nombreProducto.value);
    }


// otro metodo
const nombrePersona = document.querySelector('#nombrePersona');

nombrePersona.addEventListener('input', () => {
    console.log(nombrePersona.value);
})


// Evento Submmit
let formulario = document.querySelector('#formulario');
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log("Formulario enviado")
    let form = e.target;
    console.log(form.children[0].value);
    console.log(form.children[1].value);

    document.getElementById('nombre').innerHTML = form.children[0].value;
    document.getElementById('edad').innerHTML = form.children[1].value;
    document.getElementById('email').innerHTML = form.children[2].value;

})



// barra de navegacion 

const navegacion = document.createElement('div');
const nav = document.createElement('nav');
const ul = document.createElement('ul');

const enlaces = [
    {
        link: "index",
        nombre: "Inicio"
    },
    {
        link: "products",
        nombre: "Productos"
    },
    {
        link: "contact",
        nombre: "Contacto"
    }    
]

header.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = "navbar";

for (const link of enlaces) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.link}.html">${link.nombre}</a>`;
    ul.appendChild(li);
}