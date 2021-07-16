import React from 'react'
import { Fragment } from 'react'
import CarouselComponent from './Carousel'
import AboutUs from './AboutUs'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Clients from './Clients'
import OurTeams from './OurTeams'
import CustomerComments from './CustomerComments'
import WatchVideos from './WatchVideos'
import News from './News'
import GetInTouch from './GetInTouch'
import Footer from '../../layouts/footer'
import Header from '../../layouts/header'

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <CarouselComponent />
            <AboutUs />
            <Services/>
            <WhyChooseUs/>
            <Clients/>
            <OurTeams/>
            <CustomerComments/>
            <WatchVideos/>
            <News/>
            <GetInTouch/>
            <Footer/>
        </Fragment>
    )
}


export default Home
