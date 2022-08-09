import { useState, useEffect } from "react";
import axios from "axios"
import React from "react";
// let link = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
let link = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician'
// let img = deck.card_images[0].image_url

function Deck() {
    const [ deck , setDeck] = useState([]); // only when you use setDeck/updates, render only when setDeck().
    useEffect(() => {
        axios.get(link).then((data) => {

            setDeck(data.data.data[0])
        })
    },[]) // [] == useEffect only when it mounts (commponent did mount)
    const checkDeck = () => {
        if (deck.card_images !== undefined) {
            return deck.card_images[0].image_url
        } else {
            return ''
        }
    }

    let img2 = checkDeck()

    return (
        <div>
            {deck.name}
            <br></br>
            {deck.archetype}
            <br></br>
            <img src={img2}/>
            <br></br>
            {deck.desc}
            {deck.card_prices}
        </div>
    )
}

export default Deck