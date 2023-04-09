import React from 'react';
import Game1 from '../../assets/img/card/game-1.png';
import Game2 from '../../assets/img/card/game-2.png';
import Game3 from '../../assets/img/card/game-3.png';
import Game4 from '../../assets/img/card/game-4.png';
import Game5 from '../../assets/img/card/game-5.png';
import Game6 from '../../assets/img/card/game-6.png';

function GameCardList() {
    return ( 
        <div className="gameCardList row">
            <div className="col-4">
                <div className="gameCardItem">
                    <h2>Gourd</h2>
                    <div className="gameCardItemImg">
                        <img src={Game1} alt="" />
                        <div className="gameCardNumber">356,889,565</div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="gameCardItem">
                    <h2>Crab</h2>
                    <div className="gameCardItemImg">
                        <img src={Game2} alt="" />
                        <div className="gameCardNumber">356,889,565</div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="gameCardItem">
                    <h2>Fish</h2>
                    <div className="gameCardItemImg">
                        <img src={Game3} alt="" />
                        <div className="gameCardNumber">356,889,565</div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="gameCardItem">
                    <h2>Roaster</h2>
                    <div className="gameCardItemImg">
                        <img src={Game4} alt="" />
                        <div className="gameCardNumber">356,889,565</div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="gameCardItem">
                    <h2>shrimp</h2>
                    <div className="gameCardItemImg">
                        <img src={Game5} alt="" />
                        <div className="gameCardNumber">356,889,565</div>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="gameCardItem">
                    <h2>Deer</h2>
                    <div className="gameCardItemImg">
                        <img src={Game6} alt="" />
                        <div className="gameCardNumber">356,889,565</div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default GameCardList;