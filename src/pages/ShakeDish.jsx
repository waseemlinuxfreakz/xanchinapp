import React from 'react';
import ShakeDishHeader from '../headerfooter/ShakeDishHeader';

import UserBettingList from './ShakeDishComponents/UserBettingList';
import DipositePopup from '../pages/bigsmallComponents/DipositePopup';
import WithdrawPopup from '../pages/bigsmallComponents/WithdrawPopup';
import GameCardStartWill from './ShakeDishComponents/GameCardStartWill';
import BeatStart from './ShakeDishComponents/BeatStart';
import ShakeBeatingGround from './ShakeDishComponents/ShakeBeatingGround';

function ShakeDish() {
    return ( 
        <div className='PageWraper bigSmallWrap gameCardWraper'>
            <ShakeDishHeader/>
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
                                    <ShakeBeatingGround/>
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

export default ShakeDish;
