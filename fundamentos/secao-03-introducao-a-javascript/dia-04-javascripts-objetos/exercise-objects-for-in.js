let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercise 01
// console.log('Bem-vinda,',info.personagem);

//Exercise 02
info['recorrente'] = 'Sim';
// console.log(info);

//Exercise 03
for (let key in info){
  //console.log(key);
}

// Exercise 04
for (let key in info){
  //console.log(info[key]);
}

// Exercise 05
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

// Exercise 06
for (let key in info) {
  if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[key] + ' e ' + info2[key]);
  }
}

// Leitura de objetos
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log('O livro favorito de',leitor.nome,leitor.sobrenome,'se chama',leitor.livrosFavoritos[0].titulo);

let newBook = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};
leitor.livrosFavoritos.push(newBook);

// console.log(leitor);

console.log(leitor.nome,'tem',leitor.livrosFavoritos.length,'livros favoritos.');