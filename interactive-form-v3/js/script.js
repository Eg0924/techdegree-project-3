
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

console.log(regForAct);
let totalCost = 0;
// event listener to store the value of the activity clicked by user!
regForAct.addEventListener('change', (e)=>{
    //const cost = parseInt(e.target.getAttribute('data-cost'));
    let cost = e.target.getAttribute('data-cost');
    cost = +cost;
   // console.log(cost, typeof cost);
    
   if(e.target.checked){
    totalCost += cost;
   }else if(e.target.checked = false){
       totalCost -= cost;
   }


    console.log(totalCost);
    console.log(e.target.checked);
});