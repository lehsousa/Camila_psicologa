const mainMenu = document.querySelector('.navbar')
const openMenu = document.querySelector('.burgue')
const itensMenu = document.querySelector('.mainMenu')

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden'
    document.body.scroll = 'no'
}

function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto'
    document.body.scroll = 'yes'
}

openMenu.onclick = function() {
    if (mainMenu.classList.toggle('active')) {
        unloadScrollBars()
    } else {
        reloadScrollBars()
    }
}

itensMenu.onclick = function() {
    mainMenu.classList.remove('active')
    reloadScrollBars()
}

const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function() {
    navbar.classList.toggle('sticky', window.scrollY > 0)
})