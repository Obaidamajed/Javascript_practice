// *** Dom css style ***

let container = document.getElementById("container");

container.innerHTML = "hello world"

// element.style.property = value
// 1-
container.style.backgroundColor = "#444";
container.style.color = "#fa0";
container.style.padding = "10px";
container.style.borderLeft = "5px solid #fa0";
// هاي الطريقة الاولى للتعديل على العناصر من خلال الجافاسكريبت
// 2-
// element.style.cssText = وبتكتب بداخلو اللي بدك اياه بالسي اس اس
// container.style.cssText = `
// background:#444;
// color:white;
// ` // لكن هون حيحذفلك كل التنسيقات اللي عملتها فوق

// عندي كمان طريقة للتعديل على العناصر وتنسيقهم 
// **** remove ****
container.style.removeProperty("color");//هيك خاصية اللون اللي ضفتها على العنصر انحذفت
container.style.removeProperty("background");//لو كتبت باكقراوند كولور الخاضية ما رح تنمسح

// 3-
container.style.setProperty("color", "red", "important");//بعدل على البروبرتي


//  هيك اتعلمنا 3 طرق لتنسيق العناصر واتعلمنا كيف نحذفهم 


// console.log(container)































