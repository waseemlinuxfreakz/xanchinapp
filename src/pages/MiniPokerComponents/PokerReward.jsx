import React from 'react';


function PokerReward() {
    return ( 
        <div className="pokerReward_area">
            <div className="pokerReward">
                <h2>Reward</h2>
                <ul className='rewardList'>
                    <li>Jacks or Better <span className='color-orange'>x2.5</span></li>
                    <li>Two Pair <span className='color-orange'>x2.5</span></li>
                    <li>Three of a kind <span className='color-orange'>x2.5</span></li>
                    <li>Straight <span className='color-orange'>x2.5</span></li>
                    <li>Flush <span className='color-orange'>x2.5</span></li>
                    <li>Full House <span className='color-orange'>x2.5</span></li>
                    <li>Four of a kind <span className='color-orange'>x2.5</span></li>
                    <li>Straight Flush <span className='color-orange'>x2.5</span></li>
                    <li>Full House <span className='color-orange'>x2.5</span></li>
                </ul>
            </div>
        </div>
     );
}

export default PokerReward;