let anyEstadevolta: any;
anyEstadevolta = 3;
anyEstadevolta = 'teste'
anyEstadevolta = 5;

let stringTest: string = 'verificar'
stringTest = anyEstadevolta;
let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';


if(typeof unknownValor === 'string') {
    stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): void {
    throw {error: erro, code: codigo}

}
jogaErro('deu erro', 500)

