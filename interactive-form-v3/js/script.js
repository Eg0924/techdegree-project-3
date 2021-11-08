
// Selecting the Name element input field and adding the focus property.
const inputName = document.getElementById('name');
inputName.focus();

// Selecting all the inputs within the activities-box div
const inputActivities = document.querySelectorAll('.activities-box input');
const valActivities = document.getElementById('activities-box');
 

 


// Selecting the other 'Job Role' element and setting display to none to hide until user selects the 'other' option.
 const otherJobRole = document.getElementById('other-job-role');
 otherJobRole.style.display = 'none';

 //Setting an event listener to listen for change in the job role dropdown menu
 // Using conditional to determine when 'other' is selected so the other input box shows.
 const jobRole = document.getElementById('title');
 //console.log(jobRole);
 
 jobRole.addEventListener('change', (e)=>{
    if(e.target.value === 'other'){
        otherJobRole.style.display = 'block';
    }else{
        otherJobRole.style.display = 'none';
    }
 });

 //Tshirt info section

const shirtDesign = document.getElementById('design');
const shirtColor = document.getElementById('color');


shirtColor.disabled = true;
// Event listener to look for a change in the selection on the design dropdown menu.
//Once the selection is made the colors for the selection appear on the next box below.
shirtDesign.addEventListener('change', (e)=>{
    shirtColor.disabled = false;
    for(let i = 0; i<shirtColor.children.length; i++){
        const evValues = e.target.value;
       const dataThemes = shirtColor.children[i].getAttribute("data-theme");
      
       if(evValues === dataThemes){
           shirtColor.children[i].hidden = false;
           shirtColor.children[i].selected = true; 
       }else {
        shirtColor.children[i].hidden = true;
        shirtColor.children[i].selected = false; 
       }
    }
});

// Register for activities section 
// variables to select the activities checkboxes and the cost section
const regForAct = document.getElementById('activities');
const totalForAct = document.getElementById('activities-cost');



let totalCost = 0;
// event listener to store the value of the activity clicked by user!
regForAct.addEventListener('change', (e)=>{
    //const cost = parseInt(e.target.getAttribute('data-cost'));
    let cost = e.target.getAttribute('data-cost');
    
    const dateAndTime = e.target.getAttribute('data-day-and-time');
    cost = +cost;
    //console.log(dateAndTime);
   //checking if an activity is checked and updating the total 
   if(e.target.checked){
    totalCost += cost;
    e.target.parentNode.classList.add('valid');
    e.target.parentNode.classList.remove('not-valid');     
    }else{
         totalCost -= cost;
         //e.target.parentNode.classList.add('not-valid');
         e.target.parentNode.classList.remove('valid');
         
        } 
    
     // Extra credit

     for(let i = 1; i<inputActivities.length; i++ ){
         const activityTime = inputActivities[i].getAttribute('data-day-and-time');
         if(dateAndTime == activityTime && inputActivities[i] != e.target && e.target.checked){
            console.log(inputActivities[i]);
            inputActivities[i].disabled = true;
            inputActivities[i].parentNode.classList.add('disabled');
         }else{
            inputActivities[i].disabled = false;
            inputActivities[i].parentNode.classList.remove('disabled');
            
         }
     }
   totalForAct.innerHTML = `<p>Total: $${totalCost.toFixed(2)}</p>`;
      
    
});

//Payment info section.

const paymentChoice = document.getElementById('payment');
const card = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

///-----Logging out for testing
//  console.log(paymentChoice);
// console.log(card);
// console.log(payPal);
// console.log(bitCoin);
payPal.hidden = true;
bitCoin.hidden = true;

// Giving the credit card element the selected attribute.
paymentChoice.children[1].selected = true;

//selecting the fieldset with all the payment divs 
const options = document.querySelector('.payment-methods');


