var listElement = document.getElementById("list");
var addlistButton = document.getElementById("js-addListItemButton");
var counterClick = 1;

addlistButton.addEventListener('click', function (e) {
    var newElement = document.createElement("li");
    newElement.innerHTML = "item " + counterClick;
    counterClick ++;
    listElement.appendChild(newElement);
});