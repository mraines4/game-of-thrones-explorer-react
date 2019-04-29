import React from 'react';

function CharacterDetail({chosen}) {
    return (
        <div>
        <h1>
            Name: {chosen.name}
        </h1>
        <h3>
            Aliases: {chosen.aliases[0] ? chosen.aliases.map(alias => alias).join(', ') : "None"}
        </h3>
        <h3>
            Born: {chosen.born ? chosen.born : 'Not Known'}
        </h3>
        <h3>
            Titles: {chosen.titles[0] ? chosen.titles.map(title => title).join(', ') : "None"}
        </h3>
        </div>
    )
}

export default CharacterDetail;