import React, { useContext } from 'react'
import ClassesContext from '../../context/classesContext';
import dhdClan from "./../../images/dhdClan.JPG";
import { useTranslation } from 'react-i18next';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import { Grid, Link } from '@material-ui/core';


const Footer = () => {
    const classes = useContext(ClassesContext);
    const { t, i18n } = useTranslation();
    return (
        <div className={classes.footerContainer}>
            <Typography variant="h6" component="span" color="textPrimary" className={classes.footer2020Text}>
                © NewNormal 2020
                    </Typography>
            <Grid container >
                <Grid item xs={12} lg={4} style={{ padding: 10, maxWidth: 400 }}>
                    <Typography variant="h5" component="h3" color="textPrimary" align="center" style={{ padding: 10 }}>
                        {t("About us")}
                    </Typography>
                    <div className={classes.footerImageContainer}>
                        <img src={dhdClan} className={classes.footerAboutUsImage} />
                        <Typography variant="body2" component="p" color="textPrimary">
                            {t("AboutCreators")} <Link href="https://Twitch.tv/the_nexthor" target="_blank">Twitch.tv/the_nexthor</Link>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={12} lg={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="subtitle1" align="justify" component="p" color="textPrimary">

                        {t("Technical")}
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={4} style={{ padding: 10, maxWidth: 400 }}>
                    <Typography variant="h5" component="h3" align="center" color="textPrimary" style={{ padding: 10 }}>
                        {t("Collaborate")}
                    </Typography>
                    <div className={classes.footerImageContainer}>
                        <Typography variant="subtitle2" align="justify" component="p" color="textPrimary">
                            {t("Have an idea and want to contribute to our project?")}

                        </Typography>
                        <Button className={classes.footerButton}><a href="mailto: covid.travel.api@gmail.com" style={{ textDecoration: "none", color: "white" }}> {t("Email us!")}</a></Button>
                    </div>
                </Grid>
            </Grid>
        </div >
    );
}

export default Footer;