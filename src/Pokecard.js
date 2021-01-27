import React from "react";
import "./Pokecard.css"

const Pokecard = ({name, type, base_experience, id}) => {
    const types = {
        fire: 'red',
        water: 'blue',
        grass: 'green',
        normal: '#aaaa8a',
        poison: 'purple',
        bug: 'yellowgreen',
        electric: '#f0e130',
        flying: '#505050'
    }

    return (<div className="Pokemon">
        <h4 className="poke-name">{name}</h4>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon-sprite"/>
        <p className="poke-type" style={{color: types[type]}}>Type:{type}</p>
        <p>Exp: {base_experience}</p>
    </div>)
}

export default Pokecard