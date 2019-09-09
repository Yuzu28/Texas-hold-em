import React, {Component } from 'react';
import PokerHand from './PokerHand';
import Deck from '../utilityClasses/Deck'
import './PokerTable.css';
import { userInfo } from 'os';

class PokerTable extends Component{
    constructor(){
        super();
        this.deck = new Deck();
        this.deck.create();
        this.deck.shuffle();
        console.log(this.deck.cards);
        this.state = {
            playerHand: [],
            dealerHand: [],
            communityhand: []
        }
    }

    // this method is made by userInfo, not a react method
    prepDeck = () => {
        
        const card1 = this.deck.cards.shift();
        const card2 = this.deck.cards.shift();
        const card3 = this.deck.cards.shift();
        const card4 = this.deck.cards.shift();

        // at this PointerEvent, this.deck.cards has 48 elements in it
        //because we removed 4
        this.setState({
            playerHand: [card1, card3],
            dealerHand: [card2, card4],
        })


    };

    render(){
        return(
            <div className="the-table col-sm-12">
                {/* <h1>Hello</h1> */}
                <PokerHand  cards={this.state.playerHand} /> 
                <PokerHand cards={this.state.communityhand} />
                <PokerHand cards={this.state.dealerHand}/>
                <button onClick={this.prepDeck} className="btn btn-primary">Start</button>
            </div>
        )
    }
}


export default PokerTable;
