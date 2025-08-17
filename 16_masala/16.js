function task16(s){
    if(s>500000){
        alert("Chegirma: "+s*0.1+"  "+"Tulov: "+s*0.9)
    }
    else{
        alert("Chegirma:0"+"  "+"Tulov: "+s)
    }
}
let s=prompt("Soqqani kirtng> ")
task16(+s)