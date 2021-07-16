import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Footer1 from "../../assets/footer-1.jpeg"
import News10 from "../../assets/news-10-150x150.jpeg"
import News11 from "../../assets/news-11-150x150.jpeg"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
const TopFooter = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.topFooterContainer} justify="center" >
            <Grid item sm={3} className={classes.footerAbout}>
                <h3>About</h3>
                <p>
                    Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia dese runt mollit anim id est laborum Sed.
                </p>
                <ul>
                    <li><LinkedInIcon /></li>
                    <li><FacebookIcon /></li>
                    <li><TwitterIcon /></li>
                </ul>
            </Grid>
            <Grid item sm={3} className={classes.footerPost}>
                <h3>Popular Post</h3>
                <div className={classes.postItem}>
                    <img src={News10} alt="#news" />
                    <div>
                        <p>Which allows you to pay down your policy.</p>
                        <span>September 19, 2020</span>
                    </div>
                </div>
                <div className={classes.postItem}>
                    <img src={News11} alt="#news" />
                    <div>
                        <p>Which allows you to pay down your policy.</p>
                        <span>September 19, 2020</span>
                    </div>
                </div>
            </Grid>
            <Grid item sm={3} className={classes.footerInformation}>
                <h3>Information</h3>
                <p>Lorem ipsum dolor sit amet, consect adipisicing elit</p>
                <ul>
                    <li> <LocationOnIcon />Melbourne, california 5686 New Work</li>
                    <li><PhoneIcon /> +125 ( 659 ) 254</li>
                    <li> <EmailIcon /> information@gmail.com </li>
                </ul>
            </Grid>
            <Grid item sm={3} className={classes.footerSubcribe}>
                <h3>Subscribe</h3>
                <p>Lorem ipsum dolor sit amet, consect adipisicing elit eiusmod.</p>
                <input placeholder="Your email"  />
                <button><SendIcon/></button>
            </Grid>

        </Grid>
    )
}
const useStyles = makeStyles(theme => ({
    topFooterContainer: {
        position: "relative",
        top: "800px",
        backgroundImage: `url(${Footer1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: "133px 0px 117px",
        '&::after': {
            content: '""',
            position: "absolute",
            width: '100%',
            height: "100%",
            backgroundColor: "#001b3e",
            top: 0,
            left: 0,
            opacity: .95,
        }
    },
    footerAbout: {
        zIndex: 3,
        maxWidth: "270px",
        "& h3": {
            color: "#fff",
            fontSize: '30px',
            paddingBottom:"20px",
            lineHeight: '40px',
            fontWeight: 700
        },
        "& p": {
            fontSize: "17px",
            lineHeight: "28px",
            color: "#fff",
        },
        "& ul": {
            marginTop: "30px",
            listStyle: "none",
            display: "flex",
            "& li": {
                marginRight: "10px",
                "& svg": {
                    fontSize: "38px",
                    color: "#fff"
                }
            }

        }
    },
    footerPost: {
        zIndex: 3,
        maxWidth: "270px",
        marginLeft:"30px",
        "& h3": {
            color: "#fff",
            fontSize: '23px',
            lineHeight: '40px',
            paddingBottom:"20px"
        }

    },
    postItem: {
        color: "white",
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
        maxWidth: "270px",
        "& img": {
            width: "80px",
            height: "80px",
            borderRadius: "8px"
        },
        "& div": {
            marginLeft: "20px",
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: "24px",
            "& span": {
                color: "#f9f9f9",
                fontSize: "14px",
            }
        }
    },
    footerInformation: {
        zIndex: "3",
        color: "#fff",
        maxWidth: "270px",
        marginLeft:"30px",
        "& h3": {
            paddingBottom:"20px",
            fontSize: '23px',
            lineHeight: '40px',
        },
        "& p": {
            lineHeight: "30px",
            fontSize: "17px"
        },
        "& ul":{
            listStyle:"none",
            "& li":{
                margin:"14px 0",
                "& svg":{
                    fontSize:"18px",
                    marginRight:"20px",
                    color:"var(--primaryColor)"
                }
            },

        }
    },
    footerSubcribe:{
        position:"relative",
        zIndex: "3",
        color: "#fff",
        maxWidth: "270px",
        marginLeft:"30px",
        "& h3":{
            fontSize: '23px',
            lineHeight: '40px',
            paddingBottom:"20px"
        },
        "& p": {
            lineHeight: "30px",
            fontSize: "17px",
            paddingBottom:"20px",
        },
        "& input":{
            padding: "10px 30px 10px 20px",
            fontSize:"16px",
            border: "1px solid #fff",
            height:" 60px",
            color: "gray",
            borderRadius:"10px 0 0 10px"

        },
        "& button":{
            position:"absolute",
            top:"52,4%",
            width: "63px",
            height: "60.3px",
            border:"none",
            borderRadius:"0 10px 10px 0",
           backgroundColor:"#0ee7c5",
           "& svg":{
               color:"#fff"
           }
        }
    }

}))

export default TopFooter