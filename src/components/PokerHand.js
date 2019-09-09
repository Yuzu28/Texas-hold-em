import React from 'react';
import Card from './Card';


//my job is show a hand of cards

function PokerHand(props){
    console.log(props)
    let hand = props.cards.map((card,i) => {
        return(
            <Card key = {i} card={card} />

        )
    })
    return(
    // <h1>Poker Hand</h1>
    <div className="poker-hand col-sm-12">
        {hand}
        {/* <Card />
        <Card /> */}
    </div>
    )

}

export default PokerHand;