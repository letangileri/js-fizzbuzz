// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// #Preparazione


// #Elaborazione


// #Output

for (let i = 0; i <= 100; i++) {
    //controllo i multipli di 3
    if (i%3 == 0){
        console.log(`Fizz ${i}`);
    } 
    //controllo i multipli di 3 e di 5
    if (i%3 == 0 && i%5 == 0){
        console.log(`FizzBuss ${i}`);
    }
}


const numero_0 = 0;
console.log(numero_0);

const numero_1 = 1;
console.log(numero_1);

const numero_2 = 2;
console.log(numero_2);

const numero_3 = 3;
console.log(numero_3);

const numero_4 = 4;
console.log(numero_4);

const numero_5 = 5;
console.log(numero_5);

const numero_6 = 6;
console.log(numero_6);

const numero_7 = 7;
console.log(numero_7);

const numero_8 = 8;
console.log(numero_8);

const numero_9 = 9;
console.log(numero_9);


if((numero_0%3 == 0) || (numero_1%3 == 0) || (numero_2%3 == 0) ||
(numero_3%3 == 0) ||(numero_4%3 == 0) ||(numero_5%3 == 0) ||(numero_6%3 == 0) ||
(numero_7%3 == 0) ||(numero_8%3 == 0) ||(numero_9%3 == 0)){
    console.log("Fizz");
}