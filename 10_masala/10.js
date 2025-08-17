let tez
function task10(a){
        if (a<0){
            return "Bunday tezlik mavjudmas"
        }
        if(a<=50){
            tez="Internet sekin"

        }else if(a>=50 && a<=100){
            tez="Internet urtacha"
        }else{
            tez="Internet juda tez"
        }
}
let t=prompt("Tezlikni kirtng> ")
task10(+t)
alert(tez)