let navToggle = document.querySelector('.nav-toggle')
let navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('nav-open')
});

navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        document.body.classList.remove('nav-open')
    })
})

document.body.addEventListener("keypress", function(e){
        if(e.key === "ESC"){
            document.nav.classList.remove('nav-open');
        }
    }
)
