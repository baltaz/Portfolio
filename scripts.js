let greetings = ["Hello world", "Hi there", "Welcome!" , "Hola!", "Hi!", "Hiya!"];
const getRamdomFrom = elems => elems[Math.floor(Math.random()*elems.length)];

/* cursor creation */
const cursor = document.createElement("span");
cursor.classList.add("cursor");
cursor.textContent = '\xa0';

/* configurable params */
const typingDelay = 16;
const elements = [".greetings",".name",".bio"];
const texts = ["<h1>"+getRamdomFrom(greetings)+"</h1>","<h3>I'm Cristian Baltazar</h3>", "<p>I have more than 10 years working on the creation of digital products. Curious and restless, I am passionate about the web, the constant evolution and new trends in technology, usability and design, give frame to that world full of dynamism and challenges that I love to be part of .</p>"]

/* global variables */
let arrayIndex = 0;
let charIndex = 0;
let bubble = document.getElementById("bubble");

function formatCode(element) {
  element.textContent = element.textContent.replace(/<\/?[^>]+(>|$)/g, "");
  element.classList.add("done");
  charIndex = 0;
  if(++arrayIndex < texts.length)
    setTimeout(()=>typeContent(texts[arrayIndex],elements[arrayIndex]), 400)
  else {
    const social = document.querySelector(".social");
    social.classList.add("appear");
    bubble.classList.remove("disable")
  };
}

function justTyping(texto,element) {
  if (charIndex < texto.length) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    element.textContent += texto.charAt(charIndex);
    charIndex++;
    setTimeout(()=>justTyping(texto,element), typingDelay);
  }else{
    cursor.classList.remove("typing");
    setTimeout(()=>formatCode(element), 500);
  }
}

const typeContent = (texto,elem)=>{
  const element = document.querySelector(elem);
  element.parentElement.appendChild(cursor);
  bubble.classList.add("disable");
  justTyping(texto, element);
}


const slide = (e) => {
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("showed");
}

document.addEventListener("DOMContentLoaded", function() {
  typeContent(texts[arrayIndex],elements[arrayIndex]);
  
/*   const codeScreen = document.querySelector(".screen")
  codeScreen.addEventListener("click", slide); */
  
  bubble.addEventListener("click", ()=>{
    elements.forEach(e=>{
      const element = document.querySelector(e);
      element.textContent=""
      element.classList.remove("done");
    });
    const social = document.querySelector(".social");
    social.classList.remove("appear");
    window.scroll(0,0)
    arrayIndex = 0;
    typeContent(texts[arrayIndex],elements[arrayIndex])
    
  })
});

// 2) Destacar el Strong
// 4) encontrar la forma de que los textos preexistan en el HTML (por SEO);