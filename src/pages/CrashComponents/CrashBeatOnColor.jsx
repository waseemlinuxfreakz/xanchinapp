import React from 'react';

import Star from '../../assets/img/icons/star.svg';

function CrashBeatOnColor() {
    return ( 
        <div className="CrashBeaBox">
            <div className="beatAmountRow row">
                <div className="col">
                    <div className="crashBeatOnColor">
                        <div className="beatAmount">
                            <h3>Amount</h3>
                            <div className="inputCol">
                                <input type="text" value="565656.03256" />
                            </div>
                        </div>
                        <div className="beatColorBox row">
                            <div className="col">
                                <div className="color_box_col">
                                    <div className="color_box">
                                        <span className='red_color'></span>
                                        Red
                                    </div>
                                    <span className='color-orange'>X 1.96</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="color_box_col">
                                    <div className="color_box">
                                        <span className='red_green'></span>
                                        Green
                                    </div>
                                    <span className='color-orange'>X 2</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="color_box_col">
                                    <div className="color_box">
                                        <img src={Star} alt="star" />
                                        star
                                    </div>
                                    <span className='color-orange'>X 10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <a href='/Crash3' className='BlueBtn'>Place a Bet</a>
                </div>
            </div>
        </div>
     );
}

export default CrashBeatOnColor;