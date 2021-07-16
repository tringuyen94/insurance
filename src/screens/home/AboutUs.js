import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import Pattern5 from "../../assets/pattern-5.png"
import About1 from "../../assets/about-1.jpeg"
import About2 from "../../assets/about-2.jpeg"
import ClientThumb from "../../assets/clients-1.jpeg"
import { SectionTitle, SubTitle } from '../../components/Titles'
import PrimaryButton from '../../components/PrimaryButton'
import CountUp from 'react-countup'
const AboutUs = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.aboutUsContainer}>
            <img src={Pattern5} className={classes.pattern5} alt="#pattern5" />
            <div className={classes.circlePattern}></div>
            <Grid item sm={12} className={classes.detailAboutUsContainer}
                container >
                <Grid item sm={6} className={classes.imageBoxContainer}>
                    <div className={classes.patternBox}>
                        <img src={Pattern5} className={classes.fadePattern5a} alt="#fadePattern5_a" />
                        <img src={Pattern5} className={classes.fadePattern5b} alt="#fadePattern5_b" />
                    </div>
                    <figure className={classes.wrap}>
                        <img src={About1} alt="#about1" className={classes.imgAboutUs1} />
                    </figure>
                    <img src={About2} alt="#about2" className={classes.imgAboutUs2} />
                    <div className={classes.clientBox}>
                        <img src={ClientThumb} alt="#clientThumb" className={classes.clientThumb} />
                        <div className={classes.clientBoxContent}>
                            <span>4.5k</span>
                            <span >Satisfied Clients</span>
                        </div>

                    </div>

                </Grid>
                <Grid item sm={6}>
                    <div className={classes.upperBox}>
                        <SubTitle subTitle="about us" />
                        <SectionTitle sectionTitle="Save 50% on your life insurance policy" />
                        <p style={{ color: "#888", fontWeight: 400, marginBottom: "45px", lineHeight: "28px" }}>
                            Lorem ipsum dolor sit amet consectur adipiscing
                            elit sed eiusmod ex tempor incididunt labore dolore magna
                            aliquaenim ad minim veniam quis nostrud exercitation ullamco laboris.
                        </p>
                        <PrimaryButton content="Contact us" />
                    </div>
                    <div className={classes.lowerBox}>
                        <div>
                            <span className={classes.countNumber}><CountUp end={30} duration={4} />+ </span>
                            <span>Awards Win</span>
                        </div>
                        <div>
                            <span className={classes.countNumber}><CountUp end={29} duration={4} />+</span>
                            <span>Exprience Member</span>
                        </div>
                        <div>
                            <span className={classes.countNumber}><CountUp end={4} duration={4} />k+</span>
                            <span>Satisfied Clients</span>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}
const useStyles = makeStyles(theme => ({
    aboutUsContainer: {
        position: "relative",
        display: 'block',
    },
    pattern5: {
        position: "absolute",
        top: "70px",
        right: "300px",
        width: "80px",
        height: "80px"
    },
    circlePattern: {
        position: "absolute",
        top: "80px",
        right: "80px",
        background: "#f7f8f9",
        width: "270px",
        height: "270px",
        zIndex: -1,
        borderRadius: "50%"
    },
    detailAboutUsContainer: {
        position: "relative",
        top: "160px",
        padding: "0 150px"
    },
    imageBoxContainer: {
        position: "relative"
    },
    patternBox: {
        position: "relative",
    },
    fadePattern5a: {
        position: "absolute",
        left: "-30px",
        top: "50px",
        width: "95px",
        height: "95px",
        opacity: 0.2
    },
    fadePattern5b: {
        position: "absolute",
        top: "267px",
        right: "67px",
        width: "95px",
        height: "95px",
        opacity: 0.2
    },
    wrap: {
        width: "100%",
        "&::before": {
            position: "absolute",
            top: 0,
            left: "-75%",
            zIndex: 1, 
            content: '""',
            width: "50%",
            height: "100%",
            background: "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%)",
            transform: "skewX(-25deg)",
            animation:`$shine 1000ms infinite`
        },
        "&:hover::before": {
        }
    },
    imgAboutUs1: {
        position: 'absolute',
        borderRadius: '10px',
    },
    imgAboutUs2: {
        position: "absolute",
        top: "280px",
        right: "100px",
        boxShadow: "0 15px 50px #d3dce8",
    },
    clientBox: {
        position: 'absolute',
        display: "flex",
        justifyContent: "space-between",
        top: '445px',
        right: "300px",
        maxWidth: "245px",
        borderRadius: "7px",
        background: "#fff",
        boxShadow: "0 15px 50px #d3dce8",
        padding: "13px 35px",
    },
    clientThumb: {
        width: "50px",
        height: "50px",
    },
    clientBoxContent: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
        "& span:first-child": {
            fontSize: "24px",
            lineHeight: "24px",
            fontWeight: 700,
            marginBottom: '5px',
            color: "black"
        },
        "& span": {
            color: "#727272",
            fontWeight: 500,
            fontSize: "14px"
        }
    },
    upperBox: {
        paddingBottom: "86px",
        borderBottom: "1px solid rgb(136,136,136)"
    },
    lowerBox: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 33px",
        marginTop: "12px",
        "& div": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }
    },
    countNumber: {
        fontSize: "40px",
        lineHeight: "50px",
        color: "--var(textColor)",
        fontWeight: 600
    },
    "@keyframes shine": {
        "100%": {
            left: "125%",
        }
    },
}))
export default AboutUs
