import prompt from 'prompt-sync';
import { Personagem } from './Personagem';

let vetorPersonagens: Personagem[] = [];

function createPersonagem(nome: string, energia: number, vida: number, ataque: number, defesa: number, vetorPersonagens: string): Personagem  {
    let personagem: Personagem = new Personagem(nome, energia, vida, ataque, defesa);
    eval(`${vetorPersonagens}.push(${personagem})`)
    return personagem
}

let sansa: Personagem = createPersonagem('Sansa Stark', 100, 40, 20, 20, 'vetorPersonagens');

let teclado = prompt();

let option: number = 0;

while (option != 9) {
    console.log('+========= Personagem =============+');
    console.log('|1. Treinar ataque                 |');
    console.log('|2. Treinar defesa                 |');
    console.log('|3. Imprimir atributos             |');
    console.log('|9. Sair                           |');
    console.log('+==================================+');

    option = +teclado('Escolha uma ação');

    switch (option) {
        case 1:
            sansa.ataque += 2;
            break;
        case 3:
            console.log('sansa :>> ', sansa);
            break;
        default:
            break;
    }
}
