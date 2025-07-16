//console.log("Hello, World... Testando node")
//console.log("Node.js version: ", process.version);
//console.log("Current directory: ", process.cwd());

const meuNome = "Raul";
const sobrenome = "Rodrigues";
const nomeCompleto = meuNome + " " + sobrenome;

const apresentacao = "Boa noite, meu nome é ${meuNome.toUpperCase()} ${sobrenome.toUpperCase()}";

//Extrai os dois primeiros caracteres do nome
const nomeSlice = meuNome.slice(0,2); //"Ra"

//Verifica se o nome contém a letra "a"
let novoSobrenome = sobrenome;
if(meuNome.includes("a")){
    novoSobrenome = sobrenome.replace("Martins", "Rodrigues")
}

//Exibe o nome completo com formatações
const NovonomeCompleto = meuNome.toLowerCase() + " " + novoSobrenome.toUpperCase();
console.log("Nome Completo: ", nomeCompleto);

//Exibe a quantidade total de letras
console.log("Quantidade de letras: ", meuNome.length + sobrenome.length);

//Exibe o nome original
console.log("Nome original: ", meuNome);

//Exibe o slice do nome
console.log("Slice do nome: ", nomeSlice);

