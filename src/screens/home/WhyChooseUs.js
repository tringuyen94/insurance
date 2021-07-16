import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import ChooseUs1 from "../../assets/chooseus-1.jpeg"
import { SectionTitle, SubTitle } from '../../components/Titles'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Pattern9 from "../../assets/pattern-9.png"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const WhyChooseUs = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState('panel1')
    const handleChangeAccordion = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false)
    }
    return (
        <Grid container className={classes.whyChooseUsContainer}>
            <Grid item xs={12} sm={8}>
                <img src={ChooseUs1} alt="#chooseUs1" className={classes.imgChooseUs} />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.whyChooseUsDetail}>
                            <SubTitle subTitle="why choose us" />
                <SectionTitle sectionTitle="Most of the people choose Topika" />
                <Accordion square expanded={expanded === "panel1"} onChange={handleChangeAccordion('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.accorHeader}>A Fast, Easy Application.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={classes.accorContent}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                         </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === "panel2"} onChange={handleChangeAccordion('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.accorHeader}>Clients Focused</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                     </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion square expanded={expanded === "panel3"} onChange={handleChangeAccordion('panel3')} >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography className={classes.accorHeader}>We Can Save You Money.</Typography>
                    </AccordionSummary>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                     </Typography>
                </Accordion>
            </Grid>
            <img src={Pattern9} alt="#pattern2" className={classes.pattern9} />
        </Grid>
    )

}
const useStyles = makeStyles(theme => ({
    whyChooseUsContainer: {
        position: "relative",
        top: '320px',
        padding:"10px"
    },
    imgChooseUs: {
        width: '100%',
        borderRadius: "8px",
    },
    whyChooseUsDetail: {
        padding: "10px 20px"
    },
    accorHeader: {
        fontSize: "18px",
        lineHeight: "30px",
        fontWeight: 600
    },
    accorContent: {
        color: "#888",
        fontWeight: 400,
        transition: "all .5s ease"
    },
    pattern9: {
        position: "absolute",
        bottom: 0,
        right: 0,
    }
}))

export default WhyChooseUs
