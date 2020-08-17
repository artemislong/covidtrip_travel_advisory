import React, { useContext, } from 'react'
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet";
import ClassesContext from './../context/classesContext';
import AboutInfo from './components/AboutInfo';
import SearchSelect from './components/SearchSelect';
//materialUI
import { Grid } from '@material-ui/core';
import { Container, Typography } from '@material-ui/core';


//api
// import { getHome } from './../api/api';


const Main = () => {
    const classes = useContext(ClassesContext);
    window.scrollTo(0, 0);
    const { t, i18n } = useTranslation();


    return (
        <Container className={classes.root}>
            <Helmet> <title>{t("TravelinCovid - Newest information from all countries for travelers")}</title>
                <meta name="description"
                    content={t("Newest information on travel restrictions, containment and health policies, and other helpful information for you to make a right decision to travel during COVID-19 pandemic")} />
            </Helmet>
            <Grid container spacing={2} >
                <Grid item xs={0} lg={1} xl={2} >

                </Grid>
                <Grid item xs={12} lg={10} xl={6} >
                    <div style={{ marginTop: 50 }}>

                        <SearchSelect />
                        <div className={` ${classes.homeWelcomeText} ${classes.flatContainer}`}>
                            <Typography component="h1" variant="h4" style={{ color: "#34515E" }}>
                                {t('Traveling during COVID-19 pandemic?')}
                            </Typography>
                            <Typography component="h2" variant="h5" color="primary" className={classes.mainSubText}>
                                {t("Find essential information for a safe and enjoyable trip")}
                            </Typography>
                        </div>
                        <AboutInfo />
                    </div>
                </Grid>
                <Grid item xs={0} lg={1} />
                <Grid item xs={12} xl={3} />

            </Grid>

        </Container >
    );
}

export default Main;