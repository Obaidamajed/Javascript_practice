// *** assign object ***

let a1 = {
    num1:1,
    hello:function(){
        return "hello";
    }
}
let a2 = {
    num2:2
}
let a3 = {
    num3:3
}

let a4 = Object.assign(a1,a2,a3,{
    num4:4 
} // ضفت أوبجيكت جديد ما كان موجود من الأصل
    ); // هيك بدمج أكتر من أوبجيكت بأوبجيكت واحد
a4.num1 = 10 // عدلت قيمة النوم1 اللي صارت بأوبجيكت آي4
a4.r = 100 // ضفت آر ل أوبجيكت أي4
console.log(a4);




















