import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Pattern5 from "../../assets/pattern-5.png"
import Pattern6 from '../../assets/pattern-6.png'
import { SectionTitle, SubTitle } from '../../components/Titles'
import { Grid } from '@material-ui/core'
import News1 from "../../assets/news-1.jpeg"
import News2 from "../../assets/news-2.jpeg"
import News3 from "../../assets/news-3.jpeg"
import ThumbNews from "../../assets/thumb-news.jpeg"
const News = () => {
    const classes = useStyles()
    return (
        <section className={classes.newsContainer}>
            <div className={classes.patternLayer}>
                <img src={Pattern5} alt="#pattern5" className={classes.pattern5} />
                <div className={classes.circlePattern}></div>
            </div>
            <div className={classes.newsContent}>
                <div className={classes.newsTitle}>
                    <SubTitle subTitle="our news" />
                    <SectionTitle sectionTitle="Latest news from our blog" />
                </div>
                <Grid container className={classes.newsItemContainer} justify="center">
                    <Grid sm={4} className={classes.newsItem}>
                        <figure >
                            <img src={News1} alt="#news" className="imgNews" />
                        </figure>
                        <h3>Which allows you to pay down your policy</h3>
                        <div className={classes.desginationTimeStamp}>
                            <img src={ThumbNews} alt="#thumb" className={classes.thumbNews} />
                            <div className={classes.designation}>
                                <h4>By Admin</h4>
                                <span>September 5,2020</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...</p>
                        <a href="#learnmore">learn more</a>
                        <img src={Pattern6} alt="#pattern6" />
                    </Grid>
                    <Grid sm={4} className={classes.newsItem}>
                        <figure >
                            <img src={News2} alt="#news" className="imgNews" />
                        </figure>
                        <h3>Which allows you to pay down your policy</h3>
                        <div className={classes.desginationTimeStamp}>
                            <img src={ThumbNews} alt="#thumb" className={classes.thumbNews} />
                            <div className={classes.designation}>
                                <h4>By Admin</h4>
                                <span>September 5,2020</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...</p>
                        <a href="#learnmore">learn more</a>
                        <img src={Pattern6} alt="#pattern6" />
                    </Grid>
                    <Grid sm={4} className={classes.newsItem}>
                        <figure >
                            <img src={News3} alt="#news" className="imgNews" />
                        </figure>
                        <h3>Which allows you to pay down your policy</h3>
                        <div className={classes.desginationTimeStamp}>
                            <img src={ThumbNews} alt="#thumb" className={classes.thumbNews} />
                            <div className={classes.designation}>
                                <h4>By Admin</h4>
                                <span>September 5,2020</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...
                            
                        </p>
                        <a href="#learnmore">learn more</a>
                        <img src={Pattern6} alt="#pattern6" />
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}
const useStyles = makeStyles(theme => ({
    newsContainer: {
        position: 'relative',
        top: '550px'
    },
    circlePattern: {
        position: "absolute",
        top: "-10px",
        left: "90px",
        background: "#f7f8f9",
        width: "180px",
        height: "180px",
        borderRadius: "50%",
        zIndex: -1,
    },
    pattern5: {
        position: "absolute",
        top: "110px",
        left: "220px",
        width: "80px",
        height: "80px"
    },
    newsContent: {
        position: "relative",
        top: "220px",
    },
    newsTitle: {
        textAlign: "center"
    },
    newsItemContainer: {
        marginTop:"30px"
    },
    newsItem: {
        borderRadius: "20px",
        position: "relative",
        maxWidth: "370px",
        marginRight:"10px",
        "& figure": {
            overflow: "hidden",
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "#005a87",
            "& img": {
                transform: "scale(1.1)",
                transition: "all .5s ease"
            }
        },
        "& h3": {
            transition: "all .5s ease",
            padding: '15px',
            fontSize: "22px",
            lineHeight: "32px",
            fontWeight: 700,
        },
        "& p": {
            padding:"15px", 
            color: "var(--textColor)",
            marginBottom: '40px',
        },
        "& img:nth-child(6)": {
            position: "absolute",
            bottom: 0,
            right: "-30px",
            width: "99px",
            height: "170px",
            opacity:0,
            transition:"all .5s ease"
        },
        "& a":{
            marginLeft:'20px',
            padding:"10px 15px",
            border:"1px solid #888",
            textDecoration:"none",
            color:"black",
            fontWeight:"bold",
            fontSize:"14px",
            textTransform:"uppercase",
            transition:"all .25s ease-in",
            "&:hover":{
                borderColor:"#0ee7c5",
                backgroundColor:"#0ee7c5",
                color:"white"
            }
        },
        "&:hover .imgNews": {
            transform: "scale(1)",
            opacity: .5
        },
        "&:hover h3": {
            color: "var(--primaryColor)"
        },
        "&:hover img:nth-child(6)":{
            transform:"translateX(-30px)",
            opacity:1
        }

    },
    desginationTimeStamp: {
        display: "flex",
        alignItems: "center",
        padding: "15px"
    },
    thumbNews: {
        width: "50px",
        height: '50px',
        borderRadius: "50%"
    },
    designation: {
        marginLeft: "20px",
        lineHeight: "23px",
        "& span": {
            color: "#888",
            fontSize: '18px'
        }
    }
}))
export default News