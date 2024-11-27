var carro = {
 modelo:"Fusca",
 cor: "Preto",
 velocidade: 0}
 function acelerar() {
    carro.velocidade += 5
        }
     while(carro.velocidade < 80) acelerar()
     function desacelerar() {
      carro.velocidade -= 13
    if(carro.velocidade < 0) {
        carro.velocidade = 0
    }
    }
    while (carro.velocidade > 0)desacelerar()
    console.log(carro)
    
    
    
    
    
    
    
    
    