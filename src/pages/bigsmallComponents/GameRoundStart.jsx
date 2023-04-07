import React from 'react';

import Dot1Red from '../../assets/img/dices/dot-1-red.svg';
import Dot4Red from '../../assets/img/dices/dot-4-red.svg';
import Dot6Red from '../../assets/img/dices/dot-6-red.svg';

function GameRoundStart() {
    return ( 
        <div className="gameRound">
            <div className="gameRoundTop">
                <span className="game_Round">10</span>
                <p>Game round will be start after </p>
            </div>
            <div className="gameroundResult">
                <img src={Dot4Red} alt="Dot Red" />
                <img src={Dot6Red} alt="Dot Red" />
                <img src={Dot1Red} alt="Dot Red" />
            </div>
        </div>
     );
}

export default GameRoundStart;