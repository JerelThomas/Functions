const prompt = require ("prompt-sync")();

const main= (()=>
{

    const sumoftwonumber= (number1,number2)=>
    {
        const sum= number1 + number2 
        return sum;
    }

    const num1=parseFloat( prompt("Enter a number to sum: "));
    const num2=parseFloat( prompt("Enter a number to sum: "));

    const sum= sumoftwonumber(num1,num2);

    console.log(`the sum of ${num1} + ${num2} = ${sum}`)
})();