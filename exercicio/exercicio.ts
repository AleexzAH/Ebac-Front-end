function multiplicacao(a: number, b: number): string{
    const resultado: number = a * b;
    return `A multiplicação de ${a} com ${b} é ${resultado}`;
}

function saudacao(nome: string): string{
    return `Olá ${nome}. Seja bem vindo`
}

console.log(multiplicacao(5, 54));
console.log(saudacao('Alexander'));