// *** تحويل النصوص الى ارقام ***

// *** هون الجافاسكريبت هي اللي بتحول النصوص لأرقام 
console.log('5' + '4');
console.log('5' - '4'); // الجافا سكريبت لما تشوف أي عملية حسابية بتحول طرفينها لأرقام تلقائيا حتى لو كانو نصوص ما عدا اذا كانت العملية الحسابية عبارة عن جمع لأنو هون حيدمج الطرفين بحال كانو نصوص
console.log('5' * '4');
console.log('5' ** '4');
console.log('5' / '4');
console.log('5' - 'obaida'); // NaN
console.log(typeof NaN + '\n' + '\n') // NaN is a number

// *** هون انا بنفسي اللي بحول النصوص لأرقام
console.log(+'5' + +'4'); //لما كتبت قبل الرقمين 4 و 5 اشارة الزائد تم تحويلهم من نصوص الى ارقام وبالتالي لما أوضع بيناتهم اشارة الكونكاكينايت حيجمعلي الرقمين ك أرقام ولن يدمجهم ك نصوص
console.log(typeof '5');
console.log(typeof +'5');
console.log(typeof -'5');
console.log( -'5');
console.log( -'-5');
console.log( +'obaida'); // NaN
console.log(true)
console.log(false)
console.log(+true)
console.log(+false)
console.log(+undefined)
console.log(+null)
