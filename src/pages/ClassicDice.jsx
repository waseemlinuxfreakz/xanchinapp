import React from 'react';
import ClassucUserBettingList from './ClassicDiceComponents/ClassucUserBettingList';
import GameCardHeader from '../headerfooter/GameCardHeader';
import Close from '../assets/img/icons/close.svg';
import exchange from '../assets/img/icons/exchange.svg';

function ClassicDice() {
    return ( 
        <div className='PageWraper bigSmallWrap PlayCardWraper'>
            <GameCardHeader/>
            <section className="clasicdice_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="classicDiscBox">
                                <div className="classic_disc">
                                    <div className="numberList">
                                        <span className='greenNumber NumberItem'>50.88</span>
                                        <span className='greenNumber NumberItem'>50.88</span>
                                        <span className='redNumber NumberItem'>80.88</span>
                                        <span className='greenNumber NumberItem'>50.88</span>
                                        <span className='greenNumber NumberItem'>50.88</span>
                                        <span className='redNumber NumberItem'>80.88</span>
                                        <span className='greenNumber NumberItem'>50.88</span>
                                        <span className='redNumber NumberItem'>80.88</span>
                                        <span className='redNumber NumberItem'>80.88</span>
                                    </div>
                                    <div className="winBox">
                                        <span className='winTitle'>Win</span>
                                        <h3 className="winNumber">2656.2656</h3>
                                    </div>
                                    <div className="winRange selectRange">
                                        <input type="range" />
                                    </div>
                                </div>
                                <div className="PayOutRoll_box">
                                    <div className="PayOutRoll">
                                        <div className="row">
                                            <div className="col-6">
                                                 <div className="PayOutRollItem">
                                                    <p>Pay Out</p>
                                                    <div className="payOutInput">
                                                        <input type="number" placeholder='3.00' />
                                                        <img src={Close} alt="" />
                                                    </div>
                                                 </div>
                                            </div>
                                            <div className="col-6">
                                                 <div className="PayOutRollItem">
                                                    <p>Roll under</p>
                                                    <div className="payOutInput">
                                                        <input type="number" placeholder='42.00' />
                                                        <img src={exchange} alt="" />
                                                    </div>
                                                 </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="classicDiscBeat">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="select_range_area">
                                            <div className="play_amount">
                                                <h3>Balance</h3>
                                                <div className="theAmount">2.56 X</div>
                                            </div>
                                            <div className="selectRange">
                                                <input type="range" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="WinAmountArea">
                                            <div className="WinAmountBox select_range_area">
                                                <div className="play_amount">
                                                    <h3>Win Amount</h3>
                                                    <span className='WinAmount'>2.56 X</span>
                                                </div>
                                            </div>
                                            <a href="/mini-poker" className='BlueBtn w-100'>Roll Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <ClassucUserBettingList/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default ClassicDice;