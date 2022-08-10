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
    
    // const checkDeck = () => {
    //     if (deck.card_images !== undefined) {
    //         return deck.card_images[0].image_url
    //     } else {
    //         return ''
    //     }
    // }
    
    console.log(deck)
    const checkDeck = deck.card_images ? deck.card_images[0].image_url : ''
    const checkPrices = deck.card_prices ? deck.card_prices[0] : []
    const checkSets = deck.card_sets ? deck.card_sets : []
    // const prices = checkPrices.map(price => <li>price</li>)
    const prices = Object.entries(checkPrices).map((k,v) => <li key={v}>{k[0].split("_")[0]}: ${k[1]}</li>)
    const sets = Object.entries(checkSets).map((k,v) => Object.entries(k[1])).map((a,i) => <div> 
        <b>Name</b>: {a[0][1]} 
        <b>Code:</b> {a[1][1]} 
        <b>Price:</b> {a[1][1]} 
        <b>Rarity:</b> {a[1][1]} 
        <b>Rarity Code:</b> {a[1][1]} 
        </div>
    )
    return (
        <div>
            Name: {deck.name}
            <br></br>
            Archtype: {deck.archetype}
            <br></br>
            <img src={checkDeck}/>
            <br></br>
            Description: {deck.desc}
            Prices: {prices}
            Sets: {sets}
        </div>
    )
}

export default Deck