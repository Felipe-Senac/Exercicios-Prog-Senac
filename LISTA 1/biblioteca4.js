//  exercicio 9 
export function soma(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let conta = 0;
    for (let i = 0; i < arr.length; i++) {
        conta += arr[i];
    }  return conta
}

// exercicio 10
export function somapar(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let conta = 0;
    for (let i = 0; i < arr.length ;i++) {} 
    if(i % 2 === 0){conta += arr[i]}
    return conta
}   
// exercicio 11
export function calcularMedia(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }

    return soma / arr.length;
}

//  exercicio 12

export function soma2(num){
    let text = num.toString(); 
    let array = text.split('');
        if (array.length === 0){return 0;}
        let conta = 0;
        for(let index = 0; index < array.length; index ++ ){
        
         conta +=Number(array[index]);
        }
        
        return conta;
        }
        