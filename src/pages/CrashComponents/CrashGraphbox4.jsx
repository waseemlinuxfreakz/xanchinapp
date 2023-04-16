import React from 'react';
import BeatRank from '../bigsmallComponents/BeatRank';
import Graph from '../../assets/img/graph/graph_line.png';
import BeatColorList from './BeatColorList';


function CrashGraphbox3() {
    return (
        <div className="crashGraphBox bigsmallBet">
            <BeatRank />
            <br />
            <div className="crashGraphInner">
                <BeatColorList/>
                <div className="graphBox">
                    <img src={Graph} alt="Graph" className='grapgLine' />
                    <div className="carshWin">
                        Crash @5.3 K
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrashGraphbox3;