const prompt = require ("prompt-sync")();

const main= (()=>
{

    const areacircle=(radius)=>
    {
        const pi=22/7

        const area= pi * radius**2
        return area;
    }

    const radius=  parseFloat( prompt("Enter a number for the area of a circle: ")); 

    const areacir= areacircle(radius);

    console.log(`the area of the circle is ${areacir.toFixed(2)}`)

})();