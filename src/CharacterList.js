import React from 'react';

function CharacterList({characters}) {
    return (
        <>
        {characters.map((char, i) => {
            return <button key={i} >{char.name}</button>
        })}
        </>
    )
}

export default CharacterList;