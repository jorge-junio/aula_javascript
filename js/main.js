//Aula 1
/*var nome = "Jorge da Silva";
var idade = 24;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

alert(nome + " tem " + idade + " anos");
console.log(nome);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());*/

//Aula 2
/*var lista = ["Maçã", "Uva", "Laranja"];
lista.push("Pêra");
lista.pop();
console.log(lista.toString());
console.log(lista.join(" # "));

var dicionario = {fruta: "Maçã", preco: "2"};
console.log(dicionario);

var dicionariodicionario = [
    {fruta: "Maçã", preco: "2"},
    {fruta: "Uva", preco: "3"}
];

console.log(dicionariodicionario);*/

//Aula 3
/*var idade = prompt("Digite sua idade: ");
if (idade >= 18) {
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
}

var d = new Date();
console.log(d);*/

//Aula 4
/*function soma(a, b){
    alert(a+b)
}

soma(8, 10)*/

//Aula 6
function Botao() {
    //alert("Você apertou no botão!");
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function Redirecionar() {
    window.open("https://www.google.com/"); //vai para outra aba
    window.location.href = "https://www.google.com/"; //abre na mesma janela
}

function MudarTexto(elemento) {
    //document.getElementById("elemento.id").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function Voltar(elemento) {
    //document.getElementById(elemento.id).innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function QuandoCarrega() {
    alert("Carregou o conteúdo da página");
}

function QuandoMuda(elemento) {
    console.log(elemento.value);
}

