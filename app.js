var btn=document.querySelector("#click-translate");
var input=document.querySelector("#text-input");
var output=document.querySelector("#output");

var serverurl="https://api.funtranslations.com/translate/minion.json"

function geturl(inputvalue)
{
    return serverurl+"?"+"text="+inputvalue;
}
function errorhandler(error)
{
    alert("Sorry,Error occurred!!")
}
function out()
{
    var inputstring=input.value;
    fetch(geturl(inputstring)).
    then(response => response.json()).
    then(json =>console.log(output.innerText=json.contents.translated)).
    catch(errorhandler);
}
btn.addEventListener("click",out)
