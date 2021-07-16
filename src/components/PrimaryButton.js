import React from 'react'
import { makeStyles } from "@material-ui/styles"

const PrimaryButton = ({ content }) => {
    const classes = useStyles()
    return (
        <a href="#contact" className={classes.buttonPrimary}>
            {content}
        </a>
    )

}
const useStyles = makeStyles(theme => ({
    buttonPrimary: {
        textDecoration:'none',
        fontSize: "15px",
        fontWeight: 700,
        lineHeight:"26px",
        padding: "17px 37px",
        background:"var(--primaryColor)",
        textTransform:"uppercase",
        textAlign:"center",
        color:"#fff",
        borderRadius:"5px",
        boxShadow:"0 20px 30px #d3dce800"
    }
}))

export default PrimaryButton