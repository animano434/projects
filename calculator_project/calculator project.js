
const a = document.querySelector("#no1");
const b = document.querySelector("#no2");
const op = document.querySelector("#op");
const resbtn = document.querySelector("#btn");
const box= document.querySelector(".box");



function correctop(a, b, op) {
    let numA = Number(a);
    let numB = Number(b);

    let result;

    if (op == "+") { result = numA + numB; }
    else if (op == "-") { result = numA - numB; }
    else if (op == "*") { result = numA * numB; }
    else if (op == "/") { result = numA / numB; }
    else if (op == "**") { result = numA ** numB; }
    else { result = "Invalid operation"; }
    return result;
}



resbtn.addEventListener("click", function () {
    const valA = a.value;
    const valB = b.value;
    const valOp = op.value;
    const result = correctop(valA, valB, valOp);
    // alert("Result: " + result);
    box.innerText="Result: " + result;
    box.classList.remove("hide");
});
// result=correctop(a,b,op);
//     console.log(`${result}`);
// resbtn.addEventListener("click",correctop(a.value,b.value,op.value) );