// *** if 1 ***

let num1 =5;
let num2 =10;

if(num2 > num1){
    console.log("hello")
}
if(num2 < num1){
    console.log("hello")
}
//............................
let num11 = prompt("num11");
let num12 = prompt("num12");

if(num12 > num11){
    console.log("obaida")
}
//............................
let role = prompt("what is your role");
if (role == "admin")
{
    document.write("update,create,selete");
}
else if (role == "moderator")// في حالة عدم تحقق الشرط للي فوق فوتلي على هذا الشرط
{ 
    document.write("update,create,");
}

else//معناها في حال عدم تحقق أي شرط من الشروط اللي فوق
{
    document.write("hello user");

}



