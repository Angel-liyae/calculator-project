function add() {

    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);

    let Answer = num1 + num2;

    document.getElementById("resultId").value = Answer;

}

function sub() {
    let num3 = parseInt(document.getElementById("number1").value);
    let num4 = parseInt(document.getElementById("number2").value);

    let Answer1 = num3 - num4;

    document.getElementById("resultId").value = Answer1;
}

function mul() {
    let num5 = parseInt(document.getElementById("number1").value);
    let num6 = parseInt(document.getElementById("number2").value);

    let Answer2 = num5 * num6;
    document.getElementById("resultId").value = Answer2
}

function div() {
    let num7 = parseInt(document.getElementById("number1").value);
    let num8 = parseInt(document.getElementById("number2").value);

    let Answer3 = num7 / num8;
    document.getElementById("resultId").value = Answer3;
}
