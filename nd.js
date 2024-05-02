/*Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;
*/

let pinigai = 0;
const turinys = "Pinigines turinys:";
console.log(turinys + " " + pinigai + ";" );

pinigai = pinigai + 10;
const papildymas = "Pinigine papildyta:";
console.log(papildymas + " " + pinigai + ";" );
console.log(turinys + " " + pinigai + ";" );

let pinigai2 = 90
console.log(papildymas + " " + pinigai2 + ";" );
pinigai = pinigai + pinigai2;
console.log(turinys + " " + pinigai + ";" );

