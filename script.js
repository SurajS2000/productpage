const URL =
  "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json";
const mainimage = document.querySelector(".mainimg");
const secimag = document.querySelectorAll(".secimag");
const productname = document.getElementById("productname");
const price = document.querySelector(".price");
const perct = document.querySelector(".perct");
const orginalprice = document.querySelector(".orgprice");
const colorsection = document.querySelector(".colorsec");
const sizesection = document.querySelector(".sizsec");
const description = document.querySelector(".description");
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const num =document.querySelector('.num');
let color;
let itemnum=1;
add.addEventListener('click',function(){
  num.innerHTML=++itemnum;
})
minus.addEventListener('click',function(){
  if(itemnum>1){
    num.innerHTML=--itemnum;
  }
},)

function addeventi(button){
  button.addEventListener('click',function(e){
    let img =e.target.attributes.src.nodeValue
    mainimage.src=img
  })
}
function addeventc(button){
  button.addEventListener('click',function(e){
    console.log(e.target)
  })
}
for(i=0;i<4;i++){
  addeventi(secimag[i])
 }

window.addEventListener("load", async () => {
  let response = await fetch(URL);
  let data = await response.json();
  let a = data.product.price;
  let b = data.product.compare_at_price;
  let c = b.replace("$", "") - a.replace("$", "");
  productname.innerText = data.product.title;
  price.innerText = a + ".00";
  orginalprice.innerText = b + ".00";
  perct.innerHTML = Math.round((c / b.replace("$", "")) * 100);
  description.innerHTML = data.product.description;
  let color = data.product.options[0].values;
  colorsection.innerHTML = color.map((data,id) => {
    for (let [key, value] of Object.entries(data)) {
        return`
        <div style="border-color: ${value};" id="${key}" class="outer">
        <div style="background-color: ${value};" class="inner"><i class="fa-solid fa-check"></i></div>
      </div>
      `
    }
  })
  .join("");
  let size = data.product.options[1].values;
  sizesection.innerHTML = size.map((data)=>{
    return`
    <div class='sizdiv'>
    <input name='size' type='radio'/>
    <label>${data}</label>
    </div>`
  })
  .join("")
  const coldiv= document.querySelectorAll(".outer")
    for(i=0;i<4;i++){
      addeventc(coldiv[i])
    }
});
