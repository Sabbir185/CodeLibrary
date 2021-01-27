// plus button
const plusBtn = document.getElementById('plusBtn');
plusBtn.addEventListener("click", function(){
    plusAction("numOfItem");
})

// minus button
const minusBtn = document.getElementById('minusBtn');
minusBtn.addEventListener("click", function(){
    minusAction("numOfItem");
})


let cnt = 0;
function plusAction(id)
{   
    const numOfItem = document.getElementById(id).value;
    const convertItem = parseInt(numOfItem);
    cnt = convertItem + 1;
    document.getElementById(id).value = cnt;
    console.log(cnt)
}
function minusAction(id)
{   
    const numOfItem = document.getElementById(id).value;
    const convertItem = parseInt(numOfItem);
    cnt = convertItem - 1;
    document.getElementById(id).value = cnt;
}