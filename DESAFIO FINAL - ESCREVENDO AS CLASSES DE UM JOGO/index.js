class heroi{
    construtor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo 
    }

    atacar(){
        let ataque;

        switch (ataque) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes maciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
        
            default:
                ataque = 'atacou'
                break;
        }

        console.log('o ${this.tipo} atacou usando ${ataque}');
    }
}
