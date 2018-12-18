import React from 'react';
import './style.css';

const PlayerCard = props => (
    <div className="player-card" value={props.id} onClick={() => props.handleClick(props.id)}>
        <img src={props.image} alt={props.name}/>
    </div>
);

export default PlayerCard;