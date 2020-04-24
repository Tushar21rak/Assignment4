var dataContainer = document.getElementById("API-calls");
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
xhr.onload = function () {
    var newData = JSON.parse(xhr.responseText);
    var htmlString = "time pass";


    console.log(newData);
}
xhr.send();

