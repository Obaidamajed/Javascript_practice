// *** nested objct ***

let user = {
    // property
    //method
    // كل كائن بكون الو بروبرتي وميثود
    firstName: "obaida",
    lastName: "majed",
    email: "obaida@gmail.com",
    age: 25,
    skills: ["html", "css", "js","python","php"],
    active: false,
    phoneNumber:{ //nested object
        first: "0979696900",
        second: "9782392030",
    },
    address: { //nested object
        jordan:"aqaba",
        uae:"abu dhabi"
    },
    isActive:function(){
        if(user.active === true){
            return "hello user";
        }
        else {
            return "sorry you are not active"
        }
    },
    getAge:function(){
        if(user.age >= 18)
        {
            return "available";
        }
        else
        {
            return "unAvailable";
        }
    },


};
console.log(user)
console.log(user.firstName)
console.log(user["firstName"])//ممكن اوصل للفيرست نايم بطريقتين
console.log(user.phoneNumber)//وصلت لأوبجيكت بداخل الأوبجيكت
console.log(user.phoneNumber.first)//وصلت لبروبرتي لأوبجيكت بداخل الأوبجيكت الرئيسي
console.log(user["phoneNumber"]['first'])// طريقة اخرى
console.log(user.isActive())
console.log(user['getAge']())
console.log(user)
console.log(user)



