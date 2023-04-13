import React from 'react';

function CrashBeatOn() {
    return ( 
        <div className="CrashBeaBox">
            <div className="beatAmountRow row">
                <div className="col">
                    <div className="crashBeatOn crashBeatOnAmount">
                        <div className="select_range_area">
                            <div className="play_amount beatStartBottom">
                                <h3>Amount</h3>
                                <div className="box2">/2</div>
                                <div className="inputCol"><input type="text" value="656"/></div>
                                <div className="box2">x2</div>
                            </div>
                            <div className="selectRange"><input type="range"/></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="crashBeatOn">
                        <div className="select_range_area">
                            <div className="play_amount">
                                <h3>Cash Out</h3>
                                <div className="theAmount theAmountx">
                                    <input type="text" value='2.56'/> <span> x</span>
                                </div>
                            </div>
                            <div className="selectRange"><input type="range"/></div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <a href='/Crash2' className='BlueBtn'>Place a Bet</a>
                </div>
            </div>
        </div>
     );
}

export default CrashBeatOn;