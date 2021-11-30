const prompt = require ("prompt-sync")();

const main=(()=>
{

    const isodd=(start,end)=>
    {
        for(start; start<=end; start++)
        {
            if (start%2 > 0 )
            {
              console.log(`${start} `)  
              console.log(`the number above is odd 1`)
                
            }

            else if(start%2===0 )
            {
                console.log(`${start} `)
                console.log(`the number above is even 2`)
            }

            else if (start===0)
            {
                console.log(`${start}`)
                console.log(`the number above is 0`)
            }
        }
    }

    let startfinal= parseInt( prompt("Enter a Start number "));
    let end= parseInt( prompt("Enter a End number "));

    const run=isodd(startfinal,end);


})();

    




        


