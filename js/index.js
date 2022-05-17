let listaLivros = [
    'https://images-na.ssl-images-amazon.com/images/I/51mMKXjxBTS._SX346_BO1,204,203,200_.jpg', 
    'https://m.media-amazon.com/images/I/51XqG335HnL.jpg', 
    'https://images-na.ssl-images-amazon.com/images/I/81ROxCHdNLL.jpg'
];

let listaTitulos = [
    'A coragem de ser Imperfeito', 
    'O fim em doses homeopáticas', 
    'Todo Amor'
];

let catalogo = document.querySelector('#catalogo');
let i = 0;
let erro = document.querySelector('#erro');

for (i; i < listaLivros.length; i++){
    catalogo.innerHTML += `<div class="livro">
        <img src=${listaLivros[i]}><figcaption>${listaTitulos[i]}</figcaption>
    </div>`;
}

let livroRepetido = true;

function Cadastrar() {
  let novoLivro = document.querySelector('#livro').value;
  let novoTitulo = document.querySelector('#titulo').value;

  if(novoLivro == "" || novoTitulo == ""){
    erro.innerHTML = "Digite um Endereço e/ou Nome válido.";
  } else if (listaLivros.includes(novoLivro) || listaTitulos.includes(novoTitulo)) {
    erro.innerHTML = `Livro ${novoTitulo} já cadastrado.`;
  }  else {
    listaLivros.push(novoLivro);
    listaTitulos.push(novoTitulo);
    erro.innerHTML = "";
    mostrarLivros();
  }
  document.querySelector('#livro').value = "";
  document.querySelector('#titulo').value = "";
}


function mostrarLivros() {
    do {
      catalogo.innerHTML += `<div class="livro"><img src=${listaLivros[i]} alt=${listaTitulos}><figcaption>${listaTitulos[i]}</figcaption></div>`;
      i++;
    } while (i < listaLivros.length);
  }