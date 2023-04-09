import React from 'react';
import BetStart from './BetStart';
import GameRoundStart from './GameRoundStart';
import BigBet from './BigBet';
import SmallBet from './SmallBet';
import BeatRank from './BeatRank';

import Colorcircle from '../../assets/img/dices/color-circle.svg';

function BigSmallBet() {
    return ( 
        <div className="bigsmallBet">
            <BeatRank/>
            <div className="betResult">
                <div className="color_circle"><img src={Colorcircle} alt="Colorcircle" /></div>
                <BetStart/>
                <GameRoundStart/>
            </div>
            <div className="betrow row">
                <div className="col-6">
                    <BigBet/>
                </div>
                <div className="col-6">
                    <SmallBet/>
                </div>
            </div>
        </div>
     );
}

export default BigSmallBet;