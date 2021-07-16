import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import { SectionTitle, SubTitle } from '../../components/Titles'
import Pattern7 from '../../assets/pattern-7.png'
import Service1 from '../../assets/service-1.jpeg'
import Service2 from '../../assets/service-2.jpeg'
import Service3 from '../../assets/service-3.jpeg'
import HouseIcon from '@material-ui/icons/House';
import DirectionsCar from '@material-ui/icons/DirectionsCar'
import Pattern3 from '../../assets/pattern-3.png'
import Pattern5 from '../../assets/pattern-5.png'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const Services = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.servicesContainer}>
            <img src={Pattern7} alt="#pattern7" className={classes.pattern7} />
            <div className={classes.servicesTitle}>
                <SubTitle subTitle="Services" />
                <SectionTitle sectionTitle="We ensure best insurance services for our clients." />
            </div>
            <Grid className={classes.servicesDetail} justify="center" container spacing={3}>
                <Grid xs={12} sm={4} item className={classes.servicesDetailItem}>
                    <img src={Service1} alt="#service1" />
                    <div className={classes.servicesIntro}>
                        <HouseIcon className={classes.serviceIcons} />
                        <h2> Home Insurance</h2>
                        <p> Lorem ipsum dolor sit amet, consecte adipisicing elit sed do.</p>
                        <a href="#service1"> learn more</a>
                    </div>
                    <img src={Pattern3} alt="#pattern3" />
                </Grid>
                <Grid xs={12} sm={4} item className={classes.servicesDetailItem}>
                    <img src={Service2} alt="#service2" />
                    <div className={classes.servicesIntro}>
                        <DirectionsCar className={classes.serviceIcons} />
                        <h2> Car Insurance</h2>
                        <p> Lorem ipsum dolor sit amet, consecte adipisicing elit sed do.</p>
                        <a href="#service1"> learn more</a>
                    </div>
                    <img src={Pattern3} alt="#pattern3" />
                </Grid>
                <Grid xs={12} sm={4} item className={classes.servicesDetailItem}>
                    <img src={Service3} alt="#service3" />
                    <div className={classes.servicesIntro}>
                        <LocalHospitalIcon className={classes.serviceIcons} />
                        <h2> Health Insurance</h2>
                        <p> Lorem ipsum dolor sit amet, consecte adipisicing elit sed do.</p>
                        <a href="#service1"> learn more</a>
                    </div>
                    <img src={Pattern3} alt="#pattern3" />
                </Grid>

            </Grid>
            <div className={classes.patternCircle}></div>
            <img src={Pattern5} alt="#pattern5" className={classes.pattern5} />
        </Grid>
    )

}
const useStyles = makeStyles(theme => ({
    servicesContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        background: "#f5f7fa",
        top: '320px',
        padding: "45px 0px 195px"
    },
    pattern7: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: "710px",
        height: "570px"
    },
    servicesTitle: {},
    servicesDetail: {
        marginTop: "20px",
    },
    servicesDetailItem: {
        position: 'relative',
        overflow: "hidden",
        maxWidth: "350px",
        marginRight: "30px",
        boxShadow: "0 15px 40px #d3dce8",
        borderRadius: '10px',
        "& img:first-child": {
            width: "100%",
            transition: "all ease .5s",
            borderRadius: "0 "
        },
        "&:hover img:first-child": {
            transform: "scale(1.2)",
            filter: "opacity(.5)"
        },
        "& img:nth-child(3)": {
            position: "absolute",
            bottom: 0,
            right: "-200px",
            width: "99px",
            height: "170px",
            transition: "transform ease .5s"
        },
        "&:hover img:nth-child(3)": {
            transform: "translateX(-200px)"
        }

    },
    serviceIcons: {
        fontSize: "75px",
        color: "#0ee7c5"
    },
    servicesIntro: {
        padding: "30px 30px 30px 40px",
        "& h2": {
            color: "#00224f",
            margin: "21px 0",
            transition: "color ease-in .5s",
            "&:hover": {
                color: "var(--primaryColor)"
            }
        },
        "& p": {
            color: "#888",
            fontWeight: 400,
            lineHeight: "28px",
            marginBottom: "40px"
        },
        "& a": {
            textDecoration: "none",
            position: "relative",
            color: "#00224f",
            fontWeight: 700,
            fontSize: "14px",
            padding: "11px 26px",
            textTransform: "uppercase",
            border: " 1px solid #e5e5e5",
            borderRadius: "4px",
            transition: "all ease .4s",
            "&:hover": {
                color: "#fff",
                background: "var(--primaryColor)"
            }

        },
    },
    pattern5: {
        position: "absolute",
        bottom:"80px",
        left:"80px",
        width: "80px",
        height: "80px",
        zIndex:1,
    },
    patternCircle: {
        position: "absolute",
        bottom:"70px",
        left:"70px",
        background: "#f0f3f7",
        width: "270px",
        height: "270px",
        zIndex:-1,
        borderRadius: "50%"
    },
}))

export default Services
