import React from 'react'
import { makeStyles } from "@material-ui/styles"
import Pattern18 from "../../assets/pattern-18.png"
import Pattern19 from "../../assets/pattern-19.png"
import Contact1 from "../../assets/contact-1.png"
import { SectionTitle, SubTitle } from '../../components/Titles'
import { Grid } from '@material-ui/core'
const GetInTouch = () => {
    const classes = useStyles()
    return (
        <section className={classes.getInTouchContainer}>
            <img src={Pattern18} alt="#pattern18" className={classes.pattern18} />
            <img src={Pattern19} alt="#pattern19" className={classes.pattern19} />
            <Grid container className={classes.getInTouchDetail} justify="center">
                <Grid item sm={5}>
                    <img src={Contact1} alt="#getintouch1" className={classes.contact1} />
                </Grid>
                <Grid item sm={5}>
                    <p className={classes.getInTouchTitles}>
                        <SubTitle subTitle="get in touch" />
                        <SectionTitle sectionTitle="get a free quote to create your desired insurance" />
                    </p>
                    <form className={classes.getInTouchForm}>
                        <h3>Get a free quote</h3>
                        <input placeholder="First name" />
                        <input placeholder="Last name" />
                        <input placeholder="Email address" />
                        <textarea placeholder="Message" />
                        <button>Submit now</button>
                    </form>
                </Grid>

            </Grid>
        </section>
    )
}
const useStyles = makeStyles(theme => ({
    getInTouchContainer: {
        position: "relative",
        top: "800px",
        backgroundColor: "#f5f7fa"
    },
    pattern19: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: "582px",
        height: "666px"
    },
    pattern18: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "410px",
        height: "602px"
    },
    getInTouchDetail: {
        zIndex:10,
        paddingTop:"100px"
    },
    getInTouchForm: {
        borderRadius:"8px",
        width:"100%",
        boxShadow: "0 20px 30px #d3dce800",
        "& h3":{
            margin:"15px 0",
            fontSize:"20px"
        },
        "& input": {
            color: "#727272",
            fontSize: "16px",
            border: "1px solid #e5e5e5",
            height: "50px",
            width: "100%",
            padding: "10px 20px",
            borderRadius:"5px",
            margin:"10px 0"
        },
        "& textarea":{
            height:"120px",
            resize:"none",
            width:"100%",
            padding:"10px 20px",
            fontSize:"16px",
            borderRadius:"5px",
            border: "1px solid #e5e5e5",
        },
        "& button":{
            padding:"17px 37px",
            marginTop:"20px",
            borderRadius:"5px",
            border:"none",
            color:"#fff",
            fontSize:"16px",
            fontWeight:"bold",
            letterSpacing:".7px",
            textTransform:"uppercase",
            backgroundColor:"var(--primaryColor)",
            transition:"background-color .5s ease",
            "&:hover":{
                backgroundColor:"var(--textColor)"
            }
        }
    }

}))
export default GetInTouch