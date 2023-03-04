// dark mode 
const checkBox = document.querySelector('.check');
console.log(checkBox);
const wrapper = document.querySelector('.wrapper');
const header = document.querySelectorAll('.toggle')
checkBox.addEventListener('click', (e) => {
  let isChecked = false;
  if(!isChecked){
    checkBox.classList.toggle('checked');
   
    isChecked = true;
    document.body.style.background = '#fff';
    document.body.style.color = '#111';
    wrapper.style.border = '2px solid #111';
    for ( x of header){
      x.style.color = '#111';
    };
    
    
    if(e.target.classList.contains('checked')){
    
     document.body.style.background = '#111';
     document.body.style.color = '#fff';
     wrapper.style.border = '2px solid #33ff77';
     
     let i = 0; 
     while(i < header.length){
       header[i].style.color = '#33ff77';
       
       i++
     }
     
    };
  };
  
});