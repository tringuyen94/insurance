import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { SectionTitle, SubTitle } from '../../components/Titles'
import { Grid } from '@material-ui/core'
import Team1 from "../../assets/team-1.jpeg"
import Team2 from "../../assets/team-2.jpeg"
import Team3 from "../../assets/team-3.jpeg"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Pattern10 from "../../assets/pattern-10.png"
import Pattern11 from "../../assets/pattern-11.png"

const OurTeams = () => {
    const classes = useStyles()
    return (
        <section className={classes.ourTeamsContainer}>
            <Grid sm={12} justify="center" container>
                <p className={classes.ourTeamsPara}>
                    <SubTitle subTitle="Our teams" />
                    <SectionTitle sectionTitle="Meet our experienced team member" />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </Grid>
            <Grid container justify="center" className={classes.ourTeamDetail}>
                <Grid sm={4} className={classes.ourTeamItem} >
                    <figure>
                        <span></span>
                        <span></span>
                        <img src={Team1} alt="#team1" className="img-team" />
                    </figure>
                    <ul className={classes.ourTeamSocial} >
                        <li><a href="#facebook"><FacebookIcon /></a></li>
                        <li><a href="#facebook"><LinkedInIcon /></a></li>
                        <li><a href="#facebook"><TwitterIcon /></a></li>
                    </ul>
                    <div className={classes.ourTeamName}>
                        <div className={classes.patternLayer}>
                            <img src={Pattern10} alt="#pattern10" className={classes.pattern10} />
                            <img src={Pattern11} alt="#pattern11" className={classes.pattern11} />
                        </div>
                        <h2>Araminta Max</h2>
                        <span>Senior Marketer</span>
                    </div>
                </Grid>
                <Grid sm={4} className={classes.ourTeamItem} >
                    <figure>
                        <span></span>
                        <span></span>
                        <img src={Team2} alt="#team2" className="img-team" />
                    </figure>
                    <ul className={classes.ourTeamSocial} >
                        <li><a href="#facebook"><FacebookIcon /></a></li>
                        <li><a href="#facebook"><LinkedInIcon /></a></li>
                        <li><a href="#facebook"><TwitterIcon /></a></li>
                    </ul>
                    <div className={classes.ourTeamName}>
                        <div className={classes.patternLayer}>
                            <img src={Pattern10} alt="#pattern10" className={classes.pattern10} />
                            <img src={Pattern11} alt="#pattern11" className={classes.pattern11} />
                        </div>
                        <h2>Araminta Max</h2>
                        <span>Senior Marketer</span>
                    </div>
                </Grid>
                <Grid sm={4} className={classes.ourTeamItem} >
                    <figure>
                        <span></span>
                        <span></span>
                        <img src={Team3} alt="#team3" className="img-team" />
                    </figure>
                    <ul className={classes.ourTeamSocial} >
                        <li><a href="#facebook"><FacebookIcon /></a></li>
                        <li><a href="#facebook"><LinkedInIcon /></a></li>
                        <li><a href="#facebook" ><TwitterIcon /></a></li>
                    </ul>
                    <div className={classes.ourTeamName}>
                        <div className={classes.patternLayer}>
                            <img src={Pattern10} alt="#pattern10" className={classes.pattern10} />
                            <img src={Pattern11} alt="#pattern11" className={classes.pattern11} />
                        </div>
                        <h2>Araminta Max</h2>
                        <span>Senior Marketer</span>
                    </div>
                </Grid>
            </Grid>
        </section>
    )
}

const useStyles = makeStyles(theme => ({
    ourTeamsContainer: {
        position: 'relative',
        top: "320px",
    },
    ourTeamsPara: {
        fontWeight: 400,
        color: "#888",
        textAlign:"center",
        margin:"30px 0",
        lineHeight:"50px"
    },
    ourTeamItem: {
        borderRadius: "10px",
        position: "relative",
        maxWidth: "350px",
        marginRight: "30px",
        "& figure": {
            overflow: "hidden",
            backgroundColor: "#007cba",
            borderRadius: "10px",
            "& > img": {
                width: "100%",
                transition: "all .5s ease",
            },
        },
        "&:hover .img-team": {
            transform: "scale(1.1)",
            opacity: .5
        },
        "&:hover ul": {
            opacity: 1
        },
        "&:hover .pattern10": {
            opacity: 1
        },
        "&:hover img:nth-child(1)": {
            transform: "translateX(100px)"
        },
        "&:hover img:nth-child(2)": {
            transform: "translateX(-100px)"
        }

    },
    ourTeamSocial: {
        position: "absolute",
        left: "37%",
        top: "35%",
        listStyle: "none",
        display: "flex",
        transition: "all .5s ease-in",
        opacity: 0,
        "& li": {
            width: "40px",
            height: "40px",
            backgroundColor: '#fff',
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "5px",
            transition: "all ease .5s",
            "&:hover": {
                backgroundColor: "var(--primaryColor)",
            },
            "&:hover svg": {
                color: "white"
            },
            "& a": {
                textDecoration: "none",
                "& svg": {
                    fontSize: "25px",
                    color: "#bfbfbf",
                }
            }
        },
    },
    ourTeamName: {
        position: 'relative',
        width: "70%",
        bottom: "70px",
        margin: "0 auto",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 20px 30px #d3dce800",
        padding: "36px 15px 31px",
        textAlign: "center",
        overflow: "hidden",
        "& h2": {
            fontSize: "22px",
            lineHeight: "30px",
            fontWeight: 700,
            marginBottom: "4px"
        },
        "& span": {
            color: "var(--primaryColor)",
            fontSize: "16px"
        }
    },
    pattern10: {
        position: 'absolute',
        width: "109px",
        height: "129px",
        left: "-110px",
        top: 0,
        transition: "all .5s ease"
    },
    pattern11: {
        position: 'absolute',
        width: "110px",
        height: '129px',
        right: "-110px",
        bottom: 0,
        transition: "all .5s ease"
    },


}))
export default OurTeams