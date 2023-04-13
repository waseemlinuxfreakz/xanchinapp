import React from 'react';

function GameCardStartWill() {
    return ( 
        <div className="gameCardStart">
            <div className="gameCounter">
                <h2 className=''>50</h2>
                <p>Game will be start after </p>
            </div>
            <div className="gameStartCardBox">
                <div className="verticalDotList">
                    <div className="dottedItem"><span></span></div>
                    <div className="dottedItem blackDotted"><span></span></div>
                    <div className="dottedItem"><span></span></div>
                    <div className="dottedItem blackDotted"><span></span></div>
                    <div className="dottedItem"><span></span></div>
                </div>
            </div>
        </div>
     );
}

export default GameCardStartWill;