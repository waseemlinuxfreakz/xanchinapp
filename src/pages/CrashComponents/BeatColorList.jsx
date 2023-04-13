import React from 'react';
import Star from '../../assets/img/icons/star.svg';

function BeatColorList() {
    return ( 
        <ul className="beatColorLst row">
            <li className='colorCol col-2'>
                <div className="colorBeatItem colorRed">
                    <span className='colorCircle '></span> 1x
                </div>
            </li>
            <li className='colorCol col-2'>
                <div className="colorBeatItem ColorYellow">
                    <span className='colorCircle '></span> 2.5x
                </div>
            </li>
            <li className='colorCol col-2'>
                <div className="colorBeatItem starColor">
                    <img src={Star} alt="Star" /> 34.12
                </div>
            </li>
            <li className='colorCol col-2'>
                <div className="colorBeatItem colorRed">
                    <span className='colorCircle '></span> 34.12
                </div>
            </li>
            <li className='colorCol col-2'>
                <div className="colorBeatItem starColor">
                    <img src={Star} alt="Star" /> 34.12
                </div>
            </li>
            <li className='colorCol col-2'>
                <div className="colorBeatItem starColor">
                    <img src={Star} alt="Star" /> 34.12
                </div>
            </li>
            <li className='colorCol col-2'>
                <div className="colorBeatItem colorGreen">
                    <span className='colorCircle '></span> 34.12
                </div>
            </li>
            <li className='colorCol col-2'>
                <div className="colorBeatItem colorBlue">
                620.96X
                </div>
            </li>
            <li className='colorCol col-2'>
                <div className="colorBeatItem colorBlue">
                620.96X
                </div>
            </li>
            <li className='colorCol col-2'>
                <div className="colorBeatItem ColorYellow">
                    <span className='colorCircle '></span> 2.5x
                </div>
            </li>
            <li className='colorCol col-2'>
                <div className="colorBeatItem colorBlue">
                620.96X
                </div>
            </li>
        </ul>
     );
}

export default BeatColorList;