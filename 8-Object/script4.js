// *** object create ***

let user1 = {
    name:"obaida",

    getName:function(){
        return `hello ${this.name}`; // عملتلي مشكلة لما كان بدل ال ذيس يوزر1 والمشكلة شرحها تحت 
    }
}


let user2 = Object.create(user1); // هيك كأني نسخت او اخذت كل المعلومات اللي بالاوبجيكت يوزر1
console.log(user2.name)
console.log(user2.getName())
console.log('\n')
// هيك كأني نسخت أوبجيكت يوزر1 في اوبجيكت يوزر2
user2.name ="ali" // غيرت الاسم من عبيدة ل علي
console.log(user2.name) // هون حيطبعلي علي
console.log(user2.getName()) 
console.log(user1.getName()) 
// هون حيطبعلي هلو عبيده لأني انا غيرت الاسم بيوزر2 وليس بيوزر1 والفنكشن قيتنايم بطبع اسم اليوزر1 , لو غيرت الاسم بيوزر1 حيطبعلي هلو علي 
// لكن انا كل الدرس بتمحور حول النقطة هاي, بإمكاني أحل المشكلة باستخدام ذيس.نايم بدل يوزر1.نايم .
// بحيث لما أنادي على اليوزر2.قيتنايم يروح يطبعلي هلو + النايم اللي بيوزر2 
// ولما أنادي على اليوزر1.قيتنايم يروح يطبعلي هلو + النايم اللي بيوزر1
// هون كل فكرة الذيس إنها بتكون راجعة على الأوبجيكت المرتبطة فيه
// أما لو ما استخدمت الذيس حيظهر عندي مشكلة زي ما حدث معي بالحالة هاي
user2.age = 25;
console.log(user2.age)

// ممكن أضيف بروبرتيز بداخل اليوزر2 بطريقة ثانية :
// let user2 = Object.create(user1, {
//     age:{value:20}
// });
// console.log(user2.age)


let x = {
    position: "sssss",
    getPosition: function(){
        return ` helloooooo ${this.position}`;// هون ال ذيس عائدة على اوبجيكت إكس
    }
}
let y = Object.create(x); //كأنك نسخت كل اشي ب اوبجت إكس وحطيتو ب أوبجيكت واي
====> y = {
            position: "sssss",
            getPosition: function(){
            return ` helloooooo ${this.position}`; // وهون ال ذيس عائدة على اوبجيكت واي
        }

}






















