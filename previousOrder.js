let orderArID=JSON.parse(localStorage.getItem("orderIdAr"));
let orderArItems=JSON.parse(localStorage.getItem("orderItemsAr"));
let orderArPrice=JSON.parse(localStorage.getItem("orderPriceAr"));

console.log(orderArID);
console.log(orderArItems);
console.log(orderArPrice);

for(let i=0; i<orderArID.length; i++){
    document.getElementById("contain").innerHTML+=
    `<pre id="c">
    Order ID    : ${orderArID[i]}
    Order Items : ${orderArItems[i]}
    Order Price : ${orderArPrice[i]}
    </pre><hr id="line">
    `
}