const prompt = require ("prompt-sync")();

 const main= (()=>
{

   const calculator=(solve, number1, number2)=>
   {
       if(solve===1)
    {
        const sum= number1 + number2
        console.log(`The sum of the two numbers is ${sum}`)
    }

    else if(solve===2)
    {
        const subtraction= number1 - number2
        console.log(`The difference of the two numbers is ${subtraction}`)
    }

    else if(solve===3)
    {
        const multiply= number1 * number2
        console.log(`The product of the two numbers is ${multiply}`)
    }

    else if(solve===4 && number2!==0)
    {
        const divide= number1 / number2
        console.log(`The divsion of the two numbers is ${divide}`) 
    }
    else if(solve===4 && number2===0)
    {
        console.log(`You can not divid by Zero`) 

    }
    
    else {console.log(` please select one of the number provided to use program `)}

   }
   
    const number1 = parseInt( prompt("enter a number "));

    const number2 = parseInt( prompt("enter a number "));

    const solve =parseInt( prompt("Enter 1 for addition, 2 for subtraction , 3 multiplication , 4 for division"));

    const cal= calculator(solve, number1, number2);


})();