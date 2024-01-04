class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi('Connan', 37, 'guerreiro');
const heroi2 = new Heroi('Caelan', 120, 'mago');
const heroi3 = new Heroi('Cherter ', 50, 'monge');
const heroi4 = new Heroi('Kato Danzo', 22, 'ninja');

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();