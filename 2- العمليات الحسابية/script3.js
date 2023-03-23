// *** شرح اوبجكت النومبر ***

// Number is an object
// النومبر هو اوبجيكت بداخلو أمور كثيرة
console.log(Number.MAX_VALUE ) // اكبر رقم الجافاسكريبت بتقدر تتعامل معو
console.log(Number.MAX_VALUE + 698545436) 
console.log(Number.MAX_SAFE_INTEGER) // اكبر رقم آمن ممكن توصل إلو
console.log(Number.MIN_SAFE_INTEGER) // اقل رقم آمن ممكن تتعامل معو

console.log(Number.isSafeInteger(9007199254740991
    )) // بتشوفلي اذا الرقم آمن او غير آمن 
    console.log(Number.isSafeInteger(9007199254740991 + 1
        )) // هون الرقم صار غير امن لاني زدت على اقصى رقم امن رقم 1
        
        console.log('\n');

        console.log(Number.isInteger(4)) // بسألو هل هذا رقم أم لا
        console.log(Number.isInteger('4'))

        console.log('\n');

        console.log(Number.isNaN('4'))
        console.log(Number.isNaN('obaida' - 5))
        console.log(Number.isNaN('obaida' + 5))
        console.log(isNaN('obaida' + 5))
        console.log(typeof('obaida' + 5))
        console.log(Number.isNaN('obaida' / 5))

