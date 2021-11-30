const prompt = require ("prompt-sync")();

const main= (()=>
{

    const cube= (number)=>
    {
        const cubed= number**3

        return cubed;
    }

    const num= parseFloat( prompt("Enter a number to cubed: "));

    const cubed= cube(num);

    console.log(`the square of ${num} = ${cubed}`)



})();