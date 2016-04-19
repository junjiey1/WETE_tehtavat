<?php
 $s = "Mouseover <p>text</p> \"<b onmouseover=alert('hello')>Here</b>\"";
    $b = strip_tags($s,"<b>"); 
    $r = htmlentities($b);
    echo $b;
    echo $r;

?>