// function to get total
// function to create product
// save at local storage
// clear to inputs after press on click 
// read
// count 
// delete
// update
// search
// clean data

// Get inputs of inputs class
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

let mode = "create"

let tmp = ""



// function to get total
function getTotal(){
if (price.value != ""){
    let result = (+price.value + +taxes.value + +ads.value)
     - +discount.value;
    total.innerHTML = result;
    total.style.background = "#040"
}
else{
    total.innerHTML = "";
    total.style.background = "#a00d02";
}
}

// function to create product
// اسهل مكان تحفظ فيه الداتا هو الأرراي
if (localStorage.product != null){
    dataPro = JSON.parse(localStorage.product);
}
else{
    dataPro = [];
}
// let dataPro = [];
submit.onclick = function(){
    let newPro = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase()
    }
    if ( title.value != ""
    && price.value !=""
    && category.value !=""
    && newPro.count < 100 ){ // هيك ما بنشأ إشي جديد إلا اذا الفاليو تبع التايتل مو فاضي
        if(mode === "create"){
         if (newPro.count > 1){
        for(let i = 0; i < newPro.count; i++){
            dataPro.push(newPro)
        }
    } else {
        dataPro.push(newPro)
    }
    }else{
        dataPro [    tmp    ] = newPro;
        mode = "create";
        submit.innerHTML = "create";
        count.style.display = "block";
    }
    clearData()
    }
    
    localStorage.setItem("product",  JSON.stringify(dataPro))
    
    showData()
}

// localStorage.clear()
// clear to inputs after press on click 
function clearData(){
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    count.value = "";
    category.value = "";
}

//read

function showData(){

    getTotal()
let table = ""
for(let i = 0; i < dataPro.length; i++){
    table += `
    <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData( ${i} )" id="delete">delete</button></td>
    </tr>
    `
    
}

document.getElementById("tbody").innerHTML = table;
let btnDelete = document.getElementById("deleteAll");
if(dataPro.length > 0){
    btnDelete.innerHTML = `
    <button onclick="deleteAll()">delete All (${dataPro.length})</delete>
    `
}else{
    btnDelete.innerHTML = "";
}


}
showData()//عشان يضل يشتغل على طول وما يرتبط فقط بكبسة الكريايت

// delete

function deleteData(i)
{
dataPro.splice(i,1); // هون مسح البيانات من الأرراي
localStorage.product = JSON.stringify(dataPro); // هون بمسح البيانات من اللوكال ستورادج
showData() // هون لحتى يرجع يعرضلي البيانات بعد ما عملنا عملية المسح

}

function deleteAll(){
    localStorage.clear()
    dataPro.splice(0) // بحذف من الإندكس صفر لحتى النهاية
    showData()
}


//update 
function updateData(i){
title.value = dataPro[i].title;
price.value = dataPro[i].price;
taxes.value = dataPro[i].taxes;
ads.value = dataPro[i].ads;
discount.value = dataPro[i].discount;
getTotal()
count.style.display = "none";

category.value = dataPro[i].category;
submit.innerHTML = "update";
mode = "update";
tmp = i;
scroll({
    top:0,
    behavior:'smooth'
})
}

//search
let searchMode = "title";

function getSearchMode (id){
    let search = document.getElementById("search")
if(id == "searchTitle") {
    searchMode = "title";
}else{
    searchMode = "category";
}
search.placeholder = "Search By " + searchMode;
search.focus()
search.value = "";
showData()
}

function searchData (value){

    let table = ''

if(searchMode == "title"){

for(let i = 0; i < dataPro.length; i++){

    if(dataPro[i].title.includes(value.toLowerCase())){ //.includes(value) means is it contain the value of search input (gives true or false)
        

        table += `
        <tr>
                <td>${i}</td>
                <td>${dataPro[i].title}</td>
                <td>${dataPro[i].price}</td>
                <td>${dataPro[i].taxes}</td>
                <td>${dataPro[i].ads}</td>
                <td>${dataPro[i].discount}</td>
                <td>${dataPro[i].total}</td>
                <td>${dataPro[i].category}</td>
                <td><button onclick="updateData(${i})" id="update">update</button></td>
                <td><button onclick="deleteData( ${i} )" id="delete">delete</button></td>
        </tr>
        `
    }
}
}

else{
    for(let i = 0; i < dataPro.length; i++){

        if(dataPro[i].category.includes(value.toLowerCase())){ //.includes(value) means is it contain the value of search input (gives true or false)
            
            table += `
            <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData( ${i} )" id="delete">delete</button></td>
            </tr>
            `
        }
    }
}

document.getElementById("tbody").innerHTML = table;

}


//clean data

































