let nameText = document.querySelector('.name-text');

let i = 0,
  text;
text = "I’m Revan and I’m a Front-end devloper.";

function typing() {

  if (i < text.length) {
    nameText.firstElementChild.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 160);
  }
}
typing();