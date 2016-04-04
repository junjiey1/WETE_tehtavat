"use strict";
var notes = new Array();
var button;
var textbox;
var note;
var uusi;

function addItem() {
	uusi=true;
	var textbox = document.getElementById('item');
	//var itemText = textbox.value;
	for(var i = 0; i<notes.length; i++){
 	
		if(textbox.value==notes[i].title){
 	
			uusi=false;
 	
			notes[i].quantity++;
 	
		}
 	
	}
 	
	if(notes.length<=0){
		var newItem = {title: textbox.value, quantity: 1};	
		notes.push(newItem);
	}else if(uusi){
    	var newItem = {title: textbox.value, quantity: 1};	
		notes.push(newItem);
	}
	textbox.value = '';
	textbox.focus();
	//var newItem = {title: itemText, quantity: 1};
	notes.push(newItem);
	displayList();
}

function displayList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i<notes.length; i++) {
		var node = undefined;
		note = notes[i];
		//var node = document.createElement('tr');
		node = document.createElement('tr');
	//	var html = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
	//    node.innerHTML = html;
	    node.innerHTML = '<td>'+note.title+'</td><td>'+note.quantity+'</td><td><a href="#" onClick="deleteIndex('+i+')">delete</td>';
		table.appendChild(node);
	}
		saveList();
 	}

function saveList() {
	localStorage.notes = JSON.stringify(notes);
}
function loadList() {
 	console.log('loadList');
 	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
 			displayList();
 		}
	
	
	
	
	
	
}

function deleteIndex(i) {
	notes.splice(i, 1);
	displayList();
}

//var button = document.getElementById('add');
//button.onclick = addItem;

function init(){
	loadList();
	button = document.getElementById('add');
	button.onclick = addItem;
}
window.onload = init;
