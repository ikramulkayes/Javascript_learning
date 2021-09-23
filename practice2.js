function lovecalculator(s1,s2){
    var n = Math.random()
    n = n*100 
    n = Math.floor(n)+1
    if (n>50){
        return s1+"'s love for "+s2 +" is " +String(n) + "% .Good luck with your life"
    }
    else{
        return s1+"'s love for "+s2 +" is " +String(n) + "%"
}}
console.log(lovecalculator("kamal","Cathreen"))