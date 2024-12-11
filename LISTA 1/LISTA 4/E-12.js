function soma(num){
let text = num.toString(); 
let array = text.split('');
    if (array.length === 0){return 0;}
    let conta = 0;
    for(let index = 0; index < array.length; index ++ ){
    
     conta +=Number(array[index]);
    }
    
    return conta;
    }
    console.log(soma([123]));
    console.log(soma([456789]));
    console.log(soma([8423416542984721]));
   