import React from 'react';

function SmallBet() {
    return ( 
        <div className="betColBox">
            <div className="betTitle">
                Small
            </div>
            <div className="betUser">
                989,556,565
                <span className='color-ornage'>650 user</span>
            </div>
            <div className="betCounters inputCol">
                <input type="nuber" value={265,656,656}  />
            </div>
            <button type='button' className='BlueBtn'>Bet</button>
        </div>
     );
}

export default SmallBet;