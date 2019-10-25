function tulostaTahtia(tmaara) {
    let text = "";
    let tahtia = "* ";
    for (i = 0; i < tmaara; i++) {
        for (j = 0; j < tmaara; j++) {
            text += tahtia;
        }
        text += "\n";
    }
    console.log(text);
}

function tulostaSuorakolmio(smaara, smaara2) {
    let text2 = "";
    let tahtia = "* ";
    for (i = 0; i < smaara2; i++) {
        for (j = 0; j < smaara; j++) {
            text2 += tahtia;
        }
        text2 += "\n";
    }
    console.log(text2);
}

function tulostaKolmio(kmaara) {
    let text3 = "";
    let tahtia = "* ";
    for (i = 0; i < kmaara; i++) {
        for (j = 0; j < i+1; j++) {
            text3 += tahtia;
        }
        text3 += "\n";
    }
    console.log(text3);
}

function tulostaTulos() {
    function lukusarjanSumma(lukui) {
        let tulos = (1 + lukui) * (lukui - 1 + 1) / 2;
        console.log("Lukusarjansumma: " + "\n" + tulos);
    }
    function kertoma(n) {
        let result = n;
        if (n === 0 || n === 1)
            return 1;
        while (n > 1) {
            n--; // decrementation by 1 at each iteration
            result = result * n;
    }
    console.log("Kertoma: " + "\n" + result);
    }
    lukusarjanSumma(100);
    kertoma(20);
}

console.log('Neliö:');
tulostaTahtia(4);
console.log('Suorakulmio:');
tulostaSuorakolmio(5, 3);
console.log('Kolmio:');
tulostaKolmio(5);
//tulostaTulos('lukusarjanSumma(100)');
//tulostaTulos(kertoma(20));
tulostaTulos();