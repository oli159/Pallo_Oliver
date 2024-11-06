
function osszesOszto(szam: number): number[] {
    const osztok: number[] = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i);
        }
    }
    return osztok;
}

function parosDarab(tomb: number[]): number {
    let parosSzamokSzama = 0;
    for (const szam of tomb) {
        if (szam % 2 === 0) {
            parosSzamokSzama++;
        }
    }
    return parosSzamokSzama;
}


function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    const szoveg: string = fuggveny(); 

    
    let tisztitottSzoveg: string = "";
    for (let i = 0; i < szoveg.length; i++) {
        if (szoveg[i] !== " ") {
            tisztitottSzoveg += szoveg[i];
        }
    }

 
    let visszaforditottSzoveg: string = "";
    for (let j = tisztitottSzoveg.length - 1; j >= 0; j--) {
        visszaforditottSzoveg += tisztitottSzoveg[j];
    }

   
    if (tisztitottSzoveg === visszaforditottSzoveg) {
        return true; 
    } else {
        return false;
    }
}