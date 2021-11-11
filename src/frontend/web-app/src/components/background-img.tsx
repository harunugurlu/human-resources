import * as React from 'react';
import img from '../img/shapes.jpg';
import Header from './header';
function BackgroundImg() {
    return (
        <div className="div-background-img">
            <img src={img}></img>
        </div>
    );
}

export default BackgroundImg;