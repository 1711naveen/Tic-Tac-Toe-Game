let turn = "X";

const changeTurn = () => {
    if (turn === "X")
        turn = "O";
    else
        turn = "X"

        return turn;
}

let boxes = document.getElementsByClassName('box');
console.log(boxes)

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
        }
    })
})
