import React from 'react'
import Fab from '@material-ui/core/Fab'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/styles';

const ScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }
    const classes = useStyles()
    return (
        <Fab className={classes.fab} onClick={handleScrollToTop}>
            <ArrowUpwardIcon />
        </Fab>
    )
}
const useStyles = makeStyles(theme => ({
    fab: {
        position: "fixed",
        right: 60,
        bottom: 80,
        zIndex: 10,
        animation:`$visibleFab .5s ease`,
        backgroundColor: 'var(--primaryColor)',
        color: "#fff",
        '&:hover': {
            backgroundColor: 'var(--textColor)'
        },
    },
    "@keyframes visibleFab": {
        "0%": {
            transform: "translateY(-1000px)"
        },
        "100%": {
            transform: "translateY(0)"
        }
    },
}))
export default ScrollToTop