const plusBtn = document.getElementById('plusBtn');
let count = 0;
plusBtn.addEventListener("click", function(){
    
   const numOfItem = document.getElementById('numOfItem').value;
   const convertItem = parseInt(numOfItem);

   count = convertItem + 1;

   document.getElementById('numOfItem').value = count;
   console.log( count);
})
