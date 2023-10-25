// Stampare numeri da 0 a 10
// Condizione di uscita i supera 10
// for(let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// let i = 0; 
// while(i <= 10) {
//     // Il codice viene eseguito finché la condizione sia vera
//     // i = 11
//     console.log(i);
//     i++;
// }

// console.log("fuori");

// Stampare elementi di array
// const myArray = ["mele", "pere", "arancie"];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// let i = 0;
// while(i < myArray.length) {
//     console.log(myArray[i]);
//     i++;
// }

// Ricerca di un elemento all'interno dell'array

// const myArray = ["mele", "pere", "arancie", "kiwi", "mandarini"];

// const userFruit = prompt("Dimmi che frutta vuoi");

// let found = false;

// for(let i = 0; i < myArray.length; i++) {
//     const curFruit = myArray[i];
//     if(curFruit === userFruit) {
//         found = true;
//     }
//     console.log(i, found);
// }

// if (found) {
//     console.log("trovato");
// } else {
//     console.log("non trovato");
// }


// Implementazione con ciclo while
// const myArray = ["mele", "pere", "arancie", "kiwi", "mandarini"];

// const userFruit = prompt("Dimmi che frutta vuoi"); // mele

// let i = 0;
// let found = false; // true

// // Andiamo avanti finchè i minore della lnghezza E found è uguale a false
// //         1 < 5 && false
// while(i < myArray.length && !found) {
//     console.log(i);
//     const curFruit = myArray[i]; // mele
//     if(curFruit === userFruit) {
//         found = true;
//     }
//     i++; // i = 1
// }

// console.log(found);

// Creare array di 10 numeri random compresi tra 1 e 20, ma diversi tra di loro;
// const numbersArray = [];
// for (let i = 0; i < 10; i++) {
//     const rndNumber = Math.floor(Math.random() * 20) + 1;
//     // Se il numero non è già presente nell'array 
//         // Lo salvo
//     if(!numbersArray.includes(rndNumber)) {
//         numbersArray.push(rndNumber)
//     }
// }

// console.log(numbersArray);

// const numbersArray = [];
// // Finchè la lunghezza dell'array è minore di 19, 
// //     generiamo il numero random
// while (numbersArray.length < 10) {
//     const rndNumber = Math.floor(Math.random() * 20) + 1;
//     if(!numbersArray.includes(rndNumber)) {
//         numbersArray.push(rndNumber);
//     }
//     console.log(rndNumber);
// }

// console.log(numbersArray);

// Chiedere all'utente un numero
// Se l'utente inserisce un valore non numerico
    // Richiedere il numero fichè non inserisce valore numerico

// let userNumber = parseInt(prompt("Dimmi un numero"));
// console.log(userNumber);

// while(isNaN(userNumber)) {
//     userNumber = parseInt(prompt("Dimmi un numero"));
//     console.log(userNumber);
// }


// let userNumber;
// do {
//     userNumber = parseInt(prompt("Dimmi un numero"));
//     console.log(userNumber);
// } while (isNaN(userNumber))

// Stampare array con ciclo for in pagina
const shoppingList = ["latte", "pane", "mortadella"];
let listString = "";

for (let i = 0; i < shoppingList.length; i++) {
    const curItem = shoppingList[i];
    listString += `<li>${curItem}</li>`;
}

document.querySelector("ul").innerHTML = listString;