// listens for change in payment field and displays div based on choice
paymentChoice.addEventListener('change', (e)=>{

    for(let i = 2; i < options.children.length; i++){    
    const choice = e.target.value;
    console.log(e.target.value);
    const displayDivs = options.children[i].getAttribute('class');
    
    //Condition to match the selection's value with the div's class.
    if(choice === displayDivs){
      options.children[i].style.display = 'block' 
      
    }else{
        options.children[i].style.display = 'none';
    }
 }
});






//Validation Testing function and accessibility

// function uses the input value for the field and test the value against the regex variable and then modifies the parent node based on whether the condition is met.
    function isValid(regex, value, element){
        const answer = regex.test(value);
        if(!answer){
            element.parentNode.classList.add('not-valid');
            element.parentNode.classList.remove('valid');
            element.parentNode.lastElementChild.style.display = 'block';
        }else{
           element.parentNode.classList.add('valid');
           element.parentNode.classList.remove('not-valid');
           element.parentNode.lastElementChild.style.display = 'none';
          }
        return answer;
    }
    // Name validation extra credit
    //The keyup listener makes sure the line is not empty! when the line goes empty it displays the message
    
    inputName.addEventListener('keyup', (e)=>{
        const nameValidation = inputName.value;
        const regVal =  /^\D+$/; 
        const isValidName = isValid(regVal, nameValidation, inputName);
        if(!isValidName){
            inputName.parentNode.lastElementChild.style.display = 'block';
        }else{
            
        }

//Listening for a sumbit event on the form
const form = document.querySelector('.container');
form.addEventListener("submit", (e)=>{
   1
const emailAddress = document.getElementById('email');
const cardNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cardCvv = document.getElementById('cvv');


// Name Validation
    const newName = inputName.value;
    const regex = /^\D+$/;
    const validName = isValid(regex, newName, inputName);
    
    
    });
    // Email validation form
    
    const tempEmail = emailAddress.value;
    const regexEmail = /[^@]+@[^@.]+\.[a-z]+$/i;
    const validEMail = isValid(regexEmail, tempEmail, emailAddress);
    


    //Card number Validation

    
    const tempCard = cardNum.value;
    const visaRegex = /^\d{13,16}$/;
    const validCard = isValid(visaRegex, tempCard, cardNum);
    
    //Zip code validation
    const tempZip = zipCode.value;
    const regexZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    const validZip = isValid(regexZip, tempZip, zipCode);
    

    //CVV code Validation
    const tempCvv=  cardCvv.value;
    const regexCvv = /^[0-9]{3}$/;
    const validCvv = isValid(regexCvv, tempCvv, cardCvv);

    // Validate credit card selection and fields.
    let creditCardTruthy = true;
    if(paymentChoice.value == 'credit-card'){
      if(validCard && validZip && validCvv){
        creditCardTruthy = true;                         
        }else{
            creditCardTruthy = false;
        }
    }else {

    }


    
    // checking if no activity is selected and displaying a message
    let activityChecked = true;
    if(totalCost > 0){
        activityChecked = true;
        valActivities.parentNode.lastElementChild.style.display = 'none';
    }else{
        activityChecked = false;
        valActivities.parentNode.lastElementChild.style.display = 'block';
    }
    
   

    if((!validName) || (!validEMail) || (!activityChecked) || (!creditCardTruthy) ){
        e.preventDefault();
    }else{
        console.log("The form has submitted");
    }
    //Logging all tests 
    console.log(validName);
    console.log(validEMail);
    console.log(validCard);
    console.log(validZip);
    console.log(validCvv);
    
});

// Accessibility Section 

//console.log(inputActivities);

     //Looping thrugh the inputs and adding event listeners to each input 
     // When an activity is selected the parent element of the input is modified by adding and removing the focus className
for(let i = 0; i < inputActivities.length; i++){
    inputActivities[i].addEventListener('focus', (e)=>{
        e.target.parentNode.classList.add('focus');
    });
    inputActivities[i].addEventListener('blur', (e)=>{
        e.target.parentNode.classList.remove('focus');
        
    });
     
      
    
}
