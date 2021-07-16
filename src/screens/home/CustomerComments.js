import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { SectionTitle, SubTitle } from '../../components/Titles'
import Pattern12 from "../../assets/pattern-12.png"
import Pattern13 from "../../assets/pattern-13.png"
import Testimonial1 from '../../assets/testimonial-1.png'
import Testimonial2 from '../../assets/testimonial-2.png'
import { Grid } from '@material-ui/core'
const CustomerComments = () => {
    const classes = useStyles()
    return (
        <section className={classes.customerCommentsContainer}>
            <img src={Pattern13} alt="#pattern13" className={classes.pattern13} />
            <p className={classes.customerCommentsPara}>
                <SubTitle subTitle="tesimonal" />
                <SectionTitle sectionTitle="what our client say about topika" />
            </p>
            <Grid container justify="center" className={classes.customerItemWrapper} >
                <Grid sm={6} item className={classes.customerItem} >
                    <p className={classes.customerComments}>
                        "Lorem ipsum dolor sit amet consectetur adipic eksed do eiusmod
                        tempor incidunt labore dolore magna Aliqua.enim minim veniam,
                        quis nostrud exercitaTion ullamco laboris."
                    </p>
                    <div className={classes.customerDetail}>
                        <img src={Testimonial1} alt="#customthumb" className={classes.testimonial} />
                        <div className={classes.designation}>
                            <h2>Amelia Anna</h2>
                            <span>Senior markter</span>
                        </div>
                    </div>
                    <img src={Pattern12} alt="#patten12" className={classes.pattern12} />
                </Grid>
                <Grid sm={6} item className={classes.customerItem} >
                    <p className={classes.customerComments}>
                        "Lorem ipsum dolor sit amet consectetur adipic eksed do eiusmod
                        tempor incidunt labore dolore magna Aliqua.enim minim veniam,
                        quis nostrud exercitaTion ullamco laboris."
                    </p>
                    <div className={classes.customerDetail}>
                        <img src={Testimonial2} alt="#customthumb" className={classes.testimonial} />
                        <div className={classes.designation}>
                            <h2>Amelia Anna</h2>
                            <span>Senior markter</span>
                        </div>
                    </div>
                    <img src={Pattern12} alt="#patten12" className={classes.pattern12} />
                </Grid>
            </Grid>
        </section>
    )
}
const useStyles = makeStyles(theme => ({
    customerCommentsContainer: {
        position: 'relative',
        top: "260px",
        padding: "0 10px"
    },
    pattern13: {
        position: "absolute",
        width:"100%",
    },
    customerCommentsPara: {
        textAlign: "center",
        paddingTop:"100px"
    },
    customerItemWrapper:{
        marginTop:"50px"
    },
    customerItem: {
        position: "relative",
        backgroundColor: "#fff",
        padding: "10px 20px",
        borderRadius: "10px",
        marginTop: "30px",
        marginRight:"30px",
        maxWidth: "570px",
    },
    
    customerComments: {
        color: "#888",
        fontSize: "18px",
        lineHeight: "30px"
    },
    customerDetail: {
        display: "flex",
        padding: "30px 40px"
    },
    testimonial: {
    },
    designation: {
        marginLeft: "20px",
        "& h2": {
            color: 'var(--textColor)',
            letterSpacing:".5px"
        },
        "& span":{
            color:"#888"
        }
    },
    pattern12: {
        position: 'absolute',
        bottom: "30px",
        right: "30px"
    }
}))

export default CustomerComments