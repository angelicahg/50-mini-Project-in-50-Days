const Challenge = document.querySelectorAll('.Challenge');
const filter = document.getElementById('filter');

filter.addEventListener('input', (e) => filterData(e.target.value));

function filterData(searchTerm) {

  Challenge.forEach(item => {
    // console.log(item.p.innerText)
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}


//scroll up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - (currentScroll / 10));


  }
}