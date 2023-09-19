const from = document.querySelector('form')

from.addEventListener('submit' , function (e){

    e.preventDefault()
   const hieght = parseInt(document.querySelector('#height').value)  
   const weight = parseInt(document.querySelector('#weight').value)
   const result = document.querySelector('#results') 

   if(hieght === '' || hieght < 0 || isNaN(hieght)){
    result.innerHTML = `Please give valid height`
    // console.log("enter valid hight");
   }else if(weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give valid weight`
    
   } else {
         const bmi = (weight / ((hieght * hieght) / 10000)).toFixed(2)
         result.innerHTML = `${bmi}`
   }



})