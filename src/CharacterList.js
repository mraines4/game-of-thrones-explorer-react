import React from 'react';

function CharacterList({characters, handleClick}) {
    return (
        <>
        {characters.map((char, i) => {
            return <button key={i} onClick={e => handleClick(char)}>{char.name}</button>
        })}
        </>
    )
}

export default CharacterList;
