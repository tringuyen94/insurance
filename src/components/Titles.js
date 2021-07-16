import React from 'react'
import { makeStyles } from '@material-ui/styles'
export const SubTitle = ({subTitle}) => {
    const classes = useStyles()
    return(
        <h5 className={classes.subTitle}>\\{subTitle}</h5>
    )
}
export const SectionTitle=({sectionTitle})=>{
    const classes=useStyles()
    return (
        <h1 className={classes.sectionTitle}>{sectionTitle}</h1>
    )
}

const useStyles = makeStyles(theme => ({
    subTitle:{
        textTransform:"capitalize",
        color:"var(--primaryColor)",
        fontSize:"18px",
        lineHeight:"28px",
    },
    sectionTitle:{
        textTransform:"capitalize",
        color:"var(--textColor)",
        fontSize:"40px",
        lineHeight:"50px",
        fontWeight:800,
    }
}))