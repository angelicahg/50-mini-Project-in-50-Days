//scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 10));


  }
}

//search
/* inputSearch = document.getElementById("inputSearch")

function buscador_interno() {

  filter = inputSearch.value.toUpperCase();
  li = box_search.getElementByTagName("li");

  //recorriendo elementos


  for (i = 0; i < li.length; i++) {

  }



}
 */
/* var buscador = $("#inicio").Datatable();
$("#input-search").keyup(function () {
  buscador.search($(this).val()).draw();
  if ($(".project").val() == "") {
    $(".project").fadeOut(100);
  } else {
    $(".project").fadeIn(100);
  }
}) */
const productos = [
  { nombre: 'expading', valor: 1 },
  { nombre: 'expading', valor: 3 },
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const filtrar = () => {

  const texto = formulario.value.toLowerCase();
  for (let producto of productos) {
    let nombre = producto.nombre.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      resultado.innerHTML += `
<li> ${producto.nombre} - valor: ${producto.nombre}</li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
`
    }

  }
}
if (resultado.innerHTML === '') {
  resultado.innerHTML += `
  <li> no encontrado...</li>
  `
}




