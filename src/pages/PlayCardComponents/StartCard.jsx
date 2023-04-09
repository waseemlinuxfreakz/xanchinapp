import React from 'react';

function StartCard() {
    return ( 
        <div className="startCard_area">
            <div className="select_range_area">
                <div className="play_amount">
                    <h3>Bet Amount</h3>
                    <div className="theAmount">10.12345678 DIME</div>
                </div>
                <div className="selectRange">
                    <input type="range" />
                </div>
            </div>
            <div className="higherLower_box">
                <div className="higherLower">
                    <p>Higher</p>
                    <span className='color-orange'>2X</span>
                </div>
                <div className="higherLower">
                    <p>Lower</p>
                    <span className='color-orange'>2X</span>
                </div>
            </div>
            <button className='BlueBtn startGameBtn'>Start Game</button>
            <br/>
            <a href="/bankroll" className='BlueBtn'>Cashout</a>
        </div>
     );
}

export default StartCard;