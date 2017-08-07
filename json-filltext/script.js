var results = document.getElementById('results');
var r = new XMLHttpRequest();
r.open("GET", "http://www.filltext.com?rows=100&f={firstName}", true);
r.onreadystatechange = function () {
  if (r.readyState != 4 || r.status != 200) return;
  var data = JSON.parse(r.responseText);
  for (i=0;i<data.length;i++){
        results.innerHTML += '<li>'+data[i].f+'</li>'
  }
};
r.send();