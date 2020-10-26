//nome, energia, vida, ataque, defesa
import prompt from 'prompt-sync';
export class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {}
}