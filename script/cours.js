let whoLetTheDogOut = 2;
console.log(whoLetTheDogOut);
let grooveTonight = 42;
let letGetRetarded = "coupeDuMonde";
console.log(letGetRetarded + grooveTonight);



document.getElementById("langue").addEventListener("change", transformeLeFoot);



function transformeLeFoot() {
    let theBodyHitTheFloor = document.getElementById("langue").value;
    console.log(theBodyHitTheFloor);
    let Siuuuu = document.getElementById(letGetRetarded);

    if (theBodyHitTheFloor == "creoleHaitien") {
        Siuuuu.innerHTML = "Fotbul";
    }
    else if (theBodyHitTheFloor == "francais") {
        Siuuuu.style.color = "blue";
        Siuuuu.innerHTML = "LE foot";
        let ballonDeFoot = new Ballon ("bleu", "grand","France");
    }
    else {
        Siuuuu.innerHTML = "Futebol";
    }
}

class Ballon {
    constructor(couleur, taille, pays)
{this.couleur = couleur;
this.taille = taille;
this.pays = pays;
}
}


let mesAnimaux = ["renards", "chiens", "loups", "fennec"];
for (let animal of mesAnimaux){
    console.log ("Mon animal préféré c'est:" + animal);

}
