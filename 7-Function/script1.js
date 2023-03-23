// *** function return ***

// function pro(price, taxes, ads)
// {
//     let x = 10;
//     let product = price + taxes; // المتغيرات اللي بداخل الفنكشن اسمها لوكال يعني ما بقدر أستخدمها خارج الفنكشن
//     let result = product + ads;
//     console.log(result);
//     console.log(x);// رح ينطبع معي لكن لو استدعيت ال إكس خارج الفنكشن كان حيعطيني أيرور لأنو ال إكس متغير لوكال ما بزبط أستعملو خارج الفنكشن

// }
// pro(200,1.5,40)
// result / 2; //أعطاني ايرور لأنو المتغير ريزولت داخل الفنكشن ولهذا السبب ما بقدر أستخدمو خارج الفنكشن

//.................................................
// function pro(price, taxes, ads)
// {
//     let product = price + taxes;
//     let result = product + ads;
//     return result;
//     // return أمر موجود بأي فنكشن بسمحلك أنك ترجِع أي قيمة
//     // result = pro(200,1.5,40) هون بقدر أحط الفنكشن بمتغير وأستعمل هذا المتغير اللي بمثِل الفنكشن بالشكل اللي بدي إياه وأمارس عليه أي عملية حسابية خارج الفنكشن



// }
// let x = pro(200,1.5,40);// لما تحفظ الفنكشن بمتغير كأنك بتنادي على قيمة الريتيرن واللي هي بالمثال اللي عندي ريزولت
// console.log(x/2);

//.................................................

// function obaida()
// {
//     return 1; // الريتيرن هو ااخر سطر بأي فنكشن لأنو أي إشي بتكتبو بعد الريتيرن ما رح يشوفو ولا رح يطبعو


// }
// let x = obaida();
// console.log(x)

//.................................................

// function days(age)
// {
//     let result = age * 365;
//     console.log(result);
// }
// days(26);


// function days(age)
// {
//     let result = age * 365;
//     console.log(result);
// }
// let day = days(26); 
// console.log(day)
// بعطيني أن ديفايند لأنو الفنكشن ما برجعلي أي إشي وبالتالي ما بقدر أحطو بمتغير وأستعملو خارج الفنكشن


function days(age)
{
    let result = age * 365;
    return result;
}
let day = days(26); //لحد هون بحسبلي العمر باليوم


function calcAgeByHours(age)
{
    let result = age * 24
    return result;
}
let hour = calcAgeByHours(day); // بحسبلي العمر بالساعات
console.log(hour + " hours");








