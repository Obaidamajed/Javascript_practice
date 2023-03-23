// *** create elements by javascript ***

// document.body.innerHTML = 
// `
// <h1>hello world</h1>
// <h2>hello world</h2>
// <h3>hello world</h3>

// `
//1-إنشاء العنصر
let container = document.createElement('div');
let head = document.createElement("h1")
let img = document.createElement("img") 

//2-إضافة المحتوى 
let content = document.createTextNode("hello world"); // أضفت كلمة وحفظتها بمتغير
head.appendChild(content);//head=parent,content=child
img.src ="a.jpg";//أضفت الصورة
img.style.width = "300px"
//3-إضافة العنصر في المكان المُراد
container.appendChild(img);
container.appendChild(head);
 // هيك الديف صار بداخلو ال أتش1 وال صورة
document.body.appendChild(container)// ضفت في البودي الكونتاينر
console.log(container)
// console.log(head)
container.style.background ="#666"
container.style.color ="#fff"
container.style.padding ="10px"
container.style.textAlign ="center"
// لحد الان انا أنشأت ديف وعنوان لكنهم مش موجودين بأي مكان, ما حطيتهم بأي مكان لحد الان





















