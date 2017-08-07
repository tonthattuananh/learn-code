jQuery(document).ready(function($) {
<<<<<<< HEAD
  var pageCounter = 1;
  var btn = $('#btn');

  btn.on("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    ourRequest.onload = function() {
      // console.log(ourRequest.responseText);
=======
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");



document.getElementById("btn").addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
>>>>>>> b84136f3a8559ba957e414a10a7e0827cef2d268
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    }
    console.log(pageCounter);
    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
      btn.hide();
    }
  });

  function renderHTML(data) {
    var htmlString = ""
    for (i = 0; i < data.length; i++) {
      htmlString += "<p>" + data[i].name + " is a" + data[i].species + " that likes to eat ";

      for(ii = 0; ii < data[i].foods.likes.length; ii++) {
        if (ii == 0) {
          htmlString += "<b>" +data[i].foods.likes[ii]+ "</b>";
        } else {
          htmlString += " and " + data[i].foods.likes[ii];
        }
      }

      htmlString += " and dislikes ";

      for(ii = 0; ii < data[i].foods.dislikes.length; ii++) {
        if (ii == 0) {
          htmlString += data[i].foods.dislikes[ii];
        } else {
          htmlString += " and " + data[i].foods.dislikes[ii];
        }
      }

    }

    htmlString += ".</p>";

    $("#animal-info").append(htmlString);
  }

<<<<<<< HEAD
=======
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

>>>>>>> b84136f3a8559ba957e414a10a7e0827cef2d268
});