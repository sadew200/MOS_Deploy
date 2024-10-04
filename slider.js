

//submaine
let classNamesSub=document.getElementsByClassName("cartB01")
let classNames01Sub=document.getElementsByClassName("orderB01")

function hideSubmarines(){
    document.getElementById("Mtbl01").classList.add("hide")

}

function displaySubmaines(){
    document.getElementById("Mtbl01").classList.remove("hide")
    for(let i=0; i<classNamesSub.length; i++){
        classNamesSub[i].classList.remove("hide")
    }
    for(let i=0; i<classNames01Sub.length; i++){
        classNames01Sub[i].classList.remove("hide")
    }
}

//fries
let classNamesFri=document.getElementsByClassName("cartB02")
let classNames01Fri=document.getElementsByClassName("orderB02")

function hideFries(){
    document.getElementById("Mtbl02").classList.add("hide")
    for(let i=0; i<classNamesFri.length; i++){
        classNamesFri[i].classList.add("hide")
    }
    for(let i=0; i<classNames01Fri.length; i++){
        classNames01Fri[i].classList.add("hide")
    }
}

function displayFries(){
    document.getElementById("Mtbl02").classList.remove("hide")
    for(let i=0; i<classNamesFri.length; i++){
        classNamesFri[i].classList.remove("hide")
    }
    for(let i=0; i<classNames01Fri.length; i++){
        classNames01Fri[i].classList.remove("hide")
    }
}

//pasta
let classNamesPas=document.getElementsByClassName("cartB03")
let classNames01Pas=document.getElementsByClassName("orderB03")

function hidePasta(){
    document.getElementById("Mtbl03").classList.add("hide")
    for(let i=0; i<classNamesPas.length; i++){
        classNamesPas[i].classList.add("hide")
    }
    for(let i=0; i<classNames01Pas.length; i++){
        classNames01Pas[i].classList.add("hide")
    }
}

function displayPasta(){
    document.getElementById("Mtbl03").classList.remove("hide")
    for(let i=0; i<classNamesPas.length; i++){
        classNamesPas[i].classList.remove("hide")
    }
    for(let i=0; i<classNames01Pas.length; i++){
        classNames01Pas[i].classList.remove("hide")
    }
}

//chicken
let classNamesCik=document.getElementsByClassName("cartB04")
let classNames01Cik=document.getElementsByClassName("orderB04")

function hideChicken(){
    document.getElementById("Mtbl04").classList.add("hide")
    for(let i=0; i<classNamesCik.length; i++){
        classNamesCik[i].classList.add("hide")
    }
    for(let i=0; i<classNames01Cik.length; i++){
        classNames01Cik[i].classList.add("hide")
    }
}

function displayChicken(){
    document.getElementById("Mtbl04").classList.remove("hide")
    for(let i=0; i<classNamesCik.length; i++){
        classNamesCik[i].classList.remove("hide")
    }
    for(let i=0; i<classNames01Pas.length; i++){
        classNames01Cik[i].classList.remove("hide")
    }
}

//beverages
let classNamesBev=document.getElementsByClassName("cartB05")
let classNames01Bev=document.getElementsByClassName("orderB05")

function hideBeverages(){
    document.getElementById("Mtbl05").classList.add("hide")
    for(let i=0; i<classNamesBev.length; i++){
        classNamesBev[i].classList.add("hide")
    }
    for(let i=0; i<classNames01Bev.length; i++){
        classNames01Bev[i].classList.add("hide")
    }
}

function displayBeverages(){
    document.getElementById("Mtbl05").classList.remove("hide")
    for(let i=0; i<classNamesBev.length; i++){
        classNamesBev[i].classList.remove("hide")
    }
    for(let i=0; i<classNames01Bev.length; i++){
        classNames01Bev[i].classList.remove("hide")
    }
}

//burgers
let classNamesBur=document.getElementsByClassName("cartB")
let classNames01Bur=document.getElementsByClassName("orderB")

function hideBurgers(){
    document.getElementById("Mtbl").classList.add("hide")

}


function displayBurgers(){
    document.getElementById("Mtbl").classList.remove("hide")

}

let i=0;
let ImgArray=[]

ImgArray[0]=`offer.jpg`
ImgArray[1]=`offer01.jpg`
ImgArray[2]=`offer02.jpeg`
ImgArray[3]=`offer03.jpg`

