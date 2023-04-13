import React from 'react';
import BeatRank from '../bigsmallComponents/BeatRank';
import Rocket from '../../assets/img/graph/rocket.png';
import BeatColorList from './BeatColorList';

function CrashGraphbox3() {
    return (
        <div className="CrashColorGame bigsmallBet">
            <BeatRank />
            <br />
            <div className="crashGraphInner">
                <div className="graphBox">
                    <BeatColorList/>
                    <div className="newGameWill game_Counter">
                        <h2>50</h2>
                        <p>New game round will be start after  </p>
                    </div>
                    <img src={Rocket} alt="Graph" className='rocket' />
                </div>
            </div>
        </div>
    );
}

export default CrashGraphbox3;