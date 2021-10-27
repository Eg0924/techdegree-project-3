
// Selecting the Name element input field and adding the focus property.
const inputName = document.getElementById('name');
inputName.focus();


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
    cost = +cost;
   // console.log(cost, typeof cost);
   //checking if an activity is checked and updating the total 
   if(e.target.checked){
    totalCost += cost;
   }else{
       totalCost -= cost;
   }

   totalForAct.innerHTML = `<p>Total: $${totalCost.toFixed(2)}</p>`;
    
});

//Payment info section.

const paymentChoice = document.getElementById('payment');
const card = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

///-----Logging out for testing
// console.log(paymentChoice);
// console.log(card);
// console.log(payPal);
// console.log(bitCoin);
payPal.hidden = true;
bitCoin.hidden = true;

// Giving the credit card element the selected attribute.
paymentChoice.children[1].setAttribute('property', 'selected');

//selecting the fieldset with all the payment divs 
const options = document.querySelector('.payment-methods');


// listens for change in payment field and displays div based on choice
paymentChoice.addEventListener('change', (e)=>{

    for(let i = 2; i < options.children.length; i++){    
    const choice = e.target.value;
    const displayDivs = options.children[i].getAttribute('class');
    
    //Condition to match the selection's value with the div's class.
    if(choice === displayDivs){
      options.children[i].style.display = 'block' 
      
    }else{
        options.children[i].style.display = 'none';
    }
 }
});

// Form validation section 
const emailAddress = document.getElementById('email');
const cardNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cardCvv = document.getElementById('cvv');
const form = document.querySelector('.container');

// console.log(emailAddress);
// console.log(cardNum);
// console.log(zipCode);
// console.log(cardCvv);
// console.log(form);

//Validation Testing function 

    function isValid(regex, value){
        const answer = regex.test(value);
        return answer;
    }
//Listening for a sumbit event on the form

form.addEventListener('submit', (e)=>{
   //e.preventDefault();
// Name Validation
    const newName = inputName.value;
    const regex = /^[A-Z][a-z]* [A-Z][a-z]*$/;
    const validName = isValid(regex, newName);
    
    // Email validation form
    
    const tempEmail = emailAddress.value;
    const regexEmail = /[^@]+@[^@.]+\.[a-z]+$/i;
     const validEMail = isValid(regexEmail, tempEmail);
    
    
    //---------******Needs Work!
    //Card number Validation
    const tempCard = cardNum.value;
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const validCard = isValid(visaRegex, tempCard);

    //Zip code validation
    const tempZip = zipCode.value;
    const regexZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    const validZip = isValid(regexZip, tempZip);


    //CVV code Validation
    const tempCvv=  cardCvv.value;
    const regexCvv = /^[0-9]{3}$/;
    const validCvv = isValid(regexCvv, tempCvv);


    //Logging all tests 
    console.log(validName);
    console.log(validEMail);
    console.log(validCard);
    console.log(validZip);
    console.log(validCvv);
    if((!validName) || (!validEMail) || (!validCard) || (!validZip) || (!validCvv)){
        e.preventDefault();
    }else{

    }
});

// Accessibility Section 

const inputActivities = document.querySelectorAll('.activities-box input');
console.log(inputActivities);
for(let i = 0; i < inputActivities.length; i++){
    inputActivities[i].addEventListener('focus', (e)=>{
        e.target.parentNode.classList.add('focus');
    });
    inputActivities[i].addEventListener('blur', (e)=>{
        e.target.parentNode.classList.remove('focus');
        
    });
    
}
