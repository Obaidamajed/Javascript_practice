// *** Cards مشروع ***

let names = ['ahmed','ali','gamal','obaida'];
let ages = ['18 years old','17 years old','22 years old','20 years old'];
let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';

function element(name, ages)
{
    //elements
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');


//content
let head = document.createTextNode(name);
let ageContent = document.createTextNode(ages);
img.src = "a.jpg";
title.appendChild(head);
age.appendChild(ageContent);

//style
card.style.width = '300px';
card.style.background = '#444';
card.style.color = '#fff';
card.style.padding = '10px';
card.style.margin = '10px';
card.style.display = 'inline-block';






img.style.width = '100%'// حجم الصورة 100% بالنسبة للعنصر اللي هي فيه واللي هو الكارد واللي عرضو 200بكسل


card.appendChild(title);
card.appendChild(age);
card.appendChild(img);

container.appendChild(card);

}
for(let i = 0; i < 4 ; i++)
{
    element(names[i], ages[i])
}



















