import React from 'react';

function BaccaratGameStartDeal() {
    return ( 
        <div className="beatStartBottom BaccaratGameStart">
            <div className="flexBox">
                <div className="box2">/2</div>
                <div className="inputCol">
                    <input type="text" value={265,656,656} />
                </div>
                <div className="box2">x2</div>
            </div>
            <button className="BlueBtn">Bet</button>
            <button className="RedBtn dealBtn">Deal the card</button>
        </div>
     );
}

export default BaccaratGameStartDeal;