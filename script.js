
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#btn");
let ngbtn = document.querySelector("#ng");
let container = document.querySelector(".container");
let win = document.querySelector("#win");

let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkwinner();
    });
});

const showWinner = (winner) => {
    win.innerText = `Congratulations! Winner is ${winner}`;
    container.classList.remove("hide");

    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const checkwinner = () => {
    for (let patterns of winpatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (
            pos1val !== "" &&
            pos2val !== "" &&
            pos3val !== ""
        ) {
            if (
                pos1val === pos2val &&
                pos2val === pos3val
            ) {
                console.log("Winner:", pos1val);
                showWinner(pos1val);
                return;
            }
        }
    }
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const resetGame = () => {
    turnO = true;
    enableBoxes();
    container.classList.add("hide");
};

resetbtn.addEventListener("click", resetGame);

ngbtn.addEventListener("click", resetGame);
