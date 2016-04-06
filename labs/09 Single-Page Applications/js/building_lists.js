
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

//var list = document.createElement('ol');
var table = document.createElement("table");
var tbody = document.createElement("tbody");
var row = document.createElement("tr");
var heading1 = document.createElement("th");
var heading2 = document.createElement("th");
heading1.innerHTML='Title';
heading2.innerHTML='Published';
row.appendChild(heading1);
row.appendChild(heading2);
tbody.appendChild(row);
for (var i=0; i < books.length; i++) {
	var row = document.createElement("tr");
	var cell1 = document.createElement("td");

//	cell1.addEventListener("click", displayinfo(cell1));
	var cell2 = document.createElement("td");

	cell1.innerHTML = (books[i].title);
	cell2.innerHTML = (books[i].year);
	row.appendChild(cell1);
	row.appendChild(cell2);
	var clickhandeler = (function(row) {
		return function() { 
            var cell = row.getElementsByTagName("td")[0];
            document.getElementById("select").innerHTML=cell.innerHTML;
         };
    });
    row.onclick = clickhandeler(row);
	tbody.appendChild(row);
}
table.appendChild(tbody);
document.body.appendChild(table);
