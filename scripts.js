let greetings = ["Hello world", "Hi there", "Welcome!" , "Hola!", "Nice to meet you!", "Nice to see you!", "Hi!", "Hiya!"];
const getRamdomFrom = elems => elems[Math.floor(Math.random()*elems.length)];

//////////////////////

const cursor = document.createElement("span");
cursor.classList.add("cursor");
cursor.textContent = '\xa0';


const typingDelay = 16;

let textArrayIndex = 0;
let charIndex = 0;
let bubble = document.querySelector(".bubble");

const elements = [".greetings",".say-my-name",".about-me"];
const texts = ["<h1>"+getRamdomFrom(greetings)+"</h1>","<h3>I'm Cristian Baltazar</h3>", "<p>I have more than 10 years working on the creation of digital products. Curious and restless, I am passionate about the web, the constant evolution and new trends in technology, usability and design, give frame to that world full of dynamism and challenges that I love to be part of .</p>"]


function formatCode(typedTextSpan) {
  typedTextSpan.textContent = typedTextSpan.textContent.replace(/<\/?[^>]+(>|$)/g, "");
  typedTextSpan.classList.add("done");
  charIndex = 0;
  if(++textArrayIndex < texts.length)
    setTimeout(()=>typeContent(texts[textArrayIndex],elements[textArrayIndex]), 400)
  else bubble.classList.remove("disable");
}

function typeName(texto,typedTextSpan) {
  if (charIndex < texto.length) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedTextSpan.textContent += texto.charAt(charIndex);
    charIndex++;
    setTimeout(()=>typeName(texto,typedTextSpan), typingDelay);
  }else{
    cursor.classList.remove("typing");
    setTimeout(()=>formatCode(typedTextSpan), 500);
  }
}

const typeContent = (texto,elem)=>{
  const typedTextSpan = document.querySelector(elem);
  typedTextSpan.parentElement.appendChild(cursor);
  bubble.classList.add("disable");
  typeName(texto, typedTextSpan);
}

document.addEventListener("DOMContentLoaded", function() {

  typeContent(texts[textArrayIndex],elements[textArrayIndex]);
  
  bubble.addEventListener("click", ()=>{
    elements.forEach(e=>{
      const element = document.querySelector(e);
      element.textContent=""
      element.classList.remove("done");
    });
    textArrayIndex =0;
    typeContent(texts[textArrayIndex],elements[textArrayIndex])
  }) 
});

// 2) Destacar el Strong
// 3) hacer responsive la web
// 4) encontrar la forma de que los textos preexistan en el HTML (por SEO);