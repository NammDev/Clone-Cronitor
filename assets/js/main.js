const productBtn = document.querySelector('.navbar__link:first-child')
const productTray = document.querySelector('.product-tray')

productBtn.addEventListener('click', () => {
  productTray.classList.toggle('open')
})
