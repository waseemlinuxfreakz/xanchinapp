import React from 'react';

import Coin1 from '../../assets/img/coin/coin-1.svg';
import Coin2 from '../../assets/img/coin/coin-2.svg';

function CoinFlipBox() {
    return ( 
        <div className="coinFlip_area">
            <div className="flipBox">
                <div className="coinFlipCircle">
                    {/* <img src={} alt="" /> */}
                </div>
                <div className="coinHeadTails">
                    <div className="coinHeTe">
                        <img src={Coin2} alt="Coin" /> Heads
                    </div>
                    <div className="coinHeTe">
                        <img src={Coin1} alt="Coin" /> Tails
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CoinFlipBox;