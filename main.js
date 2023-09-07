const prev = document.querySelector('.arrows .prev')
const next = document.querySelector('.arrows .next')
const images = document.querySelectorAll('.slider img')
const dots = document.querySelectorAll('.arrows ul li')

next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

let index = 0

function nextSlide() {
  images[index].classList.remove('active')
  dots[index].classList.remove('active')
  index++
  if (index === images.length || index === dots.length) {
    index = 0
  }
  images[index].classList.add('active')
  dots[index].classList.add('active')
}

function prevSlide() {
  images[index].classList.remove('active')
  dots[index].classList.remove('active')
  
  if (index === 0) {
    index = images.length
  }
  index--
  images[index].classList.add('active')
  dots[index].classList.add('active')
}

// Indicators
// for(let index = 0; index < dots.length; index++) {
  // console.log(index, dots[index]);
  // dots[index].addEventListener('click', () => console.log('hello'))
// }

dots.forEach(function(dot, idx) {
  dot.addEventListener('click', function() {
    dots[index].classList.remove('active')
    images[index].classList.remove('active')
    
    index = idx
    
    dots[index].classList.add('active')
    images[index].classList.add('active')
  })
})



