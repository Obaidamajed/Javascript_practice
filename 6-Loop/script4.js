// *** while Loop & dowhile Loop ***


// let i = 0; // start
// while(i < 3) // condition
// {
//     document.write('<h1>hello world</h1>')
// i++ // steps
// }
//...........................................
// let i = 0; // start
// while(true) // condition رح يضل يطبع هلو وورد ويعلق البراوزر 
// {
//     document.write('<h1>hello world</h1>')
// i++ // steps
// }
//...........................................
// let i = 0; // start
// while(false) // condition ما رح يطبع أبدا لأنو الشرط مو متحقق او انت حاكيلو إنو الشرط مو متحقق يعني فولس
// {
//     document.write('<h1>hello world</h1>')
// i++ // steps
// }

//...........................................
let i = 0;
do{ // بنفذ بعدين بشوف الشرط اذا اتحقق او لا عكس الوايل , يعني بنفذ على الأقل مرة وحدة
    document.write("<h1>hello</h1>");
    i++;
}while( false ); // رغم انو الشرط غير متحقق لكن نفذ مرة وحدة لأنو ال دو بنفذ بعدين بشوف الشرط
document.write(i)











