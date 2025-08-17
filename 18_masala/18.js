function task18(s,f,y){
    return "siz oladigan summa: "+(s*f*y)/100
}
let s=prompt("Bankdagi pul> ")
let f=prompt("Foiz stavka> ")
let y=prompt("Necha yilga quydyz> ")
alert(task18(+s,+f,+y))