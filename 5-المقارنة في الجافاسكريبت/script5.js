// *** switch ***

// let role = prompt("what is your role");
// if (role == "admin")
// {
//     document.write("update,create,selete");
// }
// else if (role == "moderator")
// { 
//     document.write("update,create,");
// }

// else 
// {
//     document.write("hello user");

// }



let role = prompt("what is your role ?");
switch(role)//بحط بين القوسين الإشي اللي بقارنو او اللي الجملة الشرطية بتتمحور حوليه

{
    case "admin": // بحط الاحتمالات الخاصة بالرول
        document.write("create, update, delete");
        break;// لو ما حطيتها كان بعرضلي كل النتائج اللي كاتبها تحت
    case "moderator":
        document.write("create, update");
        break;
    case "editor":
        document.write("update");
        break;
    default:
        document.write("hello user")
}
// switch ما بتقدر تعطيها غير == أما ال إف بتقدر تقارن بين الاكبر والاصغر 





