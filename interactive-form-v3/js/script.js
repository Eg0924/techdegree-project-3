
// Selecting the Name element input field and adding the focus property.
const inputName = document.getElementById('name');
inputName.focus();

// Selecting all the inputs within the activities-box div
const inputActivities = document.querySelectorAll('.activities-box input');


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
paymentChoice.children[1].selected = true;

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


// ----- Activities validation section




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


    // this function loops through an array checking if the inputs are checked in the Activities array of elements. It then modifies the classes based on the .checked property.

    function modifyClasses(arr){
        for(let i = 0; i< arr.length; i++){
            if(arr[i].checked == false){
               arr[i].parentNode.classList.add('not-valid');
               arr[i].parentNode.classList.remove('valid');
            }else{
                arr[i].parentNode.classList.add('valid');
                arr[i].parentNode.classList.remove('not-valid'); 
            }
        }
    }
//Listening for a sumbit event on the form

form.addEventListener("submit", (e)=>{
   //e.preventDefault();
// Name Validation
    const newName = inputName.value;
    const regex = /^\D*$/;
    const validName = isValid(regex, newName, inputName);
    
    // Email validation form
    
    const tempEmail = emailAddress.value;
    const regexEmail = /[^@]+@[^@.]+\.[a-z]+$/i;
    const validEMail = isValid(regexEmail, tempEmail, emailAddress);
    
    
    //---------******Needs Work!
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
    //

    let checked = inputActivities[0].checked || inputActivities[1].checked || inputActivities[2].checked || inputActivities[3].checked || inputActivities[4].checked || inputActivities[5].checked || inputActivities[6].checked ;



    
   

    
    // Validating activities
    const valActivities = document.getElementById('activities-box');
    
    // calling the function to check whether the activities are checked.
    modifyClasses(inputActivities);
    
    // checking if no activity is selected and displaying a message

    if(!checked){
        valActivities.parentNode.lastElementChild.style.display = 'block';
    }else{
        valActivities.parentNode.lastElementChild.style.display = 'none';
    }
    
   

    if((!validName) || (!validEMail) || (!validCard) || (!validZip) || (!validCvv) || (!checked)){
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
