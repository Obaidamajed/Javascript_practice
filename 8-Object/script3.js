"use strict";
// *** this keyword ***

// the this بتشير الى الاوبجيكت اللي بتنتمي إلو
let user = {
    name: "obaida",
    getName:function(){ // هذه ميثود من نوع فنكشن
        return user.name //return user.name=return this.name
    }
}
console.log(user.getName())//حيطلعلي عبيده ك ناتج في الكونسول

let x = this; // الذيس هون بتنتمي لأوبجيكت الوِندو
console.log(x);
console.log(x == window);
// this.alert()         //this.alert()=window.alert()

console.log('\n')

function hello()
{
    return this;
}
console.log(hello()); // حترجعلي وندو لأنو هون الذيس كمان بتنتمي للوندو, الفنكشن ليس اوبجيكت أما الوندو ف هو اوبجيكت
console.log(hello() == window); 

console.log('\n')

// z = 10;
// console.log(z)
//المفروض يعطيني إيرور لأني مو حاط ليت قبل ال زيد 
// لكن بوضع الستريكت مود حيعطيني خطأ , الستريكتمود لازم يكون براس الصفحة حتى يتفعل

function calc(){
    return this;
}
console.log(calc())//حيعطيني أن ديفايند بسبب وجود الستريكت مود, لو ما كان الستريكت مود موجود كان حيعطيني الوندوو


























