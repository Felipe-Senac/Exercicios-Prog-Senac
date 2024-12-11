var arr1 = [1, 2, 3, 4, 5];
var arr2 = [-1, -2, -3, -4, -5];
var arr3 = [10, 20, 30, 40, -50];
var arr4 = [];
console.log(Math.max.apply(null, arr1));
console.log(Math.max.apply(null, arr2));
console.log(Math.max.apply(null, arr3));
console.log(Math.max.apply(null, arr4));