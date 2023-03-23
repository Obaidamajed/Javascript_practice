// *** تحويل الارقام بطرق مختلفة ***

console.log( +'4')
console.log( Number('4')) // حولت النص لعدد بطريقة أخرى
console.log(typeof Number('4') + '\n' + '\n') 

console.log( Number('4 obaida')) // انت كاتبلو رقم غير مفهوم لهيك بعطيك نوت ا نومبر
console.log( parseInt('4 obaida')) // ذكية بما يكفي لتقرأ الرقم
console.log( parseInt('ahmed 4 obaida')) // هون ما قدرت تقرا الرقم لأنو ما اجا في البداية
console.log(parseInt('4.5')) // من عيوبها أيضا انها ما بتعرف تتعامل مع الارقام اللي الهم كسور وبترجعلي اياهم عدد صحيح
console.log(parseFloat('4.5'))


// هيك ينكون اتعلمنا 4 طرق لتحويل النصوص لأرقام 