const prompt = require ("prompt-sync")();




const main=(()=>
{

    const evenis=(number)=>
    {
        /*% means divided by #num === remainder */
        if (number%2===0)
        {
            console.log(`the number is even`)
        }

        else
        {
            console.log(`the number is odd`)
        }
    }
    
const number=  parseFloat( prompt("Enter the number: "));

const run=evenis(number);

})();
