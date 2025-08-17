let x=prompt("Baho> ");
y=Number(x);
let result;
function task5(y){
    if (90<=y && y<=100){
        result="A"
    }else if(80<=y && y<=89){
        result="B"
    }
    else if(70<=y && y<=79){
        result="C"
    }
    else if(60<=y && y<=69){
        result="D"
    
    }else{
        result="F"
    }
}
    task5(y);
    alert(result)