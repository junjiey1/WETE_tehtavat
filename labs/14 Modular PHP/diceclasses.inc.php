<?php

class Dice {
    private  $faces;
    private  $freqs = array();
    private $x;
    private  $heitot;
    
    // Constructor
    public function __construct($faces, $x) {
         $this->faces = $faces;
        if(isset($x)){
            $this->x = $x;
        }else{
            $this->x = 0;        }
    }
    
    
    public function cast() {
        $this->heitot++;
     if($this->x==0){
            //echo($this->heitot);
            $res = mt_rand(1,$this->faces);
        }else{
            //$prob = ((1-$this->x)/($this->faces-1));
            if(mt_rand(1,100)<=($this->x*100)){
                $res = $this->faces;
            }else{
                $res = mt_rand(1,($this->faces-1));
            }
        }
        
        $this->freqs[$res]++;
        return $res;
    }
    
    public function getFreq($eyes) {
        $freq = $this->freqs[$eyes];
        if ($freq=="")
            $freq = 0;
        return $freq;
    }

   public function getAvg(){
       $total=0;
         for($i=1;$i<=$this->faces;$i++){
             $total+= $this->freqs[$i]*$i;
         }
         $avg = $total/$this->heitot;
         return $avg;
     }
 }

?>