function changeIMG(){
    document.imgc.src=ImgArray[i]
    if(i<ImgArray.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeIMG()",3000);
}


window.onload=changeIMG
hideFries()
hideSubmarines();
hidePasta();
hideChicken();
hideBeverages();
displayBurgers();

const ar=document.getElementsByClassName("foodB")
const arImg=document.getElementsByClassName("foodImg")
const foodName=document.getElementsByClassName("foodName")
const price=document.getElementsByClassName("price")

let arr=[];
let arr01=[];
let arr02=[];

L:for(let i=0; i<46; i++){
    document.getElementById("c"+i).addEventListener('click', function() {
       

        if(localStorage.length==0){
            arr.push(`<td> </div>
                <div class="card" style="width: 18rem;">
                    <img src=${arImg[i].src.substring(22)} class="card-img-top" alt="..." style="height: 240px;">
                    <div class="card-body style="height: ;">
                      <h2 class="card-title" style="font-style: oblique; font-weight: 900; color: red; text-decoration: underline;">Burgers</h2>
                      <h5 style="font-weight: 900;"><pre class="card-text">${ar[i].textContent}</pre></h5>
                      <a href="#" class="btn btn-primary">Delete</a>
                      <a href="#" style="background-color : green" class="btn btn-primary">Customise</a>
                    </div>
                  </div></td>`);

             localStorage.setItem("countOr",0);
            arr01.push(foodName[i].textContent);
            arr02.push(price[i].textContent)
            localStorage.setItem("price",JSON.stringify(arr02))
            localStorage.setItem("ar",JSON.stringify(arr));
            localStorage.setItem("ar01",JSON.stringify(arr01));
            localStorage.setItem("count",0);
            localStorage.setItem("orderN","0"); 
            return;
        }

        else{
            let value=JSON.parse(localStorage.getItem("ar"));
            let value01=JSON.parse(localStorage.getItem("ar01"));
            let value02=JSON.parse(localStorage.getItem("price"));
            console.log(value);
            value.push(`<td> </div>
                <div class="card" style="width: 18rem;">
                    <img src=${arImg[i].src.substring(22)} class="card-img-top" alt="..." style="height: 240px;">
                    <div class="card-body style="height: ;">
                      <h2 class="card-title" style="font-style: oblique; font-weight: 900; color: red; text-decoration: underline;">Burgers</h2>
                      <h5 style="font-weight: 900;"><pre class="card-text">${ar[i].textContent}</pre></h5>
                      <a href="#" class="btn btn-primary">Delete</a>
                      <a href="#" style="background-color : green" class="btn btn-primary">Customise</a>
                    </div>
                  </div></td>`);
                  localStorage.removeItem("ar");
                  localStorage.removeItem("price");
                  value01.push(foodName[i].textContent);
                  value02.push(price[i].textContent);
                  localStorage.setItem("price",JSON.stringify(value02));
                  localStorage.setItem("ar01",JSON.stringify(value01));
                  localStorage.setItem("ar",JSON.stringify(value));
            return

        }


    });

}


function burH(){
    document.getElementById("cato").textContent="Burgers";
    document.getElementById("Mtbl01").classList.add("hide");
    document.getElementById("Mtbl02").classList.add("hide");
    document.getElementById("Mtbl03").classList.add("hide");
    document.getElementById("Mtbl04").classList.add("hide");
    document.getElementById("Mtbl05").classList.add("hide");
   document.getElementById("Mtbl").classList.remove("hide");

    
}


function subH(){
    document.getElementById("cato").textContent="Submarines";
    document.getElementById("Mtbl").classList.add("hide");
    document.getElementById("Mtbl02").classList.add("hide");
    document.getElementById("Mtbl03").classList.add("hide");
    document.getElementById("Mtbl04").classList.add("hide");
    document.getElementById("Mtbl05").classList.add("hide");
    document.getElementById("Mtbl01").classList.remove("hide");
   
    
}


function friH(){
    document.getElementById("cato").textContent="Fries";
    document.getElementById("Mtbl01").classList.add("hide");
    document.getElementById("Mtbl").classList.add("hide");
    document.getElementById("Mtbl03").classList.add("hide");
    document.getElementById("Mtbl04").classList.add("hide");
    document.getElementById("Mtbl05").classList.add("hide");
   document.getElementById("Mtbl02").classList.remove("hide");

    
}

function pasH(){
    document.getElementById("cato").textContent="Pasta";
    document.getElementById("Mtbl01").classList.add("hide");
    document.getElementById("Mtbl02").classList.add("hide");
    document.getElementById("Mtbl").classList.add("hide");
    document.getElementById("Mtbl04").classList.add("hide");
    document.getElementById("Mtbl05").classList.add("hide");
   document.getElementById("Mtbl03").classList.remove("hide");

    
}


function cikH(){
    document.getElementById("cato").textContent="Chicken";
    document.getElementById("Mtbl01").classList.add("hide");
    document.getElementById("Mtbl02").classList.add("hide");
    document.getElementById("Mtbl03").classList.add("hide");
    document.getElementById("Mtbl").classList.add("hide");
    document.getElementById("Mtbl05").classList.add("hide");
   document.getElementById("Mtbl04").classList.remove("hide");

}


function bevH(){
    document.getElementById("cato").textContent="Beverages";
    document.getElementById("Mtbl01").classList.add("hide");
    document.getElementById("Mtbl02").classList.add("hide");
    document.getElementById("Mtbl03").classList.add("hide");
    document.getElementById("Mtbl04").classList.add("hide");
    document.getElementById("Mtbl").classList.add("hide");
   document.getElementById("Mtbl05").classList.remove("hide");

    
}


document.getElementById("SEbtn").onclick=function(){
   let input= new Number(document.getElementById("SEinput").value.substring(3))
   if(input<16){
    burH();
   }
   else if(input<25){
    subH();
   }
   else if(input<31){
    friH();
   }
   else if(input<38){
    pasH();
   }
   else if(input<44){
    cikH();
   }
   else if(input<48){
    bevH();
   }
}

document.getElementById("SEinput").addEventListener("input",e=>{
    console.log(e);
    let foodNames=document.getElementsByClassName("foodName")
    let foodId=document.getElementsByClassName("itemId")
    let foodBtn=document.getElementsByClassName("foodTd")
    
    for(let i=0; i<foodNames.length; i++){
        let isVisible=foodNames[i].textContent.toLowerCase().includes(e.target.value.toLowerCase()) || foodId[i].textContent.includes(e.target.value);
        foodBtn[i].classList.toggle("hide",!isVisible);
        console.log(isVisible);
        console.log(foodNames[i].textContent);
        console.log(foodId[i].textContent);
    }
})
    