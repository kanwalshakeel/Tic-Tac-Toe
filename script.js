
const boxes=document.querySelectorAll(".box")
const winner=document.querySelector(".winner")
const win=document.querySelector("#win")
const container=document.querySelector(".container")
const reset=document.querySelector(".reset")
const newGame=document.querySelector(".new-game")
winner.classList.add("hide")
let turn0=true;
let count=0;
for (let box of boxes) {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false; 
        } else {
            box.innerText = "X";
            turn0 = true;  
        }
          box.disabled=true
          count++;
          let check=checkwinner();
          drawMatch(check);
    });
  
}

const drawMatch=(check)=>{
    if(count===9 && !(check)){
        win.innerText=`Match is Draw`
        container.classList.add("hide")
         winner.classList.remove("hide")
         reset.classList.add("hide")
    }

}

const winningPattern=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

const checkwinner=()=>{
    let iswon=false;
    winningPattern.forEach((w)=>{
      let val1=boxes[w[0]].innerText
      let val2=boxes[w[1]].innerText
      let val3=boxes[w[2]].innerText
      if(val1 !="" && val2 !="" && val3 !=""){
        if(val1===val2 && val2===val3){
         console.log("winner")
         win.innerText=`Congratulation,Winner is ${val1}`
         disableAll()
         container.classList.add("hide")
         reset.classList.add("hide")
         winner.classList.remove("hide")
         iswon=true
       }
   }

 })
 return iswon
}
const disableAll=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}

const resetAll=()=>{
    turn0=true
    for(let box of boxes){
        box.innerText=""
        box.disabled=false
        count=0;
    }
}
newGame.addEventListener("click",()=>{
       container.classList.remove("hide")
         reset.classList.remove("hide")
         winner.classList.add("hide")
         resetAll()
})
reset.addEventListener("click",resetAll)
