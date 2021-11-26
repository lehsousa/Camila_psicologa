const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', function() {
    navbar.classList.toggle('sticky', window.scrollY > 0)
})

//swiper - carrosel - slide

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true
    },
    loop: true,

    autoplay: {
        delay: 2000,

        disableOnInteraction: false
    }
})

//Menu mobile //

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


VanillaTilt.init(document.querySelectorAll('.sci li a'), {
    max: 30,
    speed: 400,
    glare: true,
    'max-glare': 1
})

let list = document.querySelectorAll('.sci li')
let bg = document.querySelector('.cards')
list.forEach(elements => {
    elements.addEventListener('mouseenter', function(event) {
        let color = event.target.getAttribute('data-color')
        bg.style.backgroundColor = color
    })
    elements.addEventListener('mouseleave', function(event) {
        bg.style.backgroundColor = '#fff'
    })
})

//MODAL

function iniciaModal(modalID) {
    if (localStorage.fechaModal !== modalID) {
        const modal = document.getElementById(modalID)
        modal.classList.add('mostrar')
        modal.addEventListener('click', e => {
            if (e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar')
                localStorage.fechaModal = modalID
            }
        })
    }
}

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 800) {
        iniciaModal('modal-promocao')
    }
})