// *** splice and slice array ***


//splice (start,count, add, add) بتشوه المصفوفة نفسها
let names = ["ahmed", "ali", "mazen", "gamal"]
names.splice(0,1);//بحذف من الاندكس رقم صفر عنصر واحد
names.splice(1,1);// بحذف من الاندكس رقم 1 عنصر واحد
names.splice(0,1,"ahmed",'mona')// حيحذف عنصر واحد من الاندكس صفر ومن الاندكس صفر حيضيف احمد ومنى على التوالي
names.splice(1,0,"aber")//حيضيف عبير من الاندكس رقم 1 وطبعا ما رح يحذف اشي لأني معطي رقم 0 بخصوص حذف العناصر


console.log(names)


//slice(start, end) ما بأثر على المصفوفة الأصلية
let obaida = ["a", "b", "c", "d"]
obaida.slice(0, 2)
console.log(obaida)
console.log(obaida.slice(0, 2))
console.log(obaida.slice(-3))
console.log(obaida.slice(-3,-1))



