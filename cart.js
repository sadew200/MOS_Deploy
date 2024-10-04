let count=new Number(localStorage.getItem('count'));



let card=JSON.parse(localStorage.getItem('ar'));
let card01;
console.log(card)
console.log(count)

for(let i=0; i<card.length; i++){
  if(count!=0 && count%4==0){
    card01+=`</tr>`
  }
  if(count%4==0 ){
    card01+=`<tr>`
    count+=1;
    console.log(count)
    localStorage.removeItem("count")
    localStorage.setItem("count",count)

    card01+=card[i];
}
else{
  card01+=card[i];
  count+=1;
  console.log(count)
  localStorage.removeItem("count")
  localStorage.setItem("count",count)
}
}

let c=0;
document.getElementById("submit").onclick=()=>{
  c++;
  window.alert("you sumbit the from")
}

let inputV=document.getElementsByClassName("fromInput")
document.getElementById("take").onclick=()=>{
  let count=0;
  let orderN =new Number(localStorage.getItem("orderN"));
  orderN++;
  localStorage.setItem("orderN",orderN);
  for(let i=0; i<inputV.length; i++){
    if(inputV[i].value.trim().length>2){
      count++;
    }
  }
  if(c==0){
    window.alert("Please Submit the Form")
  }
  else if(count==4){
    localStorage.setItem("Cname",document.getElementById("Cname0").value);
    localStorage.setItem("Cpno",document.getElementById("Cpno0").value);

    window.location.assign("order.html")
  }
  else{
    window.alert("Please Fill the Form")
  }
 

}




// Display the received data
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('items').innerHTML = card01;


});