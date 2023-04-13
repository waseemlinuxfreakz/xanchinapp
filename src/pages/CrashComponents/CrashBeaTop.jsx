import React from 'react';

function CrashBeaTop () {
    return ( 
        <div className="CrashBeaTop">
            <div className="radioBox">
                <input type="radio" name='BeatOn' id='BeatOnValue' checked />
                <label htmlFor="BeatOnValue"><span className='radioCircle'></span>   Bet On Value</label>
            </div>
            <div className="radioBox">
                <input type="radio" name='BeatOn' id='BeatOnColor' />
                <label htmlFor="BeatOnColor"><span className='radioCircle'></span>   Bet On Color</label>
            </div>
        </div>
     );
}

export default CrashBeaTop ;