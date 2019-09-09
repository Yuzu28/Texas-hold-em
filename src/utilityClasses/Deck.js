//No extend because this is not a component
//This is just some OOP Javascript

class Deck{
    constructor(){
        //no need to call super, becasue... no extends
        this.cards = [];
    }

    create(){
        //I make a new deck of cards from nothings
        //a card has a number and a suit
        //two loops: one for suit , one for value
        const suits = ['h','s','d','c'];
        suits.forEach((suit) => {
            for(let c = 1; c <=13; c++){
                //push onto this.deck, c + suit
                this.cards.push(c+suit);
            }
        })
    }

    shuffle(){
        //I take new deck and shuffle it
        console.log("shuffling");
        for(let i=0; i < 1000000; i++){
        let rand1 = Math.floor(Math.random()  * 52);
        let rand2 = Math.floor(Math.random() * 52);
        //store the value in this.deck[rand1] in a temp var
        let temp = this.cards[rand1];
        this.cards[rand1] = this.cards[rand2]
        this.cards[rand2] = temp;
        }
    }

}

export default Deck;