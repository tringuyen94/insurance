import React from 'react'
import { makeStyles } from '@material-ui/styles'
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
const TopHeader = () => {
    const classes = useStyles()
    return (
        <Grid container className={classes.topHeader}
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Grid item xs={9} container>
                <ul className={classes.contactList}>
                    <li><CallIcon className={classes.contactIcon} /><a href="#phone">+(111) 65_458_856</a></li>
                    <li><MailIcon className={classes.contactIcon} /><a href="#mail">example@info.com</a></li>
                    <li><LocationOnIcon className={classes.contactIcon} /><a href="#location">New work city us</a></li>
                </ul>
            </Grid>
            <Grid item xs={3}>
                <ul className={classes.socialList} >
                    <li><a href="#facebook"><Facebook className={classes.socialIcon} /></a></li>
                    <li><a href="#insta"><Instagram className={classes.socialIcon} /></a></li>
                    <li><a href="#linked"><LinkedIn className={classes.socialIcon} /></a></li>
                    <li><a href="#twitter"><Twitter className={classes.socialIcon} /></a></li>
                </ul>
            </Grid>

        </Grid>
    )
}
const useStyles = makeStyles((theme) => ({
    topHeader: {
        background: '#003478',
        padding: "18px 90px 18px 145px",
    },
    contactList: {
        display:'flex',
        listStyle: "none",
        "& li": {
            display: "flex",
            paddingRight: "20px",
            alignItem: "center",
            borderRight: "1px solid rgba(255,255,255,.2)",
            "& a": {
                textDecoration: "none",
                color: "white"
            }
        }
    },
    contactIcon: {
        color: "#0ee7c5",
        fontSize: 20,
        margin:"0 8px"
    },
    socialList: {
        display: "flex",
        listStyle: "none",
        "& li": {
            padding: "0 10px",
            cursor: "pointer"
        }
    },
    socialIcon: {
        color: "#fff",
        fontSize: 16
    }
}))


export default TopHeader
