let sentence = "I am    a student. Dept of CSE.";

let count = 1 ;
for(let i=0; i<sentence.length; i++)
{
    if(sentence[i]==' ' && sentence[i-1]!=' ')
    {
        count++ ;
    }
}

console.log(count);


/*
    1. we only count word when we find a white space
    2. count white space by iteration
    3. to avoid space problem use logical and condition so that we can check space .. see code 
*/