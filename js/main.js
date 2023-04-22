//nav toggle
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

//twilio phone input init
let phoneInput = document.querySelector("#phone");
window.intlTelInput(phoneInput, {
  separateDialCode: true
});

//form validation
let contactForm = document.querySelector(".contact_form");
contactForm.addEventListener("submit", validateForm);

function validateForm(emailInputText){
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // let nameFormat = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    // let phoneFormat = /^(\+?1)?[-.\s]?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

    if(emailInputText.value.match(emailFormat)){
        return true;
    }else{
        alert("Invalid email address! Please double-check your email address");
        document.contact_form.email.focus();
        event.preventDefault();
        return false;
    }
}