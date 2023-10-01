function foo(){
var res = prompt("Enter Your Name");
var span = document.createElement("span");
span.innerText = res;
document.body.append(span);
}

var button = document.createElement("button");
button.innerText = "Click Me"
button.addEventListener("click",foo);
document.body.append(button);

var div = document.createElement("div");
div.style.backgroundColor = "yellow";
div.style.height="15rem";
div.style.width="15rem";
div.addEventListener("mouseover",change);
div.addEventListener("mouseout",getback);
document.body.append(div);

function change(){
    div.style.backgroundColor = "red";
}

function getback(){
    div.style.backgroundColor = "yellow";
}
