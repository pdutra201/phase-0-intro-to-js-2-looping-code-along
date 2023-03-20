// Code your solutions in this file
function writeCards(name, event){
        let cards = [];
       for(let i=0; i < name.length; i++ ){
            cards[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
    }
    return cards;
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }

}