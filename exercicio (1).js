// Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa
// podem entrar no brinquedo.
//
// Crie uma função controleDeAcesso() que receba dois parâmetros: 
//  -> altura da pessoa;
//  -> se está acompanhada.
//
// O script deve informar se a pessoa tem acesso liberado ou não, baseado nas seguintes condições:
//  -> A pessoa deve medir mais de 1.40m e menos de 2m.
//  -> Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
//  -> Se a pessoa medir menos de 1.20m, não poderá ir nem acompanhada.


    

let altura = 1.10;
let acompanhado = "sim";

let acesso = " ";

if(altura < 1.20){
    acesso = "Acesso Proibido!";
} else if (altura >= 1.20 && altura <= 1.40) {
    acesso = "Acesso liberado com acompanhante.";
} else {
    acesso = "Acesso liberado!";
}

console.log(acesso)

