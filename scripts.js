let greetings = ["Hello world", "Hi there", "Hi Folks!", "Welcome!" , "Hola!", "こんにちは!"];
const getRamdomFrom = elems => elems[Math.floor(Math.random()*elems.length)];
    
let greetingField=document.querySelector(".greetings");

document.addEventListener("DOMContentLoaded", function() {
  greetingField.textContent=getRamdomFrom(greetings);
});