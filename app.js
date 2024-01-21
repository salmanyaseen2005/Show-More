var text =document.getElementById("para").innerText
var btn = document.querySelector("button")
var check = 0;



console.log(text.length)

if(text.length >100){
    Showmore(); 
} 

function Showmore(){
    var copy = text.slice(0,100)
    var show =document.getElementById("para").innerText=copy
    console.log (show)
    console.log (show.length)
    var btn = (document.getElementById("btn").style.display ="block")
    

}

function showless(){
    var fulltext=document.getElementById("para").innerText=text
    btn.innerHTML = "Show Less"
}

function more(){


if(check){
    btn.innerHTML ="show More"
    Showmore();
    check ++

}
else{   
    btn.innerHTML = "Show Less"
    showless()
    check --
}
        
    
}