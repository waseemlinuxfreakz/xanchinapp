import React from 'react';
import ShakeDishHeader from '../headerfooter/ShakeDishHeader';
import DipositePopup from '../pages/bigsmallComponents/DipositePopup';
import WithdrawPopup from '../pages/bigsmallComponents/WithdrawPopup';
import CrashUserBettingValue from './CrashComponents/CrashUserBettingList';
import CrashUserBettingColor from './CrashComponents/CrashUserBettingColor';
import CrashGraphbox from './CrashComponents/CrashGraphbox';
import CrashBeatOn from './CrashComponents/CrashBeatOn';
import CrashBeaTop from './CrashComponents/CrashBeaTop';


function Crash() {
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
                            <div className="beatingGround">
                                <CrashGraphbox/>
                                <CrashBeaTop/>
                                <CrashBeatOn/>
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

export default Crash;