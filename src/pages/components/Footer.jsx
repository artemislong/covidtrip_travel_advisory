import React, { useContext } from 'react'
import ClassesContext from '../../context/classesContext';
import Truncate from 'react-truncate';
import dhdClan from "./../../images/dhdClan.JPG";


import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import { Grid } from '@material-ui/core';
import { DriveEtaOutlined } from '@material-ui/icons';

const Footer = () => {
    const classes = useContext(ClassesContext);
    return (
        <div className={classes.footerContainer}>
            <Typography variant="h6" component="span" color="textPrimary" className={classes.footer2020Text}>
                © NewNormal 2020
                    </Typography>
            <Grid container >
                <Grid item xs={12} lg={4} style={{ padding: 10, maxWidth: 400 }}>
                    <Typography variant="h5" component="h3" color="textPrimary" align="center" style={{ padding: 10 }}>
                        About us
                    </Typography>
                    <div className={classes.footerImageContainer}>
                        <img src={dhdClan} className={classes.footerAboutUsImage} />
                        <Typography variant="body2" component="p" color="textPrimary">
                            NewNormal was created by Konstantin (on the left) and Artemis (the middle guy). The guy in the back is The_Nextor, don't hesitate to follow him on Twitch.
                    </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} lg={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="subtitle1" align="justify" component="p" color="textPrimary">

                        NewNormal's first version was created in 5 days, and it is operated by Harambe and Ligma. Everyday Harambe gathers data from the Internet, processes it, and stores it. Ligma is different: whenever you open NewNormal, Ligma is sent to your browser, and then she begins requesting data from Harambe, analyzing it, and deciding how to display it for you.
                        Sometimes Harambe and Ligma may make mistakes, or they can be grumpy and choose not to serve you. So please be easy on them.
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={4} style={{ padding: 10, maxWidth: 400 }}>
                    <Typography variant="h5" component="h3" align="center" color="textPrimary" style={{ padding: 10 }}>
                        Colaborate
                    </Typography>
                    <div className={classes.footerImageContainer}>
                        <Typography variant="subtitle2" align="justify" component="p" color="textPrimary">
                            Have an idea and want to contribute to our project? <br />

                        </Typography>
                        <Button className={classes.footerButton}><a href="mailto: covid.travel.api@gmail.com" style={{ textDecoration: "none", color: "white" }}> Email us!</a></Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;