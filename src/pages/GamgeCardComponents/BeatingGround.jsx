import React from 'react';
import BeatRank from '../bigsmallComponents/BeatRank';
import GameCardList from './GameCardList';


function BeatingGround() {
    return ( 
        <div className="bigsmallBet">
            <BeatRank/>
            <GameCardList/>
        </div>
     );
}

export default BeatingGround;