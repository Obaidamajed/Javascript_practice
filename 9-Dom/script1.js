// *** attribute اضافة وتعديل خصائص العنصر ***

let img = document.getElementById("img");

img.src = "b.jpg"
img.className = "image"
img.title = "test" // ضفت اتربيوت بداخل العنصر
console.log(img)
console.log( img.alt )
console.log( img.src )
console.log( img.id )
console.log( img.className )
console.log( img.title )
console.log( img.hasAttributes() )// بتعرف من خلالها اذا العنصر فيه اتربيوت او لا
console.log( img.hasAttribute("alt") )//بتاكد من اتربيوت معين اذا موجود او لا
console.log( img.hasAttribute("power") )
console.log( img.attributes ) //بعرض كل الاتربيوت الي في العنصر
console.log( img.attributes[1] ) //بوصلني للاتربيوت الثاني
img.setAttribute("alt", "ahmed") // غيرت اسم الألت لأحمد
img.setAttribute("title", "ahmed")
//السيت اتربيوت بتعدلك عنصر او اتربيوت موجود اما اذا ما كان موجود بتضيفو
console.log(img)
console.log(img.alt)
console.log(img.title)

img.removeAttribute("alt")
img.removeAttribute("class")
img.removeAttribute("src")
img.removeAttribute("id")
console.log(img)

























