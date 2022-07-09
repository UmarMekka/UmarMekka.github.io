//Hamburger In Navigation Menu
const hamburger = document.querySelector('#hamburger')
const links = document.querySelector('.links')
const linkButtons = document.querySelectorAll('.links button')

links.classList.add('unexpand')
linkButtons.forEach(e => {
    e.classList.toggle('disappear');
})

hamburger.addEventListener('click', () => {
    if (links.classList.contains('show')) {
        linkButtons.forEach(e => {
        e.classList.toggle('disappear');
        })
        links.classList.toggle('unexpand');
        setTimeout(() => {
            links.classList.toggle('show')
        },
        "500")
    } else {
        linkButtons.forEach(e => {
            e.classList.toggle('disappear');
            })
        links.classList.toggle('unexpand');
        links.classList.toggle('show');
        
    }
})

//Smooth Scrolling Linked To Navigation
document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        console.log("gnarly")
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        })
    })
})
