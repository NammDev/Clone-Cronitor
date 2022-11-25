const productBtn = document.querySelector('.navbar__link:first-child')
const iconBtn = document.querySelector('.navbar__ham')
const productTray = document.querySelector('.product-tray')
const productTrayMb = document.querySelector('.nav-mobile')
const dropdownMb = document.querySelector('.nav-mobile__dropdown')
const productItemMb = document.querySelector('.nav-mobile__product-tray')

productBtn.addEventListener('click', () => {
  productTray.classList.toggle('open')
})

iconBtn.addEventListener('click', () => {
  iconBtn.classList.toggle('open')
  productTrayMb.classList.toggle('open')
})

dropdownMb.addEventListener('click', () => {
  dropdownMb.classList.toggle('open')
  productItemMb.classList.toggle('close')
})
