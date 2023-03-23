// *** Nested Loop ***

// let cars = ["bmw", "mercedes", "honda"];
// let models = [2020, 2021, 2022];

// for ( let i = 0 ; i < cars.length ; i++ )//cars.length=3
// {
//     console.log(`car: ${cars[i]}`);
//     for ( let j = 0 ; j < models.length ; j++)//models.length=3
//     {
//         console.log("model: " + models[j])
//     }
    
//     console.log("\n")
// }



//.........................................................

let cars = ["bmw", "mercedes", "honda"];
let models = [2020, 2021, 2022];
let colors = ["black", "white", "red"]

for ( let i = 0 ; i < cars.length ; i++ )//cars.length=3
{
    console.log(`car: ${cars[i]}`);
    for ( let j = 0 ; j < models.length ; j++)//models.length=3
    {
        console.log("model: " + models[j])
    }
    for ( let z = 0 ; z < colors.length ; z++)//models.length=3
    {
        console.log("color: " + colors[z])
    }
    console.log("\n")
}







