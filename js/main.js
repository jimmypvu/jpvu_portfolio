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

//phone input
let phoneInput = document.querySelector("#phone");
window.intlTelInput(phoneInput, {
  separateDialCode: true
});

//form submit
// function sendEmail(){Email.send({
//     Host : "smtp.gmail.com",
//     Username : "jimmyphuvu@gmail.com",
//     Password : "abcDd6969$$",
//     To : "jimmyphuvu@gmail.com",
//     From : document.querySelector("#email").value,
//     Subject : "New Contact Form Submission",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );}