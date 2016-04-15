<?php
class Physicaldice extends Dice{

    private $material;

    public function __construct($material, $faces, $x) {
        parent::__construct($faces, $x);
        $this->material = $material;
        echo(' this dice is made of ' .$material. ' ');
    }


public function getMaterial(){
        return $this->material;
    }

} 
?>