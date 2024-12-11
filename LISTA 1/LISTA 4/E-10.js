function soma(array){
    if (array.length === 0){return 0;}
    let conta = 0;
    for(let index = 0; index < array.length; index ++ ){
    if(array[index] % 2 === 0){conta +=array[index];}
    }
    
    return conta;
    }
    console.log(soma([1, 2, 3, 4, 5]));
    console.log(soma([2, 4, 6, 8]));
    console.log(soma([1, 3, 5, 7]));