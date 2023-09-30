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

            if(!Number.isNaN(parseInt(char))){
                displayBottom.textContent += char;
            }else{
                switch(char){
                    case "back":
                        displayBottom.textContent = back(displayBottom.textContent);
                        break;
                    case "C":
                        displayBottom.textContent = "";
                        displayTop.textContent = "";
                        calculator.result = 0
                        calculator.action = ""
                        break;
                    case "CE":
                        displayBottom.textContent = "";
                        break;
                    case "=":
                        calculator.result = parseMethod(calculator.action, calculator.result, parseInt(displayBottom.textContent));
                        calculator.action = char;
                        displayTop.textContent = `${calculator.result} ${char}`;
                        displayBottom.textContent = "";
                        break;
                    default:
                        if(calculator.action === "="){
                            displayTop.textContent = displayTop.textContent.slice(0, -1) + char;
                            calculator.action = char;
                        }else{
                            displayTop.textContent = `${displayBottom.textContent} ${char}`;
                            calculator.result = parseInt(displayBottom.textContent)
                            calculator.action = char
                            displayBottom.textContent = "";
                        }
                        break
    
                }
            }
            

        })
    }
})()