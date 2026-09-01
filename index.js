let hs=document.getElementById("homescore")
let gs=document.getElementById("guestscore")

let count1=0
let count2=0

function btn1(){ 
    count1+=1
    hs.textContent=count1
    
}
function btn2(){ 
     count1+=2
    hs.textContent=count1 
      
}
function btn3(){
    count1+=3
    hs.textContent=count1
}
function btn4(){ 
    count2+=1
    gs.textContent=count2 
    
}
function btn5(){ 
     count2+=2
    gs.textContent=count2
      
}
function btn6(){
    count2+=3
    gs.textContent=count2
}