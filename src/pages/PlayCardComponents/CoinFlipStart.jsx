import React from 'react';

function CoinFlipStart() {
    return ( 
        <div className="startCard_area">
            <div className="select_range_area">
                <div className="play_amount">
                    <h3>Bet Amount</h3>
                    <div className="theAmount"><input type="number" placeholder='10.12345678'/>DIME</div>
                </div>
                <div className="selectRange">
                    <input type="range" />
                </div>
            </div>
            <div className="higherLower_box">
                <div className="higherLower">
                    <p>Head</p>
                    <span className='color-orange'>2X</span>
                </div>
                <div className="higherLower">
                    <p>Tail</p>
                    <span className='color-orange'>2X</span>
                </div>
            </div>
            <a href="/coin-flip-2" className='BlueBtn'>Start Game</a>
        </div>
     );
}

export default CoinFlipStart;