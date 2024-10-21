// Code your solutions in this file
const names = ["Antony", "Beverley", "Faith", "Bob", "George", "Dalton"];
const messages = [];

function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        messages.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}

countDown(10);