<?php

include("diceclasses.inc.php");
include("Physicaldice.php");

$faces = $_GET["faces"];
$throws = $_GET["throws"];
$x = $_GET["x"];
$material = $_GET["material"];

$results = array();

// make dice
if(isset($material)){
    $dice = new Physicaldice($material, $faces, $x);
}else{
    $dice = new Dice($faces,$x);
}
for ($i = 1; $i<=$throws; $i++) {
    $res = $dice->cast();
    $results[] = array('id' => strval($i), 'res' => strval($res));
}


$freqs = array();
for ($i = 1; $i<=$faces; $i++) {
    $freqs[] = array ('eyes' => strval($i), 'frequency' => strval($dice->getFreq($i)));
}


echo json_encode(array('faces'=>$faces,'results'=>$results,'frequencies'=>$freqs));



?>