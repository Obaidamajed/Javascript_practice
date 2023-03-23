// *** break - continue ***

// let users = ["ali", "mazen", "gamal",1,2,3,4, "oday", "yousef", "ahmed"];

// for ( let i = 0 ; i < users.length; i++)
// {
//     console.log(users[i])
// }

//....................................................

// let users = ["ali", "mazen", "gamal",1,2,3,4, "oday", "yousef", "ahmed"];

// for ( let i = 0 ; i < users.length; i++)
// {
//     if (typeof users[i] == "number")
//     {
//         continue; // يعني اذا كان الإندكس لليوزر رقم: إعمل إلو إستبعاد
//     }
//     console.log(users[i])
// }

//....................................................

// let users = ["ali", "mazen", "gamal",1,2,3,4, "oday", "yousef", "ahmed"];

// for ( let i = 0 ; i < users.length; i++)
// {
//     if (typeof users[i] == "string")
//     {
//         continue; // يعني اذا كان الإندكس لليوزر سترنق: إعمل إلو إستبعاد
//     }
//     console.log(users[i])
// }

//....................................................


// let users = ["ali", "mazen", "gamal", "oday", "yousef", "ahmed"];

// for ( let i = 0 ; i < users.length; i++)
// {
//     if( users[i] == "gamal")
//     {
//         continue; 
//     }
//     console.log(users[i])
// }

//....................................................

// let users = ["ali", "mazen", "gamal", "oday", "yousef", "ahmed"];

// for ( let i = 0 ; i < users.length; i++)
// {
//     if( users[i] != "ali")// بحكيلو أي عنصر لا يساوي علي أعمل إلو إستبعاد
//     {
//         continue; 
//     }
//     console.log(users[i])
// }

//....................................................

// let users = ["ali", "mazen", "gamal", "oday", "yousef", "ahmed"];

// for ( let i = 0 ; i < users.length; i++)
// {
//     if( users[i] == "yousef") 
//     {
//         break; // أول ما تشوف إندكس إسمو يوسف وقف وهون ما حيجيب إسم يوسف
//     }
//     console.log(users[i])
// }

//....................................................

let users = ["ali", "mazen", "gamal", "oday", "yousef", "ahmed"];

for ( let i = 0 ; i < users.length; i++)
{
    console.log(users[i])
    if( users[i] == "yousef") 
    {
        break; // أول ما تشوف إندكس إسمو يوسف وقف وهون حيجيب إسم يوسف
    }
}