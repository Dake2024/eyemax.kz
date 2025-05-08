import React from 'react';
import Hero from "../components/Hero.jsx";
import Banners from "../components/Banners.jsx";
import Steps from "../components/Steps.jsx";
import Request from "../components/Request.jsx";
import Reviews from "../components/Reviews.jsx";
import Announcement from "../components/Announcment.jsx";
import FAG from "../components/FAG.jsx";
import Contact from "../components/Contact.jsx";

const LandingPage = ({onOpenModal}) => {
    return (
        <>
            <Hero onOpenModal={onOpenModal}/>
            <Banners onOpenModal={onOpenModal}/>
            <Steps onOpenModal={onOpenModal}/>
            <div className="w-full flex justify-center">
                <Request onOpenModal={onOpenModal}/>
            </div>
            <Reviews onOpenModal={onOpenModal}/>
            <Announcement onOpenModal={onOpenModal}/>
            <div className="w-full flex justify-center">
                <FAG onOpenModal={onOpenModal}/>
            </div>
            <Contact onOpenModal={onOpenModal}/>
        </>
    );
};

export default LandingPage;