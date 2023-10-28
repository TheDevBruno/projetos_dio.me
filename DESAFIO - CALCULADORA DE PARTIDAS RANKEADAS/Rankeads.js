let vitorias = 26, derrotas = 12, saldo;

function RankePartidas(vitorias, derrotas) {
    
    saldo = vitorias - derrotas;

    let rank;

    switch (rank) {
    
        case saldo <= 10:
            rank = "ferro";
            console.console.log("O Herói tem de saldo de " + saldo + ", está no nível de " + rank);
        break;
        
        case saldo >= 11 && saldo <=20:
            rank = "Bronze";
            console.console.log("O Herói tem de saldo de " + saldo + ", está no nível de " + rank);
        break;
        
        case saldo >= 21 && saldo <=50:
            rank = "Prata";
            console.console.log("O Herói tem de saldo de " + saldo + ", está no nível de " + rank);
        break;
        
        case saldo >= 51 && saldo <=80:
            rank = "Ouro";
            console.console.log("O Herói tem de saldo de " + saldo + ", está no nível de " + rank);
        break;
        
        case saldo >= 81 && saldo <=90:
            rank = "Diamante";
            console.console.log("O Herói tem de saldo de " + saldo + ", está no nível de " + rank);
        break;
        
        case saldo >= 91 && saldo <=100:
            rank = "Lendário";
            console.console.log("O Herói tem de saldo de " + saldo + ", está no nível de " + rank);
        break;
        
        default:
            rank = "Imortal";
            return 'O Herói tem de saldo de ${saldo} Vitórias, está no nível de ${rank}.';
        break;
    }

    const resulado = rank(vitorias, derrotas);
        console.log(resulado);

}
