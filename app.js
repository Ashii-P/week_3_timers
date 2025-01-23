const button = document.createElement("button");
const text = document.createTextNode("Click Me");
button.appendChild(text);
document.body.appendChild(button);

button.addEventListener("click", () => {
  const message = document.createElement("h2");
  message.setAttribute("id", "heading");
  const messageT = document.createTextNode("Wrong button...");
  message.appendChild(messageT);
  document.body.appendChild(message);
  setTimeout(() => {
    document.getElementById("heading").remove();
  }, 5000);
});

const iButton = document.createElement("button");
const iText = document.createTextNode("Set Timer");
iButton.appendChild(iText);
document.body.appendChild(iButton);
const pTag = document.createElement("p");
pTag.innerText = 0;
document.body.appendChild(pTag);
let interval;

iButton.addEventListener("click", () => {
  if (interval) {
    clearInterval(interval);
  } else {
    interval = setInterval(() => {
      let pTagNum = parseInt(pTag.innerText);
      pTagNum += 1;
      pTag.innerText = pTagNum;
    }, 1000);
  }
});
