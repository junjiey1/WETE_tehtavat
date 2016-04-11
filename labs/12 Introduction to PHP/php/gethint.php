<?php
// Array with names
$a[] = "Anna";
$a[] = "Arja";
$a[] = "Leo";
$a[] = "Aleksi";
$a[] = "Aino";
$a[] = "Sari";
$a[] = "Teemu";
$a[] = "Heikki";
$a[] = "Inga";
$a[] = "Maltti";
$a[] = "Kirsi";
$a[] = "Laila";
$a[] = "Nina";
$a[] = "Orvokki";
$a[] = "Pekka";
$a[] = "Amanda";
$a[] = "Raimo";
$a[] = "Sirpa";
$a[] = "Liisa";
$a[] = "Erkki";
$a[] = "Aimo";
$a[] = "Risto";
$a[] = "Markku";
$a[] = "Peppi";
$a[] = "Visa";
$a[] = "Elisa";
$a[] = "Eila";
$a[] = "Ellen";
$a[] = "Valtti";
$a[] = "Vihtori";

$json_list= array();
$fname = "firstname";

// get the q parameter from URL
$q = $_REQUEST["q"];

    $json_list= array();
    $fname = "firstname";
    foreach($a as $name){
    $q = strtolower($q);
    $len=strlen($q);

        if ((stristr($q, substr($name, 0, $len))) && count($json_list)<=0) {
        $json_list[$fname]=" $name";
    }
}

if(count($json_list)<=0){
    $json_list[$fname]=" no suggestion available";
}
    print_r(json_encode($json_list));
?>
