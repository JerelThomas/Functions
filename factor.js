const prompt = require ("prompt-sync")();

const main=(()=>
{

    const factorfunction=()=>
    {
            let i
            let n

        for(let i=1; i<=3; i++)
        {

            let num=parseInt( prompt("Enter a number "))
            for(let n=1;n<=num; n++)
            {
                let factor=num/n
                if (num%n===0)
                {
                    console.log(`Factors of ${num} are ${factor} `)
                }
            }
    
        }

    }

    const run=factorfunction();


})();

