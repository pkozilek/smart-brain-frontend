import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.svg';
import './Logo.css';

const Logo = () => {
    return (
        <div className='center ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2 pointer" options={{ max : 50 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa4"> 
                    <img alt='logo' src={brain}/> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;