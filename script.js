document.addEventListener("DOMContentLoaded", () => {
    let str = "";
    let buttons = document.querySelectorAll(".btn")
    buttons.forEach(button => {
        button.onclick = () => {
            if (button.value === "cut") {
                str = str.slice(0, -1);
                document.querySelector("#screen").innerHTML = str;
            }
            else if (button.value === "clear") {
                str = "";
                document.querySelector("#screen").innerHTML = str;
            }
            else if (button.value != "=") {

                str += button.value;
                document.querySelector("#screen").innerHTML = str;
            }
            else if(button.value === "="){
                document.querySelector("#screen").innerHTML=eval(str);
                str="";
                
        }

    }});

});
