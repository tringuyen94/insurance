import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import Logo from "../../assets/Logo-Dark.png"
import SearchIcon from '@material-ui/icons/Search';
import ContactMailIcon from '@material-ui/icons/ContactMail'
const Navbar = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.bottomHeader}>
            <Grid item xs={3}
                justify="center" alignItems="center"
                className={classes.logoContainer} container>
                <img src={Logo} className={classes.imgLogo} alt="#logo" />
            </Grid>
            <Grid item xs={6}
                justify="center" alignItems="center"
                container className={classes.navigatorContainer}>
                <ul className={classes.navigator}>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Pages">Pages</a></li>
                    <li><a href="#Elements">Elements</a></li>
                    <li><a href="#Block">Block</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </Grid>
            <Grid item xs={3} justify="center" alignItems="center" container >
                <SearchIcon className={classes.searchIcon} />
                <a className={classes.buttonQuote} href="#quote">get a quote
                 <ContactMailIcon className={classes.contactMailIcon} /></a>
            </Grid>
        </Grid>
    )
}
const useStyles = makeStyles(theme => ({
    bottomHeader: {
        padding: "0 30px",
        backgroundColor:"#fff",
    },
    logoContainer: {
        padding: "20px 30px"
    },
    navigatorContainer: {
        borderLeft: "1px solid rgba(0,0,0,.1)",
        borderRight: "1px solid rgba(0,0,0,.1)",
    },
    imgLogo: {
        width: "172px",
        height: "62px"
    },
    searchIcon: {
        cursor: "pointer",
        fontSize: "30px",
        margin:"0 20px",
        "&:hover": {
            color: "#0ee7c5"
        }
    },
    contactMailIcon: {
        position: 'absolute',
        top: "6px",
        right: '17px',
        width: "45px",
        height: "45px",
        paddingLeft: "14px",
        borderLeft: "1px solid rgba(255,255,255,.6)"
    },
    buttonQuote: {
        position: "relative",
        textDecoration: "none",
        background: "#0ee7c5",
        textTransform: "uppercase",
        padding: "17px 90px 17px 35px",
        color: "#fff",
        fontSize: "15px",
        lineHeight: "26px",
        fontWeight: 800,
        borderRadius: "5px",
        transition: "all .5s ease",
        "&:hover": {
            backgroundColor: "#00224f"
        }
    },
    navigator: {
        display: "flex",
        listStyle: "none",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 30px",
        "& li:nth-child(1) a": {
            color: "#0ee7c5"
        },
        "& li": {
            padding: "0  23px",
            "& a": {
                textDecoration: "none",
                color: "#00224f",
                fontSize: "17px",
                lineHeight: "30px",
                fontWeight: 600,
                letterSpacing: "1px",
                transition: "all .5s ease",
                "&:hover": {
                    color: "#0ee7c5"
                }
            }
        }
    },


}))

export default Navbar