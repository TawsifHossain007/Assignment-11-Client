import React from 'react';
import Banner from './Banner/Banner';
import HowItWorks from './HowItWorks/HowItWorks';
import FeedBacks from './Feedbacks/FeedBacks';
import OurMission from './OurMission/OurMission';
import OurFeatures from './OurFeatures/OurFeatures';
import ResolvedIssues from './ResolvedIssues/ResolvedIssues';

const Home = () => {
    return (
        <div className='min-h-screen w-11/12 mx-auto'>
            <Banner></Banner>
            <OurFeatures></OurFeatures>
            <ResolvedIssues></ResolvedIssues>
            <HowItWorks></HowItWorks>
            <FeedBacks></FeedBacks>
            <OurMission></OurMission>
        </div>
    );
};

export default Home;