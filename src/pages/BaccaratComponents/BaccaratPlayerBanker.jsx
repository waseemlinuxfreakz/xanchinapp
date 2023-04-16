import React from 'react';

import BlockLeft from '../../assets/img/block_left.png';
import BlockRight from '../../assets/img/block_right.png';
import BlockTop from '../../assets/img/block_top.png';


function BaccaratPlayerBanker() {
    return ( 
        <div className="baccaratPlayerBanker">
            <div className="row">
                <div className="col-md-3 col-6">
                    <div className="BaccaratBlock BaccaratBlockLeft">
                        <img src={BlockLeft} alt="" className="bg_art" />
                        <div className="BaccaratBlockTitle">
                            <h2>PLAYER</h2>
                            <span className='color-orange'>x 2.00</span>
                        </div>
                        <div className="BaccaratBlockBottom">
                            5,000
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="BaccaratBlock BaccaratBlockTop">
                        <img src={BlockTop} alt="" className="bg_art" />
                        <div className="BaccaratBlockTitle">
                            <h2>TIE</h2>
                            <span className='color-orange'>x 2.00</span>
                        </div>
                        <div className="BaccaratBlockBottom">
                            5,000
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="BaccaratBlock">
                                <div className="BaccaratBlockTitle">
                                    <h2>TIE</h2>
                                    <span className='color-orange'>x 2.00</span>
                                </div>
                                <div className="BaccaratBlockBottom">
                                    5,000
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="BaccaratBlock">
                                <div className="BaccaratBlockTitle">
                                    <h2>TIE</h2>
                                    <span className='color-orange'>x 2.00</span>
                                </div>
                                <div className="BaccaratBlockBottom">
                                    5,000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="BaccaratBlock BaccaratBlockRight">
                        <img src={BlockRight} alt="" className="bg_art" />
                        <div className="BaccaratBlockTitle">
                            <h2>BANKER</h2>
                            <span className='color-orange'>x 2.00</span>
                        </div>
                        <div className="BaccaratBlockBottom">
                            5,000
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default BaccaratPlayerBanker;