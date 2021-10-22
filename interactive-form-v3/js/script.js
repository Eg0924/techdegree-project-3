
// Selecting the Name element input field and adding the focus property.
const inputName = document.getElementById('name');
inputName.focus();


// Selecting the other 'Job Role' element and setting display to none to hide until user selects the 'other' option.
 const otherJobRole = document.getElementById('other-job-role');
 otherJobRole.style.display = 'none';

 //Setting an event listener to listen for change in the job role dropdown menu
 // Using conditional to determine when 'other' is selected so the other input box shows.
 const jobRole = document.getElementById('title');
 console.log(jobRole);
 
 jobRole.addEventListener('change', (e)=>{
    if(e.target.value === 'other'){
        otherJobRole.style.display = 'block';
    }else{
        otherJobRole.style.display = 'none';
    }
 });

 