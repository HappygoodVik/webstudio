const heroBtn = document.querySelector('.hero-btn') 
const closeBtn = document.querySelector('.close-button') 
const menuBtn = document.querySelector('.menu-button')
const contactsLink = document.querySelector('.contacts-link')

contactsLink.addEventListener('click', () => {
    document.body.classList.remove('is-menu-open')
})

menuBtn.addEventListener('click', () => {    
    document.body.classList.add('is-menu-open')
})

heroBtn.addEventListener('click', () => {
    document.body.classList.add('is-modal-open')
})

closeBtn.addEventListener('click', () => {
    document.body.classList.remove('is-modal-open')
})

document.addEventListener('keydown', (e) => {
    const hasBodyActiveModalOpen = document.body.classList.contains('is-modal-open')
    
    if (e.key === 'Escape' && hasBodyActiveModalOpen) {
        document.body.classList.toggle('is-modal-open')
    }
})

