import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import Logo from "../../assets/Logo-Light.png"
const BottomFooter = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.bottomFooterContainer} alignItems="center" justify='center'>
            <Grid item sm={3}>
                © 2020 Topika. All Rights Reserved.
            </Grid>
            <Grid item sm={3}>
                <img src={Logo} alt="#logo" className={classes.logo} />
            </Grid>
            <Grid item sm={3} className={classes.footerList}>
                <ul >
                    <li><a href="#privacy">Privacy & Policy.</a></li>
                    <li><a href="#Faq">Faq.</a></li>
                    <li><a href="#terms">Terms.</a></li>
                </ul>
            </Grid>
        </Grid>
    )
}
const useStyles = makeStyles(theme => ({
    bottomFooterContainer: {
        position: "relative",
        top: "780px",
        backgroundColor: "#002555",
        padding: "30px 0",
        color: "#fff"
    },
    logo: {
        width: "167px",
        height: "60"
    },
    footerList: {
        "& ul": {
            listStyle: "none",
            display: "flex",
            "& li":{
                margin:"0 20px",
                "& a":{
                    textDecoration:"none",
                    color:"#fff",
                    transition:"color .5s ease",
                    "&:hover":{
                        color:"var(--primaryColor)"
                    }
                },
            }

        }
    }

}))

export default BottomFooter