import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { makeStyles } from "@material-ui/styles"
import { Carousel } from 'react-responsive-carousel';
import Slide1 from "../../assets/banner-1.jpeg"
import Slide2 from "../../assets/banner-2.jpeg"
import Slide3 from "../../assets/banner-3.jpeg"
import Slide4 from "../../assets/banner-4.jpeg"
import Pattern1 from "../../assets/pattern-1.png"
import Pattern2 from "../../assets/pattern-2.png"
import Pattern3 from "../../assets/pattern-3.png"
import { SectionTitle, SubTitle } from '../../components/Titles';
import PrimaryButton from '../../components/PrimaryButton';
import { Grid } from '@material-ui/core';
const CarouselComponent = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.carouselContainer} container>
            <img src={Pattern1} className={classes.pattern1} alt="#pattern1" />
            <CardIntro />
            <Carousel
                showStatus={false}
                showThumbs={false} swipeable={false}
                showIndicators={false}
                centerMode={true} centerSlidePercentage={110}
            >
                <div className={classes.slideItem}>
                    <img src={Slide1} className={classes.imgCarousel} alt="#slide1" />

                </div>
                <div className={classes.slideItem}>
                    <img src={Slide2} className={classes.imgCarousel} alt="#slide2" />

                </div>
                <div className={classes.slideItem}>
                    <img src={Slide3} className={classes.imgCarousel} alt="#slide3" />

                </div>
                <div className={classes.slideItem}>
                    <img src={Slide4} className={classes.imgCarousel} alt="#slide4" />
                </div>
            </Carousel>
            <img src={Pattern2} className={classes.pattern2} alt="#pattern2" />
        </Grid>
    )
}
const CardIntro = () => {
    const classes = useStyles()
    return (
        <div className={classes.cardIntro}>
            <SubTitle subTitle="really life" />
            <SectionTitle sectionTitle="excute happiness with life insurance" />
            <p className> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa labore
                nam deserunt, laborum.</p>
            <PrimaryButton content="contact us" />
            <img src={Pattern3} alt="#pattern3" className={classes.pattern3} />
        </div>
    )
}
const useStyles = makeStyles(theme => ({
    carouselContainer: {
        position: 'relative',
    },
    imgCarousel: {
        transform: "scale(1.15)",
    },
    slideItem: {
        position: 'relative',
    },
    pattern1: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 8,
        width: "635px",
        height: "100%"
    },
    pattern2: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "273px",
        height: "401px"
    },
    cardIntro: {
        position: "absolute",
        top: "13%",
        left: "12%",
        zIndex: 9,
        background: "#fff",
        maxWidth: '480px',
        borderRadius: "10px",
        padding: "65px 70px 70px",
        boxShadow: '0 20px 50px rgb(0 0 0 / 10%)',
        "& p": {
            color: "var(--pColor)",
            fontWeight: 400,
            lineHeight: "29px",
            marginBottom: "23px"
        }
    },
    pattern3: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: "155px",
        height: "246px"
    },

}))
export default CarouselComponent