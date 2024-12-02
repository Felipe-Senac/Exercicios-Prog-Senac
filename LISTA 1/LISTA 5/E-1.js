function separar(frase,separador){ 
var str = frase.split(separador);

return str 
}
//questão 1 cenarios 1 - 3
console.log("frase 1")
separar("O rato roeu a roupa do rei de Roma", " ")
console.log("frase 2")
separar("JavaScript é muito fácil!", " ")
console.log("frase 3")
separar("Eu gosto de programar", " ")
//questão 2 cenarios 4 e 5
console.log("caso 4")
separar("João,Maria,José", ",")
console.log("caso 5")
separar("Ana Maria,Paulo Coelho,Carla", ",")
//questão 3 cenarios 6 - 8
console.log("caso 6")
separar("fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com", ";")
console.log("caso 7")
separar("contato@empresa.com;suporte@site.com", ";")
console.log("caso 8")
separar("admin@fundacao.org;info@site.org", ";")
//questão 4 cenarios 9 - 11
console.log("caso 9")
separar("Nome -- Sobrenome -- Idade -- País", "--")
console.log("caso 10")
separar("Item 1 -- Item 2 -- Item 3 -- Item 4", "--")
console.log("caso 11")
separar("Rua A -- Bairro B -- Cidade C -- Estado D", "--")
//questão 5 cenarios 12 - 14
console.log("caso 12")
separar("/usr/local/bin", "/")
console.log("caso 13")
separar("/home/user/documents", "/")
console.log("caso 14")
separar("/var/www/html", "/")
//questão 6 cenarios 15 - 17
console.log("caso 15")
separar("JavaScript", "")
console.log("caso 16")
separar("Eu gosto de programar", "")
console.log("caso 17")
separar("Olá, Mundo!", "")
//questão 7 cenarios 18 - 20
console.log("caso 18")
separar("O sol está brilhando. O céu está azul. É um ótimo dia!", ".")
console.log("caso 19")
separar("Programar é divertido. Pratique todos os dias.", ".")
console.log("caso 20")
separar("Olá. Como vai você?", ".")
//questão 8 cenarios 21 - 23
console.log("caso 21")
separar("João,Maria,José", ",")
console.log("caso 22")
separar("João,Maria,José", ",")
console.log("caso 23")
separar("João,Maria,José", ",")
//questão 9 cenarios 24 - 26
console.log("caso 24")
separar("João,Maria,José", ",")
console.log("caso 25")
separar("João,Maria,José", ",")
console.log("caso 26")
separar("João,Maria,José", ",")
//questão 10 cenarios 27 à 32
console.log("caso 27")
separar("João,Maria,José", ",")
console.log("caso 28")
separar("João,Maria,José", ",")
console.log("caso 29")
separar("João,Maria,José", ",")
console.log("caso 30")
separar("João,Maria,José", ",")
console.log("caso 31")
separar("João,Maria,José", ",")
console.log("caso 32")
separar("João,Maria,José", ",")
//FIIIIIIM!!!!!!