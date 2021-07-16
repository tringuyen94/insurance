import React, { useState, useEffect } from 'react'
import TopHeader from './TopHeader'
import Navbar from './Navbar'
import { makeStyles } from '@material-ui/styles'
import { toggle } from "../../utils/toggles"
const Header = () => {
    const classes = useStyles()
    const [fixedNavbar, setFixedNavbar] = useState(false)
    useEffect(() => {
        document.addEventListener('scroll', function (e) {
            setFixedNavbar(toggle(100))
        })
    }, [])
    return (
        <div className={fixedNavbar ? classes.fixedHeader : classes.normalHeader}>
            <TopHeader />
            <Navbar />
        </div>
    )
}
const useStyles = makeStyles({
    normalHeader: {
        width: "100%",
        boxShadow: "0 8px 6px -6px black",
    },
    fixedHeader: {
        width: "100%",
        boxShadow: "0 8px 6px -6px black",
        position: "fixed",
        zIndex: 20,
        animation: `$fixedHeader .8s ease-in`
    },
    "@keyframes fixedHeader": {
        "0%": {
            opacity: 0,
            transform: 'translateY(-100px)'
        },
        "100%": {
            opacity: 1,
            transform: 'translateY(0)'
        }
    }
})

export default Header