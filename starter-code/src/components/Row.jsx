
import React from 'react';
import './Row.css'

const Row = (props) => {
    return (
        <tr>
            <th><img className="picture" src={props.pictureUrl} alt=""/></th>
            <th className = "name">{props.name}</th>
            <th className = "popularity">{props.popularity}</th>
        </tr>

    );
}

export default Row;