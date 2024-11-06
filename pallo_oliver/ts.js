function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(tomb) {
    var parosSzamokSzama = 0;
    for (var _i = 0, tomb_1 = tomb; _i < tomb_1.length; _i++) {
        var szam = tomb_1[_i];
        if (szam % 2 === 0) {
            parosSzamokSzama++;
        }
    }
    return parosSzamokSzama;
}
function fuggvenyhivasPalindrom(fuggveny) {
    var szoveg = fuggveny();
    var tisztitottSzoveg = "";
    for (var i = 0; i < szoveg.length; i++) {
        if (szoveg[i] !== " ") {
            tisztitottSzoveg += szoveg[i];
        }
    }
    var visszaforditottSzoveg = "";
    for (var j = tisztitottSzoveg.length - 1; j >= 0; j--) {
        visszaforditottSzoveg += tisztitottSzoveg[j];
    }
    if (tisztitottSzoveg === visszaforditottSzoveg) {
        return true;
    }
    else {
        return false;
    }
}
