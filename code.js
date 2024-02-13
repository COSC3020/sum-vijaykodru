function sum(a) {
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

//Initially the sum should equal 0, rather than the first element of the array. Because if the sum is initiated to the first element of the array, and we are 
//adding the array from the first element this will give us the wrong answer.
