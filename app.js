const hamburger = document.querySelector('#hamburger')
const links = document.querySelector('.links')

hamburger.addEventListener('click', () => {
    console.log('clicked')
    links.classList.toggle('show');
})