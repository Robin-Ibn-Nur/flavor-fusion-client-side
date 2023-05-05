import React, { useRef } from 'react';
import './HappyCustomer.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import CustomerFeedback from './CustomersFeedback/CustomerFeedback';

const HappyCustomer = () => {
    const customerReviews = [
        {
            id: 1,
            name: "Emily Jones",
            review: "I had an amazing meal at this restaurant! The food was absolutely delicious and the service was top-notch. The atmosphere was cozy and inviting, and I felt completely relaxed throughout my entire meal. I would highly recommend this restaurant to anyone looking for a great dining experience!",
            rating: 5,
            date: "2023-04-25"
        },
        {
            id: 2,
            name: "Mark Taylor",
            review: "I had a wonderful time at this restaurant. The food was fantastic and the staff were very friendly and helpful. The prices were also very reasonable. Overall, I had a great experience and would definitely recommend this restaurant to others!",
            rating: 4,
            date: "2023-04-18"
        },
        {
            id: 3,
            name: "Julia Kim",
            review: "I had a great experience at this restaurant. The food was delicious and the service was attentive. The atmosphere was also very cozy and inviting. I would definitely recommend this restaurant to anyone looking for a great dining experience!",
            rating: 4.5,
            date: "2023-04-10"
        },
        {
            id: 4,
            name: "Robert Patel",
            review: "I had a good experience at this restaurant. The food was tasty and the service was good. The atmosphere was also pleasant. However, the prices were a bit high compared to other restaurants in the area. Overall, I would recommend this restaurant for a special occasion or a nice night out.",
            rating: 3.5,
            date: "2023-03-28"
        },
    ];
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <section className="py-6 bg-yellow-800 text-gray-100">
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <section className="my-8 dark:bg-gray-800 dark:text-gray-100">
                        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 ">
                            <h1 className="text-4xl font-semibold leading-none text-center">What our customers are saying about us</h1>
                        </div>
                        <div className="container mx-auto flex  gap-8 lg:gap-20 md:px-10 md:pb-10 ">
                            
                                {
                                    customerReviews?.map(r =>

                                        <SwiperSlide key={r.id}>
                                            <CustomerFeedback
                                                
                                                r={r}
                                            ></CustomerFeedback>
                                        </SwiperSlide>
                                    )
                                }
                           

                        </div>
                    </section>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </>
        </section>
    );
};

export default HappyCustomer;