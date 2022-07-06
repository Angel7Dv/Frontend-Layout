var path = document.currentScript.getAttribute('path');

var ajax = new XMLHttpRequest();
ajax.open("GET", path, false);
ajax.send();
document.body.innerHTML += ajax.responseText;


// <script src="../components.js" path="./components/footer.html"></script>