let orderN=new Number(localStorage.getItem("orderN"));
let ar=JSON.parse(localStorage.getItem("ar01"))
let priceArr=JSON.parse(localStorage.getItem("price"))
let customerID="";
let orderID="";
console.log(orderN)



if(orderN<10){
    orderID="B000"+orderN;
    customerID="C000"+orderN;
}
else if(orderN<100){
    orderID="B00"+orderN;
    customerID="C00"+orderN;
}
else if(orderN<1000){
    orderID="B0"+orderN;
    customerID="C0"+orderN;
}
else{
    orderID="B"+orderN;
    customerID="C"+orderN;
}
document.getElementById("orderID").textContent=orderID;

let value="";
let price=0;

for(let i=0; i<priceArr.length; i++){
    price+=new Number(priceArr[i]);
}

for(let i=0; i<ar.length; i++){
    value+=ar[i]+",\n\t\t\t   "
}
let Cname=localStorage.getItem("Cname");
let Cpno=localStorage.getItem("Cpno");
document.getElementById("x").classList.add("hide")
document.getElementById("cd").onclick=()=>{
    document.getElementById("x").classList.remove("hide")
    document.getElementById("aboutO").classList.remove("hide")
    document.getElementById("aboutO").innerHTML=`<pre>
    Customer ID           : ${customerID}<br>
    Customer Name         : ${Cname} <br>
    Customer Phone Number : ${Cpno}<br>                                           
    </pre>`
}
document.getElementById("x").onclick=()=>{
    document.getElementById("x").classList.add("hide")
    document.getElementById("aboutO").classList.add("hide")
}

document.getElementById("take").onclick=()=>{
    let items="";
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.addImage("../img/logo.jpg", 'JPG', 15, 10, 30, 25);
    doc.text("MOS Burgers", 15, 45);
    doc.text("Mos Burger , Horana",150,12);
    doc.text("0778739210",150,20);
    doc.text("MOS@gmail.com",150,28);
    doc.text("www.MosBurgers.com",150,44);
    doc.line(10, 50, 200, 50);
    doc.setTextColor(255, 0, 0); 
    doc.text("Bill issued for :",15,60);
    doc.text("Customer Name : "+Cname ,30,80);
    doc.text("Customer Phone Number : "+Cpno ,30,95);
    doc.text("Order ID : "+orderID ,30,110);
    ar.forEach(element => {
        items+=element+",\n\t\t     "
    });
    doc.text("Total Price : "+price ,30,125);
    doc.text("Your Items : "+items ,30,140);
    doc.setFont("helvetica", "italic","bold"); // Set font to Courier Bold
    doc.setFontSize(25);
    doc.text("Thanks for Coming "+Cname ,60,200);
    doc.save("example.pdf");

    localStorage.setItem()
}

document.getElementById("Orderitems").innerHTML=value;
document.getElementById("total").textContent="Rs."+price;

let arOrID=[];
let arItems=[];
let arPrice=[];
console.log(orderID)
console.log(value)
let countOr=new Number(localStorage.getItem("countOr"));
console.log(countOr)
if(countOr<orderN ){
    if(countOr==0){
        console.log("h")
        arOrID.push(orderID);
        arItems.push(value);
        arPrice.push(price);
        console.log(arPrice)
        console.log(arItems)
        localStorage.setItem("orderIdAr",JSON.stringify(arOrID));
        localStorage.setItem("orderItemsAr",JSON.stringify(arItems));
        localStorage.setItem("orderPriceAr",JSON.stringify(arPrice));

        localStorage.removeItem("countOr")
        ++countOr
        localStorage.setItem("countOr",countOr+"");
        console.log(countOr)
     
    }
    else{
        console.log("N")
        console.log(orderID)
        let arOrID01=JSON.parse(localStorage.getItem("orderIdAr"));
        let arItems01=JSON.parse(localStorage.getItem("orderItemsAr"));
        let arPrice01=JSON.parse(localStorage.getItem("orderPriceAr"));
        console.log(arOrID01)
        console.log(arItems01)
        console.log(arPrice01)
        arOrID01.push(orderID);
        arItems01.push(value);
        arPrice01.push(price);

        localStorage.removeItem("orderIdAr");
        localStorage.removeItem("orderItemsAr");
        localStorage.removeItem("orderPriceAr");

        localStorage.setItem("orderIdAr",JSON.stringify(arOrID01));
        localStorage.setItem("orderItemsAr",JSON.stringify(arItems01));
        localStorage.setItem("orderPriceAr",JSON.stringify(arPrice01));
        ++countOr
        localStorage.removeItem("countOr")
        localStorage.setItem("countOr",countOr);
    }

}




