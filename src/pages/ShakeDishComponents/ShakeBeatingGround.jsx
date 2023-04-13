import React from 'react';
import BeatRank from '../bigsmallComponents/BeatRank';
import ShakeDishCard from './ShakeDishCard';


function ShakeBeatingGround() {
    return ( 
        <div className="bigsmallBet">
            <BeatRank/>
            <ShakeDishCard/>
        </div>
     );
}

export default ShakeBeatingGround;