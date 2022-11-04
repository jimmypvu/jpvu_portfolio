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

document.addEventListener('keydown', function(e){
        if(e.key === "Escape"){
            document.body.classList.remove('nav-open');
        }
    }
)
