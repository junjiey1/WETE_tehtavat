<?php
 $s = "Look at this. <p>text</p> \"<b onmouseover=alert('hello')>This is an example</b>\"";
    $b = strip_tags($s, "<b>"); //allow tag b
    $r = htmlentities($b);
    echo $b;
    echo $r;

?>