function bmi(weight,height){
    var final = weight/(height*height)
    return Math.round(final)
}
console.log(bmi(75,3))
