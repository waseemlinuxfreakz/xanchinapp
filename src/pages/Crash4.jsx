import React from 'react';
import ShakeDishHeader from '../headerfooter/ShakeDishHeader';
import DipositePopup from '../pages/bigsmallComponents/DipositePopup';
import WithdrawPopup from '../pages/bigsmallComponents/WithdrawPopup';
import CrashUserBettingValue from './CrashComponents/CrashUserBettingList';
import CrashUserBettingColor from './CrashComponents/CrashUserBettingColor';
import CrashGraphbox4 from './CrashComponents/CrashGraphbox4';
import CrashBeatOnColor from './CrashComponents/CrashBeatOnColor';
import CrashBeaTop from './CrashComponents/CrashBeaTop';


function Crash4() {
    return ( 
        <div className='PageWraper bigSmallWrap gameCardWraper sec'>
            <ShakeDishHeader/>
            <section className="bigSmallGame_area affilate_area">
                <div className="bigSmallGame_container">
                    <div className="bismlDipoWith MobileDipoWith">
                        <DipositePopup/>   
                        <WithdrawPopup/>   
                    </div>
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <div className="beatingGround">
                                <CrashGraphbox4/>
                                <CrashBeaTop/>
                                <CrashBeatOnColor/>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="crashBeatCol">
                                <CrashUserBettingValue/>
                                <br />
                                <CrashUserBettingColor/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default Crash4;