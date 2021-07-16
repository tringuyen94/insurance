import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Video1 from "../../assets/video-1.jpeg"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PrimaryButton from '../../components/PrimaryButton';
import Pattern14 from "../../assets/pattern-14.png"
import Pattern15 from "../../assets/pattern-15.png"
import Pattern16 from "../../assets/pattern-16.png"
const WatchVideos = () => {
    const classes = useStyles()
    return (
        <section className={classes.watchVideosContainer}>
            <div className={classes.buttonPlayContainer}>
                <PlayArrowIcon className={classes.iconPlay}/>
            </div>
            <div className={classes.bannerLearnMore}>
                <img src={Pattern15} alt="#pattern15" className={classes.pattern15}/>
                <div className={classes.bannerIntro}>
                    <h2>Not sure  what <span> u need</span></h2>
                   <p> Which types of insurance match with your business.</p>
                </div>
                <div className={classes.bannerButton}>
                    <PrimaryButton content="Learn more"/>
                </div>
                <img src={Pattern16} alt="#pattern16" className={classes.pattern16}/>
            </div>
        </section>
    )
}
const useStyles = makeStyles(theme => ({
    watchVideosContainer: {
        position: "relative",
        top: "340px",
        padding: "235px 0 320px",
        backgroundImage: `url(${Video1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment:"fixed",
        '&::after': {
            content: '""',
            position:"absolute",
            width:'100%',
            height:"100%",
            backgroundColor:"#000e20",
            top:0,
            left:0,
            opacity:.5,
        }
  },
  buttonPlayContainer:{
    position:"absolute",
    top:"40%",
    left:"45%",
    width:"100px",
    height:"100px",
    borderRadius:"50%",
    border:"5px solid var(--primaryColor)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex:4,
  },
  iconPlay:{
      fontSize:"60px",
      color:"var(--primaryColor)"
  },
  bannerLearnMore:{
      position:'absolute',
      bottom:"-210px",
      right:0,    
      backgroundImage:`url(${Pattern14})`,
      backgroundSize:'cover',
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      zIndex:7,
      display:"flex",
      padding:"90px 130px",
      borderRadius:"8px",
      justifyContent:"space-between",
      alignItems:"center",
      width:"90%"
  },
  pattern15:{
      position:'absolute',
      width:"530px",
      left:0
  },
  pattern16:{
      position:"absolute",
      width:"530px",
      right:0
  },
  bannerIntro:{
      "& h2":{
          color:"#fff",
          fontSize:"38px",
          letterSpacing:"1px",
          "& span":{
              color:"var(--primaryColor)"
          }
      },
      "& p":{
          fontSize:"20px",
          marginTop:"30px",
          letterSpacing:".8px"
      }
  }
}))
export default WatchVideos