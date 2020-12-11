var btn=document.querySelector("#click-translate");
var input=document.querySelector("#text-input");
function out(){
    console.log("Button clicked!!");
    console.log("hello",input.value)
}
btn.addEventListener("click",out)
