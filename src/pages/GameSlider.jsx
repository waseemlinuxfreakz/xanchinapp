import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";

import CardImage1 from '../assets/img/box_images/box_images (1).png';
import CardImage2 from '../assets/img/box_images/box_images (2).png';
import CardImage3 from '../assets/img/box_images/box_images (3).png';
import CardImage4 from '../assets/img/box_images/box_images (4).png';
import CardImage5 from '../assets/img/box_images/box_images (5).png';
import CardImage6 from '../assets/img/box_images/box_images (6).png';
import CardImage7 from '../assets/img/box_images/box_images (7).png';
import CardImage8 from '../assets/img/box_images/box_images (8).png';
import CardImage9 from '../assets/img/box_images/box_images (9).png';
import CardImage10 from '../assets/img/box_images/box_images (10).png';

import SwipNavigation from './SwipNavigation';




function GameSlider() {

    return ( 
        <>
            <SwipNavigation/>
            <div className="swiper_wraper">

                <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                modules={[Pagination, Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="gameSliderSwip"
            >
            
                <SwiperSlide>
                    <div className="gameCartContainer">
                        <div className="gameCart row">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage1} alt="Cart Image" />
                                    <div className="cartContent"><h3>Tài Xỉu</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage2} alt="Cart Image" />
                                    <div className="cartContent"><h3>Bầu Cua</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage3} alt="Cart Image" />
                                    <div className="cartContent"><h3>Xóc Đĩa</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage4} alt="Cart Image" />
                                    <div className="cartContent"><h3>Phi Thuyền</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage5} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Bài Baccarat</h3> 
                                        <p>Người chơi đơn</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage6} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Cao thấp</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage7} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Đồng xu lật</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage8} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Xúc xắc cổ điển</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage9} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Xì phé nhỏ</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage10} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Bài Baccarat </h3>
                                        <p>Nhiều người chơi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="gameCartContainer">
                        <div className="gameCart row">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage1} alt="Cart Image" />
                                    <div className="cartContent"><h3>Tài Xỉu</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage2} alt="Cart Image" />
                                    <div className="cartContent"><h3>Bầu Cua</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage3} alt="Cart Image" />
                                    <div className="cartContent"><h3>Xóc Đĩa</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage4} alt="Cart Image" />
                                    <div className="cartContent"><h3>Phi Thuyền</h3></div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage5} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Bài Baccarat</h3> 
                                        <p>Người chơi đơn</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage6} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Cao thấp</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage7} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Đồng xu lật</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage8} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Xúc xắc cổ điển</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage9} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Xì phé nhỏ</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                                <div className="cartcol">
                                    <img src={CardImage10} alt="Cart Image" />
                                    <div className="cartContent">
                                        <h3>Bài Baccarat </h3>
                                        <p>Nhiều người chơi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            </div>
        </>
     );
}

export default GameSlider;