(function(){
    const buttons = document.querySelectorAll("button");
    const displayBottom = document.getElementById("display-bottom");
    const displayTop = document.getElementById("display-top");

    const calculator = {
        result: 0,
        action: "",
    }

    for(let button of buttons){
        button.addEventListener("click", (event) => {
            const char = event.currentTarget.textContent;

            if(char === "back"){
                displayBottom.textContent = back(displayBottom.textContent);
            }
            if(char === "C"){
                displayBottom.textContent = "";
                displayTop.textContent = "";
            }
            if(char === "CE"){
                displayBottom.textContent = "";
            }
            if(Number.isNaN(Number(char))){
                displayTop.textContent = `displayBottom.textContent`;
                calculator.result = Number(displayBottom.textContent)
                calculator.action = char
            }
            else {
                displayBottom.textContent += char;
            }
        })
    }
})()