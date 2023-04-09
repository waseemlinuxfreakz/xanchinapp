import React from 'react';

import Card1 from '../../assets/img/card/card-1.png';
import Card2 from '../../assets/img/card/card-2.png';
import Card3 from '../../assets/img/card/card-3.png';

function GameCardStartWill() {
    return ( 
        <div className="gameCardStart">
            <div className="gameCounter">
                <h2 className=''>50</h2>
                <p>Game will be start after </p>
            </div>
            <div className="gameStartCardBox">
                <div className="gameWillCard">
                    <img src={Card1} alt="" />
                </div>
                <div className="gameWillCard">
                    <img src={Card2} alt="" />
                </div>
                <div className="gameWillCard">
                    <img src={Card3} alt="" />
                </div>
            </div>
        </div>
     );
}

export default GameCardStartWill;