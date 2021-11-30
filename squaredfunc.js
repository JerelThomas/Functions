const prompt = require ("prompt-sync")();

const main= (()=>
{

    const sqr= (number)=>
    {
        const squared= number**2

        return squared;
    }

    const num= parseFloat( prompt("Enter a number to square: "));

    const squared= sqr(num);

    console.log(`the square of ${num} = ${squared}`)



})();