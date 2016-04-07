//console.log('page loaded');

console.log(document);
var event = function() {
console.log('updating email');
var email = document.querySelector('#userForm input[type="email"]').value;
var name = document.querySelector('#userForm input[type="text"]').value;
var pass = document.querySelector('#userForm input[type="password"]').value;
var toShow = (name + ' : ' + email + ' : ' + pass);
console.log(name);
document.querySelector('#summary h1').innerHTML = toShow;
var paragraphs = document.querySelectorAll('#summary p');
paragraphs[1].innerHTML = 'Hello World!';
paragraphs[0].innerHTML = 'found '+paragraphs.length+' p tags';
};

var inputs = document.getElementById("userForm").querySelectorAll("input");

for (var i=0; i<inputs.length;i++){
inputs[i].onkeyup = event;
}



