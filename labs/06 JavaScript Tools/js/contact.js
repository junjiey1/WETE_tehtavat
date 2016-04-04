// contact.js
// This script checks a contact form submission for HTML and a valid email address.

// Function called when the form is submitted.
// Function validates the data and returns a Boolean. (Logs to console in this example)
function process() {
    'use strict';

    // Variable to represent validity:
    var okay = true;
    
    // Get form references:
    var name = document.getElementById("name").value;
    var email = document.getElementById('email');
    var comments = document.getElementById('comments');
    // Validate the email address:
    if (!email || !email.value 
    || (email.value.length < 6) 
    || (email.value.indexOf('@') == -1)) {
        okay = false;
        alert('Please enter a valid email address!');
    }
    
    console.log("run");
    
    if(!name.length==0 && name.search(" ")!=-1){
        if((name.indexOf(" ")!= (name.length=-1)) && (name.indexOf(" ")>=3 && name.indexOf(" ")<=100)){
            okay=true;
        }else{
            okay=false;
            alert("Please fill with full name!");
        }
    }else{
        okay=false;
        alert("Please fill with full name!");
    }
    console.log("lol");




    // Validate the comments:
    var maxLength = 100;
    if (!comments || !comments.value 
    || (comments.value.indexOf('<') != -1) ) {
        okay = false;
        alert('Please enter your comments, without any HTML!');
    } else if (comments.value.length > maxLength) {
        okay = false;
        var originalText = comments.value;
        // Find the last space before the limit:
        var lastSpace = originalText.lastIndexOf(' ', maxLength);
        // Trim the text to that spot:
        var limitedText = originalText.slice(0, lastSpace);
        comments.value = limitedText;
        okay = true;

        alert('Comment was trimmed under ' + maxLength + ' characters');
    }
        
    // Normally you would "return okay;" here to submit/block the form submission
    // return okay;

    // For this example we alert the user and log details to the console
    var message;
    if (okay) {
        message = "Form submitted";
    } else {
        message = "Form not submitted";
    }
    console.log(message);
    console.log("Email: " + email.value);
    console.log("Comments: " + comments.value);
    alert(message);

    // Prevent submission for the purposes of this example:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;