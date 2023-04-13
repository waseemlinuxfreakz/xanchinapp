import React from 'react';
import BeatRank from '../bigsmallComponents/BeatRank';
import Graph from '../../assets/img/graph/graph_line.png';

function CrashGraphbox() {
    return (
        <div className="crashGraphBox bigsmallBet">
            <BeatRank />
            <br />
            <div className="crashGraphInner">
                <div className="graphBox">
                    <img src={Graph} alt="Graph" className='grapgLine' />
                    <div class="gameCounter game_Counter">
                        <h2 class="">50</h2>
                        <p>Game will be start after </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CrashGraphbox;