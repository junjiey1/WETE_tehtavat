// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 


// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');
    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        tasks.push(task.value);
        
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.
function removeDuplicatees(){
    var seen={};
    var list=[];
    var item;
    var j=0;
    for(var i = 0; i<tasks.length; i++){
        var item = tasks[i];
       if(seen[item] !== 1) {
        seen[item] = 1;
        list[j] = item;
        j++;
       }
   }
   
   alert('Duplicates removed ');
    tasks=[]
    tasks=list;
    
    
    var message = '';
    var output = document.getElementById('output');
    
      message = '<h2>To-Do</h2><ol>';
        for (var i = 0, count = tasks.length; i < count; i++) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;

}



// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
    document.getElementById('Remove').onclick = removeDuplicatees;
    
} // End of init() function.




window.onload = init;