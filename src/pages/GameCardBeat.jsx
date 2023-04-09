import React from 'react';
import GameCardHeader from '../headerfooter/GameCardHeader';
import UserBettingList from './bigsmallComponents/UserBettingList';
import DipositePopup from '../pages/bigsmallComponents/DipositePopup';
import WithdrawPopup from '../pages/bigsmallComponents/WithdrawPopup';
import BeatingGround from './GamgeCardComponents/BeatingGround';
import GameCardStartWill from './GamgeCardComponents/GameCardStartWill';
import BeatStart from './GamgeCardComponents/BeatStart';


function GameCardBeat() {
    return ( 
        <div className='PageWraper bigSmallWrap gameCardWraper'>
            <GameCardHeader/>
            <section className="bigSmallGame_area affilate_area">
                <div className="bigSmallGame_container">
                    <div className="bismlDipoWith MobileDipoWith">
                        <DipositePopup/>   
                        <WithdrawPopup/>   
                    </div>
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <div className="beatingGroundRow row">
                                <div className="beatingGround">
                                    <BeatingGround/>
                                    <BeatStart/>
                                </div>
                                <div className="gameStartWill">
                                    <GameCardStartWill/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <UserBettingList/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default GameCardBeat;
