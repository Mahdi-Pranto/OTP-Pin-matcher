document.getElementById("generate-btn").addEventListener("click", function randomNumGeneretor() {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    randomNumber.toString();
    document.getElementById("randomNumShow").value = randomNumber;
})



let display = document.getElementById('numberShow');

let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "C":
                display.value = "";
                break;
            case "<":
                display.value = display.value.slice(0, -1);
                break;
            default:
                display.value += e.target.innerText;

        }



    });
});

let randomNumberGlobal = document.getElementById("randomNumShow");
document.getElementById("submit").addEventListener("click", function () {

    if (display.value == randomNumberGlobal.value) {
        document.getElementById("rightPin").style.display = "block";
    }
    else {
        document.getElementById("wrongPin").style.display = "block";
    }
    // console.log(display.value);
    // console.log(randomNumberGlobal.value);

})
