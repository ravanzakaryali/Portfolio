let nameText = document.querySelector('.name-text');

let i = 0,
  text;
text = "Mən Rəvan və mən bir Front-end devloperəm";

function typing() {

  if (i < text.length) {
    nameText.firstElementChild.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 160);
  }
}
typing();