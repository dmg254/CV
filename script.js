const nav= document.querySelector('.nav')
window.addEventListener('scroll',fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')

    } else {
        nav.classList.remove('active')
    }
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.text-animate');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.text-animate .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.text-animate',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
