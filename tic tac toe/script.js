console.log("JS file loaded!");

let boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector(".newbtn");
let resetbtn=document.querySelector(".restart");

const winningsets = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6], 
];


let turnO = true;
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {

    if (turnO) {
      box.innerText = "O";
      turnO = false;
    }
    else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = CheckWinner();

    if (count == 9 && !isWinner) {
      gamedraw();
    }

  });
});


const resetGame=()=>{
turnO=true;
count=0;
enableBoxes();
msgContainer.classList.add("hide");

boxes.forEach((box) => {
    box.classList.remove("win-box");
  });

};


const gamedraw=()=>{
  msg.innerText="game was a draw";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true;
  }
};
const enableBoxes=()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText="";
  }
}


let CheckWinner = () => {
  for (const position of winningsets) {
    let [a, b, c] = position;
    let pos0val = boxes[a].innerText;
    let pos1val = boxes[b].innerText;
    let pos2val = boxes[c].innerText;
    if (pos0val !== "" && pos0val === pos1val && pos1val === pos2val) {
      console.log("winner");
      showwinner(pos0val, [a, b, c]);  // Pass winning indices
      return true;  // Important: return true to avoid draw on win
    }
  }
  return false;
};

// let CheckWinner = () => {
//   for (const position of winningsets) {
//     let pos0val = boxes[position[0]].innerText;
//     let pos1val = boxes[position[1]].innerText;
//     let pos2val = boxes[position[2]].innerText;
//     if (pos0val != "" && pos1val != "" && pos2val != "") {
//       if (pos0val === pos1val && pos1val === pos2val) {
//         console.log("winner");
//         showwinner(pos1val);
//       }
//     }

//   }
// };

const showwinner=(winner,winPattern)=>{
msg.innerText=`🎉 Congratulations Player ${winner} 🎉`;

msgContainer.classList.remove("hide");

winPattern.forEach((index) => {
    boxes[index].classList.add("win-box");
  });

 disableBoxes();
};


newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);