import React from 'react';
import './Banner.css'
import pic from "./photo-1600565193348-f74bd3c7ccdf.jfif"
import LazyLoad from 'react-lazyload';

const Banner = () => {

    return (

        <LazyLoad>
            <div className="banner-section">
                <div className="banner-container video-background">
                    <img src={pic} alt="" />
                    <div className="bannana">
                        <div className="line">
                            <span>"Food Fusion"</span>
                        </div>
                        <div className="line">
                            <span>"Foodie Heaven"</span>
                        </div>
                        <div className="line">
                            <span>"Eat &amp; enjoy"</span>
                        </div>
                    </div>
                </div>
            </div>
        </LazyLoad>
    );
};

export default Banner;