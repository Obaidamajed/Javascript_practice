let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div")

allLis.forEach(function(ele){ 
ele.onclick = function(){
    //Remove active class from all elements
    allLis.forEach(function(ele){
        ele.classList.remove("active");
    })
    // بعد ما يخلص لف على كل العناصر ويلغي منهم كلاس الآكتيف حيروح عالعنصر الحالي ويضيفلو كلاس الآكتيف
this.classList.add("active");
//Hide all divs
allDivs.forEach(function(ele){
    ele.style.display = "none";
});
//بس أضغط على أي لست حيخفي الديفات
};
});
// بنلاحظ في الفور إيتش إني بخفي البيانات أو بظهرها او بتحكم فيها بشكل عام 
// بمعنى آخر بتم تشويه نفس الأرراي عن طريق الفور إيتشف
// ف بالتالي هاي الحالات اللي يُنصَح استخدام الفور إيتش فيها





































