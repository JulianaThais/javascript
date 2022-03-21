let idade = 16;
let acesso = '';
if(idade < 16){
    acesso = 'Acesso proibido'
}
else if (idade >= 16 && idade <= 18){
    acesso = 'Acesso somente com responsaveis'
}
else {
    acesso = 'Acesso liberado'
}
console.log (acesso)
