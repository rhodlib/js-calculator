(function(){
    const buttons = document.querySelectorAll("button");
    const body = document.querySelector("body");
    const displayBottom = document.getElementById("display-bottom");
    const displayTop = document.getElementById("display-top");

    const calculator = {
        result: 0,
        action: "",
    }

    body.addEventListener("keydown", (event) => {
        if(!Number.isNaN(parseInt(event.key)) || event.key === "." && !displayBottom.textContent.includes(".")){
            displayBottom.textContent += event.key
        }
    })

    for(let button of buttons){
        button.addEventListener("click", (event) => {
            const char = event.currentTarget.textContent;

            if(!Number.isNaN(parseInt(char))){
                if(!displayBottom.textContent.includes(0) || displayBottom.textContent.includes(".")){
                    displayBottom.textContent += char;
                }
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
                    case ",":
                        if(!displayBottom.textContent.includes(".")){
                            displayBottom.textContent += "."
                        }
                        break;
                    case "=":
                        if(calculator.action !== "="){
                            calculator.result = parseMethod(calculator.action, calculator.result, parseFloat(displayBottom.textContent));
                            calculator.action = char;
                            displayTop.textContent = `${calculator.result} ${char}`;
                            displayBottom.textContent = "";
                        }
                        break;
                    case "²√x":
                        calculator.result = Math.sqrt(parseFloat(displayBottom.textContent))
                        displayTop.textContent = calculator.result
                        displayBottom.textContent = ""
                        break;
                    case "x2":
                            if(!displayBottom.textContent && displayTop.textContent){
                                let result = parseFloat(displayTop.textContent.slice(0, -1)) ** 2
                                calculator.result = result
                                calculator.action = "="
                                displayTop.textContent = `${result} =`
                            }else{
                                calculator.result = parseFloat(displayBottom.textContent) ** 2
                                displayTop.textContent = `${calculator.result} =`
                                displayBottom.textContent = ""
                            }
                            break;    
                    case "+/-":
                        if(displayBottom.textContent){
                            displayBottom.textContent = displayBottom.textContent.includes("-") ? displayBottom.textContent.slice(1) : `-${displayBottom.textContent}`;
                        }
                        break;
                    default:
                        if(calculator.action === "="){
                            displayTop.textContent = displayTop.textContent.slice(0, -1) + char;
                            calculator.action = char;
                        }else{
                            if(displayTop.textContent){
                                if(!calculator.result){
                                    displayTop.textContent = `${displayTop.textContent} ${char}`;
                                }else{
                                    displayTop.textContent = displayTop.textContent.slice(0, -1) + char;
                                }
                                calculator.action = char;
                            }else{
                                displayTop.textContent = `${displayBottom.textContent} ${char}`;
                                calculator.result = parseFloat(displayBottom.textContent)
                                calculator.action = char
                                displayBottom.textContent = "";
                            }
                        }
                        break
    
                }
            }
            

        })
    }
})()