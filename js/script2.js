const changeColor = document.querySelector('.changeColor')
const changeColorIcon = changeColor.querySelector('.icon')
const colorLink = document.querySelector('#colorLink')

changeColorIcon.addEventListener('click', () => {
  changeColor.classList.toggle('active')
})

function change (link) {
  colorLink.href = link
}
