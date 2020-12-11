var btn=document.querySelector("#click-translate");
var input=document.querySelector("#text-input");
var output=document.querySelector("#output");

function out(){
    output.innerText=input.value;
}
btn.addEventListener("click",out)
