let arOrID=JSON.parse(localStorage.getItem("orderIdAr"));
let arItems=JSON.parse(localStorage.getItem("orderItemsAr"));
let arPrice=JSON.parse(localStorage.getItem("orderPriceAr"));


document.getElementById("MG").onclick=()=>{
    
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.addImage("../img/logo.jpg", 'JPG', 15, 10, 30, 25);
        doc.text("MOS Burgers", 15, 45);
        doc.text("Mos Burger , Horana",150,12);
        doc.text("0778739210",150,20);
        doc.text("MOS@gmail.com",150,28);
        doc.text("www.MosBurgers.com",150,44);
        doc.line(10, 50, 200, 50);
        doc.setTextColor(255, 0, 0); // RGB for red
        doc.setFont("helvetica", "italic","bold"); // Set font to Courier Bold
        doc.setFontSize(25);
        doc.text("Monthly Report",60,70);

        const data=[]

        for(let i=0; i<arOrID.length; i++){
            data.push(["C"+arOrID[i].substring(1),arOrID[i],arItems[i],arPrice[i]])
        }

        const headers = ["Customer ID", "Order ID", "Items","price"];


// Add table to PDF
doc.autoTable({
    head: [headers],
    body: data,
    startY: 80,
    margin: { top: 10 },
    theme: 'grid' // You can use 'striped' or 'plain' as well
});

       
        doc.save("example.pdf");
 
    }

    document.getElementById("MG").onclick=()=>{
    
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.addImage("../img/logo.jpg", 'JPG', 15, 10, 30, 25);
        doc.text("MOS Burgers", 15, 45);
        doc.text("Mos Burger , Horana",150,12);
        doc.text("0778739210",150,20);
        doc.text("MOS@gmail.com",150,28);
        doc.text("www.MosBurgers.com",150,44);
        doc.line(10, 50, 200, 50);
        doc.setTextColor(255, 0, 0); // RGB for red
        doc.setFont("helvetica", "italic","bold"); // Set font to Courier Bold
        doc.setFontSize(25);
        doc.text("Monthly Report",60,70);

        const data=[]

        for(let i=0; i<arOrID.length; i++){
            data.push(["C"+arOrID[i].substring(1),arOrID[i],arItems[i],arPrice[i]])
        }

        const headers = ["Customer ID", "Order ID", "Items","price"];


// Add table to PDF
doc.autoTable({
    head: [headers],
    body: data,
    startY: 80,
    margin: { top: 10 },
    theme: 'grid' // You can use 'striped' or 'plain' as well
});

       
        doc.save("example.pdf");
 
    }


//annual report

document.getElementById("AG").onclick=()=>{
    
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
    doc.setFont("helvetica", "italic","bold");
    doc.setFontSize(25);
    doc.text("Annual Report",60,70);

    const data=[]

    for(let i=0; i<arOrID.length; i++){
        data.push(["C"+arOrID[i].substring(1),arOrID[i],arItems[i],arPrice[i]])
    }

    const headers = ["Customer ID", "Order ID", "Items","price"];


// Add table to PDF
doc.autoTable({
head: [headers],
body: data,
startY: 80,
margin: { top: 10 },
theme: 'grid' // You can use 'striped' or 'plain' as well
});

   
    doc.save("example.pdf");

}

document.getElementById("MG").onclick=()=>{

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.addImage("../img/logo.jpg", 'JPG', 15, 10, 30, 25);
    doc.text("MOS Burgers", 15, 45);
    doc.text("Mos Burger , Horana",150,12);
    doc.text("0778739210",150,20);
    doc.text("MOS@gmail.com",150,28);
    doc.text("www.MosBurgers.com",150,44);
    doc.line(10, 50, 200, 50);
    doc.setTextColor(255, 0, 0); // RGB for red
    doc.setFont("helvetica", "italic","bold"); // Set font to Courier Bold
    doc.setFontSize(25);
    doc.text("Monthly Report",60,70);

    const data=[]

    for(let i=0; i<arOrID.length; i++){
        data.push(["C"+arOrID[i].substring(1),arOrID[i],arItems[i],arPrice[i]])
    }

    const headers = ["Customer ID", "Order ID", "Items","price"];


// Add table to PDF
doc.autoTable({
head: [headers],
body: data,
startY: 80,
margin: { top: 10 },
theme: 'grid' // You can use 'striped' or 'plain' as well
});

   
    doc.save("example.pdf");

}

//highest rate of customer

document.getElementById("x").classList.add("hide")
let maxPrice=new Number(arPrice[0]);
let index=0;
document.getElementById("HC").onclick=()=>{

    for(let i=1; i<arPrice.length; i++){
        if(maxPrice<new Number(arPrice[i])){
            index=i;
        }
    }

    document.getElementById("x").classList.remove("hide")
    document.getElementById("aboutO").classList.remove("hide")
    document.getElementById("aboutO").innerHTML=`<pre>
    Customer ID           : ${"C"+arOrID[index].substring(1)}<br>
    Order ID              : ${arOrID[index]} <br>
    Order Items           : ${arItems[index]}<br>   
    Total Price           :  ${arPrice[index]}<br>                                    
    </pre>`


}

document.getElementById("x").onclick=()=>{
    document.getElementById("x").classList.add("hide")
    document.getElementById("aboutO").classList.add("hide")
}