   //javascript DOM
const form = document.getElementById('registrationForm');


form.addEventListener('submit', function(event){
    event.preventDefault();
    //get the value
const name = document.getElementById("firstName").value.trim();
const surname = document.getElementById("lastName").value.trim();
const email = document.getElementById("email").value.trim();
const confirmEmail = document.getElementById("ConfirmEmail").value.trim();
const password = document.getElementById("password").value.trim();
const confirmpassword = document.getElementById("confirmPassword").value.trim();
const age = document.getElementById("age").value.trim();


//get the message elements( firstNameMsg,lastNameMsg, emailMsg, 
// comfirmemailMsg, passwordMsg, confirmpasswordMsg, ageMMsg )

const nameMessage = document.getElementById("firstNameMsg");
const lasMessage = document.getElementById("lastNameMsg");
const emailMessage = document.getElementById("emailMsg");
const confirmEmailMessage = document.getElementById("comfirmemailMsg");
const passwordMessage = document.getElementById("passwordMsg");
const confirmPasswordMessage = document.getElementById("confirmpasswordMsg");
const ageMessage = document.getElementById("ageMMsg");

//validate input and display the message
if (name==="") nameMessage.textContent = 'Please enter your first name';
               nameMessage.style.color = 'yellow';
               nameMessage.style.fontSize ='0.8rem';
               nameMessage.style.fontWeight ='bolder';

if (surname==="")lasMessage.textContent = 'Please enter your last name';
                 lasMessage.style.color = 'yellow';
                 lasMessage.style.fontSize ='0.8rem';
                 lasMessage.style.fontWeight ='bolder';


if (email==="") emailMessage.textContent = 'Please enter your email';
                emailMessage.style.color = 'yellow';
                emailMessage.style.fontSize ='0.8rem';
                emailMessage.style.fontWeight ='bolder';

if (confirmEmail==="") confirmEmailMessage.textContent = 'Please confirm your email';
                confirmEmailMessage.style.color = 'yellow';
                confirmEmailMessage.style.fontSize ='0.8rem';
                confirmEmailMessage.style.fontWeight ='bolder';

if (password==="") passwordMessage.textContent = 'Please enter password';
                passwordMessage.style.color = 'yellow';
                passwordMessage.style.fontSize ='0.8rem';
                passwordMessage.style.fontWeight ='bolder';

if (confirmpassword==="")confirmPasswordMessage.textContent = 'Please confirm password';
                confirmPasswordMessage.style.color = 'yellow';
                confirmPasswordMessage.style.fontSize ='0.8rem';
                confirmPasswordMessage.style.fontWeight ='bolder';

if (age==="") ageMessage.textContent = 'Please enter your age';
                ageMessage.style.color = 'yellow';
                ageMessage.style.fontSize ='0.8rem';
                ageMessage.style.fontWeight ='bolder';

})
