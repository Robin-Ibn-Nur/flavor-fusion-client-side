import React, { useContext, useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import ChefCards from './ChefCards/ChefCards';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import LoadingEffect from '../../LoadingEffect/LoadingEffect';
import HappyCustomer from './HappyCustomer/HappyCustomer';
import Groath from './Groth/Groath';
import Marquee from "react-fast-marquee";
import FoodGallary from './FoodGallary/FoodGallary';
import LazyLoad from 'react-lazyload';

const Home = () => {
    const { loading } = useContext(AuthContext);
    const [cards, setcards] = useState([])

    useEffect(() => {
        fetch("https://flavor-fusion-server-side.vercel.app/cafe")
            .then(res => res.json())
            .then(data => setcards(data))
    }, [])

    if (loading) {
        return <LoadingEffect />
    }



    return (
        <div>
            <LazyLoad height={200} scroll>
                <div className="banner-section">
                    <Banner></Banner>
                </div>
            </LazyLoad>
            <LazyLoad height={200} once scroll>
                <section>
                    <h3 className='dark:bg-gray-800 dark:text-gray-100 py-6 text-center text-2xl mt-5'>Our Daily Achivment</h3>
                    <Marquee>
                        <Groath></Groath>
                    </Marquee>
                </section>
            </LazyLoad>
            <LazyLoad height={200} offset={100} scroll>
                <section className="wrapper">
                    <h1>Meet our Chef's</h1>
                    <div className="cols">
                        {
                            cards?.map(card => <ChefCards
                                key={card.id}
                                card={card}
                            ></ChefCards>)
                        }
                    </div>
                </section>
            </LazyLoad>
            <LazyLoad scroll>
                <section>
                    <FoodGallary></FoodGallary>
                </section>
            </LazyLoad>
            <LazyLoad scroll>
                <section>
                    <HappyCustomer></HappyCustomer>
                </section>
            </LazyLoad>
        </div>
    );
};

export default Home;