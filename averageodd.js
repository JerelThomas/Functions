const prompt = require ("prompt-sync")();

const main=(()=>
{
        let average
        const oddav=()=>
    {
        let i
        let count=0
        let sumodd=0
       

        for(let i=1; i<=6; i++)
        {

            let num=parseInt( prompt("Enter a number "))

            if (num%2 > 0 ) 
            {
                sumodd=num + sumodd
                count= count + 1
                average= sumodd/count  
            }
        }

    }

    const run=oddav();

    console.log(`The average of all the odd numbers is ${average}`)

})();

