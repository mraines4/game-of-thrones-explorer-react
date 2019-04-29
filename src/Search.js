import React from 'react';

function Search({handler}) {
    return (
        <input onChange={e => handler(e.target.value)}></input>
    )
}

export default Search;