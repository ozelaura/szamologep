function szamolas(muvelet) {
    let szam1 = parseInt(document.getElementById("elso").value);
    let szam2 = parseInt(document.getElementById("masodik").value);
    let eredmeny = 0.0;
    switch (muvelet) {
        case "+":
            eredmeny = szam1 + szam2;
            break;
        case "-":
            eredmeny = szam1 - szam2;
            break;
        case "*":
            eredmeny = szam1 * szam2;
            break;
        case "/":
            eredmeny = szam1 / szam2;
            break;
        default:
            break;
    }
    document.getElementById("eredmeny").innerHTML = eredmeny;
}