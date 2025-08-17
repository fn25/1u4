function task20(a,b,c){
    let ob=[a,b,c];
    let m=0
    for (let i of ob){
        if (i>m){
            m=i;}
  
    }
    alert(m)
}
let a=prompt("1-son> ");
let b=prompt("2-son> ")
let c=prompt("3-son> ")
task20(+a,+b,+c)