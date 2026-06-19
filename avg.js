function avg(arr){
    let sum = 0;
    arr.array.forEach(element => {
      sum += element;
    });
    return sum/arr.length;
}