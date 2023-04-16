import React from 'react';

import BeatRank from '../bigsmallComponents/BeatRank';
import GameCounterCircle from './GameCounterCircle';
import BaccaratPlayerBanker from './BaccaratPlayerBanker';
import Card1 from '../../assets/img/Card-1.png';
import Card2 from '../../assets/img/card-2.png';

function BaccaratGame2() {
    return ( 
        <div className="BaccaratGame_box">
            <BeatRank/>
            <div className="BaccaratGameTop row">
                <div className="col-3">
                    <div className="playerCardBox">
                        <p>Player</p>
                        <div className="playerCardBoxInner imageActive">
                            <img src={Card1} alt="Card" />
                            <img src={Card1} alt="Card" />
                            <img src={Card1} alt="Card" />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="GameCounterCircleCol">
                        <GameCounterCircle/>
                    </div>
                </div>
                <div className="col-3">
                    <div className="playerCardBox">
                        <p>Player</p>
                        <div className="playerCardBoxInner imageActive">
                            <img src={Card1} alt="Card" />
                            <img src={Card1} alt="Card" />
                            <img src={Card1} alt="Card" />
                        </div>
                    </div>
                </div>
            </div>
            <BaccaratPlayerBanker/>
        </div>
     );
}

export default BaccaratGame2;