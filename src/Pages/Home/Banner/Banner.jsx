import React from 'react';
import './Banner.css'

import LazyLoad from 'react-lazyload';

const Banner = () => {

    return (

        <LazyLoad>
            <div className="banner-section">
                <div className="banner-container video-background">
                    <img src="https://i.pinimg.com/originals/f1/b5/97/f1b597b927397dae3833b8e69821613c.jpg" alt="" />
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