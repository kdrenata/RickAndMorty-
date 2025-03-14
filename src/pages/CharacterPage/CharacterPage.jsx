import s from "./CharacterPage.module.css"

import {useEffect, useState} from "react";
import axios from "axios";

export const CharacterPage = () => {

    const [characters, setCharacters] = useState([])
    // debugger

    useEffect(() => {
    // debugger
        axios.get('https://rickandmortyapi.com/api/character').then((res) => {
            // debugger
            console.log(res.data);
            setCharacters(res.data.results);
        })
    }, [])

    // debugger
    return (
        <div className={'pageContainer'}>
            <h1 className={'pageTitle'}>CharacterPage</h1>
            {characters.length && (
                <div className={s.characters}>
                    {
                        characters.map( (character) => {
                            // debugger
                            return (
                                <div key={character.id} className={s.character}>
                                    <div className={s.characterLink}>{character.name}</div>
                                    <img src={character.image} alt={`${character.name} avatar`}/>
                                </div>
                            )
                        })
                    }
                </div>

            )}
        </div>
    )
}