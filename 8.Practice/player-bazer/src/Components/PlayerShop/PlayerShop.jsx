import React from 'react';
import Player from '../Player/Player';
import Cart from '../CartForPlayer/Cart';

const PlayerShop = () => {
    return (
        <div>
            <div className="player-Container">
                <div>
                    <Player></Player>
                </div>
                <div>
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default PlayerShop;