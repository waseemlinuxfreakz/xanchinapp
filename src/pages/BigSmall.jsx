import React from 'react';
import BigSmallHeader from '../headerfooter/BigSmallHeader';
import UserBettingList from './bigsmallComponents/UserBettingList';
import BigSmallBet from './bigsmallComponents/BigSmallBet';

import DipositePopup from '../pages/bigsmallComponents/DipositePopup';
import WithdrawPopup from '../pages/bigsmallComponents/WithdrawPopup';

function BigSmall() {
    return ( 
        <div className='PageWraper bigSmallWrap'>
            <BigSmallHeader/>
            <section className="bigSmallGame_area affilate_area">
                <div className="bigSmallGame_container">
                            
                    <div className="bismlDipoWith MobileDipoWith">
                        <DipositePopup/>   
                        <WithdrawPopup/>   
                    </div>
                    <div className="bigSmallGameRow row">
                        <div className="col-xl-8">
                            <BigSmallBet/>
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

export default BigSmall;