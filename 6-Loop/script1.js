// *** Loop 2 ***

// let names = ['ahmed', 'mazen','ali','gamal'];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// we will use loop method to show the same result

let names = ["ahmed", "mazen", "ali", "gamal"];
let x ="obaida"
// for(i = 0 ; i < 4 ; i++)
// {
//     console.log(names[i]);
// }
for(i = 0 ; i < names.length ; i++) //names.length=4
{
    console.log(names[i]);
}

console.log('\n')

for (i=0; i < x.length; i++)//x.length=6
{
    console.log(x[i]);
}

console.log('\n')

for(i=3; i>=0; i--)
{
    console.log(names[i])
}

console.log('\n')

for (i=5; i>=0; i--)
{
    console.log(x[i])
}