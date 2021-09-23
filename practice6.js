function fib(lim){
    var lst = [];
    var a = 0;
    var b =1;
    var count = 0;
    var temp = 0;
    while (count < lim){
        lst.push(a);
        temp = b;
        b = a +b;
        a = temp;
        count +=1
    }
    return lst
}
console.log(fib(10))