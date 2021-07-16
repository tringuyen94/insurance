import React from "react"
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import Pattern8 from "../../assets/pattern-8.png"
import Client1 from "../../assets/clients-logo-1.png"
import Client2 from "../../assets/clients-logo-2.png"
import Client3 from "../../assets/clients-logo-3.png"
import Client4 from "../../assets/clients-logo-4.png"
import Client5 from "../../assets/clients-logo-5.png"
import clsx from 'clsx'
const Clients = () => {
    const classes = useStyles()
    return (
        <section className={classes.clientsContainer}>
            <div className={clsx(classes.patternLayer)}> </div>
            <Grid container  justify="center">
                <Grid item sm={2}>
                    <img src={Client1} className={classes.imgCarousel} alt="#client1" />
                </Grid>
                <Grid item xs={2}>
                    <img src={Client2} className={classes.imgCarousel} alt="#client1" />
                </Grid>
                <Grid item xs={2}>
                    <img src={Client3} className={classes.imgCarousel} alt="#client1" />
                </Grid>
                <Grid item xs={2}>
                    <img src={Client4} className={classes.imgCarousel} alt="#client1" />
                </Grid>
                <Grid item xs={2}>
                    <img src={Client5} className={classes.imgCarousel} alt="#client1" />
                </Grid>
            </Grid>

        </section>
    )
}
const useStyles = makeStyles(theme => ({
    clientsContainer: {
        position: "relative",
        top: "307px",
        backgroundColor: "#003478 !important",
        padding: '120px 0 260px;'
    },
    patternLayer: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${Pattern8})`,
        backgroundRepeat: "repeat-x",
        animation: `$slide 9000ms linear infinite`,
    },
    "@keyframes slide": {
        "0%": {
            backgroundPosition: "right center"
        },
        "100%": {
            backgroundPosition: "left center",
        }
    },
    slideItem: {

    }
}))
export default Clients