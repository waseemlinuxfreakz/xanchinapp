import React from 'react';

import GameCardHeader from '../headerfooter/GameCardHeader';
import GameResult from './MiniPokerComponents/GameResult';
import PokerReward from './MiniPokerComponents/PokerReward';

function MiniPoker() {
    return ( 
        <div className='PageWraper pokerRewardWraper'>
            <GameCardHeader/>
            <GameResult/>
            <section className="poker_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="poker_box_area">
                                <div className="poker_box">
                                    <div className="poker_title beatRankg">Jackpot : 25,566</div>
                                    <div className="poker_cards row">
                                        <div className="col">
                                            <div className="pokerCardItem">
                                                
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="pokerCardItem">
                                                
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="pokerCardItem">
                                                
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="pokerCardItem">
                                                
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="pokerCardItem">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="poker_dimeBtn">
                                        <div className="row">
                                            <div className="col">
                                                <button type='button' className='dimeBtn'>0.5 DIME</button>
                                            </div>
                                            <div className="col">
                                                <button type='button' className='dimeBtn'>1 DIME</button>
                                            </div>
                                            <div className="col">
                                                <button type='button' className='dimeBtn'>5 DIME</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="poker_Spin_btns dualBtn">
                                    <a href="/daily-spin" className='BlueBtn'>Spin</a>
                                    <a href="/daily-spin" className='RedBtn'>Auto Spin</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <PokerReward/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default MiniPoker;