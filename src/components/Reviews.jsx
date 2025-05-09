import React, { useEffect } from 'react';

const Reviews = () => {
    useEffect(() => {
        // Function to initialize the myReviews widget
        const myReviewsInit = () => {
            if (window.myReviews && window.myReviews.BlockWidget) {
                new window.myReviews.BlockWidget({
                    uuid: "eb7a1400-0730-49ba-a367-9595d71c2b08",
                    name: "g60414664",
                    additionalFrame: "none",
                    lang: "ru",
                    widgetId: "2"
                }).init();
            }
        };

        // Function to load the external script
        const loadScript = () => {
            const script = document.createElement('script');
            script.src = 'https://myreviews.dev/widget/dist/index.js';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                // Initialize widget after script loads
                myReviewsInit();
            };
            document.body.appendChild(script);

            // Cleanup: Remove script when component unmounts
            return () => {
                document.body.removeChild(script);
            };
        };

        // Check document ready state
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadScript);
        } else {
            loadScript();
        }

        // Cleanup event listener if added
        return () => {
            document.removeEventListener('DOMContentLoaded', loadScript);
        };
    }, []); // Empty dependency array to run once on mount

    return (
        <div id="reviews" className="py-0 md:py-16 mt-15 md:my-20 px-[6%]">
            <div className="flex relative w-[75%]">
                <p className="text-[40px] md:text-[64px] font-bold font-bebas uppercase leading-none">
                    Что говорят <span className="text-[#0E3D91]">наши пациенты</span>
                </p>
                <img
                    src="/Review1.svg"
                    alt="Review"
                    className="hidden md:block absolute right-30 -top-35"
                />
                <img
                    src="/Review1.svg"
                    alt="Review"
                    className="block md:hidden absolute -bottom-0 -right-20 w-32"
                />
            </div>
            {/* Iframe for reviews widget */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                    borderRadius: '20px'
                }}
            >
                <iframe
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        outline: 'none',
                        padding: 0,
                        margin: 0
                    }}
                    id="myReviews__block-widget"
                ></iframe>
            </div>
        </div>
    );
};

export default Reviews;