// Code your solutions in this file
for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy birrthday to me!`);
    debugger;
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);
function writeCards(names, event) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        console.log(thankYouCards[i]);
    }
    return thankYouCards;
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
countDown(8);