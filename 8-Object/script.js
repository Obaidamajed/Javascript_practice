// *** what is object in javasript ***


let title = "bmw"; 
let price = 500000;
let color = "white";
let model = 2020; // هدول بروبرتيز

let car = {
    title: "bmw", // الفاليو اللي هي هون عندي بي أم دبليو بقدر أحط فيها اي نوع من البيانات سواء نصوص او ارقام او أرراي حتى
    price:500000,
    color: ["white","red","black"],
    model:2020,
    //كمان بقدر أضيف فنكشن
    hello:function()
    { 
        return "obaida";
    }
};//هيك انا عملت أوبجيكت
// حط ببالك انو الاوبجيكت بتقدر تحط بداخلو بروبرتيز وميثودز
console.log(typeof car);// بدي اتأكد من نوع الكار
console.log(car);// هيك بعرض الاوبجيكت
console.log(car.title);//لما أكتب دوت يعني نقطة بعد الكار بعرضلي كل إشي موجود بداخل أوبجيكت الكار وانا بختار اللي بدي أعرضو
console.log(car.color);
console.log(car.model);
console.log(car.hello);// هيك بتنادي عليها ك بروبرتي بالتالي حيرعض كل الفنكشن
console.log(car.hello());//هيك بنادي عليها ك ميثود






