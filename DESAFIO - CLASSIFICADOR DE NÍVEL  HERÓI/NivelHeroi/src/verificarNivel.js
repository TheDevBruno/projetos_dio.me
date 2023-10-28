let nameHero = "PrettoBatman";
let xp = 9999;
let xpNivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if (xp <= 1000) {
    console.log("O Herói de nome " + nameHero + "está no nível de " + xpNivel[0])
} else if (xp == 1001 || xp <= 2000) {
    console.log("O Herói de nome " + nameHero + "está no nível de " + xpNivel[1])
} else if (xp == 2001 || xp <= 5000) {
    console.log("O Herói de nome " + nameHero + "está no nível de " + xpNivel[2])
} else if (xp == 6001 || xp <= 7000) {
    console.log("O Herói de nome " + nameHero + "está no nível de " + xpNivel[3])
} else if (xp == 7001 || xp <= 8000) {
    console.log("O Herói de nome " + nameHero + "está no nível de " + xpNivel[4])
} else if (xp == 8001 || xp <= 9000) {
    console.log("O Herói de nome " + nameHero + "está no nível de " + xpNivel[5])
} else if (xp == 9001 || xp <= 10000) {
    console.log("O Herói de nome " + nameHero + "está no nível de " + xpNivel[6])
} else {
    console.log("O Herói de nome " + nameHero + "está no nível de " + xpNivel[7])
}