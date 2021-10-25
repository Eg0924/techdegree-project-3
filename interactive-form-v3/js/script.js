
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

