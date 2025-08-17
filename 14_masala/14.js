
function task14(m,n){
    if (m>n){
        alert(`${m} soni ${n} sonidan katta`)
    }else if(m===n){
        alert("Ikkalasi teng")
    }else{
        alert(`${n} soni ${m} sonidan katta `)
    }
}
let a=prompt("1-Sonni kirtng> ")
let b=prompt("2-chi sonni kirtng> ")
task14(a,b)