import React from 'react';
import BeatRank from '../bigsmallComponents/BeatRank';
import Graph from '../../assets/img/graph/graph2.png';

function CrashGraphbox2() {
    return (
        <div className="crashGraphBox bigsmallBet">
            <BeatRank />
            <br />
            <div className="crashGraphInner">
                <div className="graphBox">
                    <img src={Graph} alt="Graph" className='grapgLine' />
                </div>
            </div>
        </div>
    );
}

export default CrashGraphbox2;