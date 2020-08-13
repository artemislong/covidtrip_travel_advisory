import React, { useContext } from 'react'
import ClassesContext from './../../context/classesContext';
import kayakLogo from './../../images/kayakLogo.png'
import oxfordLogo from './../../images/oxfordLogo.svg'
import johnhopkinsLogo from './../../images/johnhopkinsLogo.png'
import googleLogo from './../../images/googleLogo.png'
import statetravelLogo from './../../images/statetravelLogo.jpg'
import traveladvisoryLogo from './../../images/traveladvisoryLogo.png'

//materialUI
import { Grid, Typography } from '@material-ui/core';

//utils
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const Sources = () => {
    const classes = useContext(ClassesContext);
    const { t, i18n } = useTranslation();
    const sourcesArray = [
        { url: "https://www.google.com/covid19/mobility/", img: googleLogo, title: "Google Community Reports" },
        { url: "https://coronavirus.jhu.edu/", img: johnhopkinsLogo, title: "JHU Coronavirus Response Center" },
        { url: "https://www.bsg.ox.ac.uk/research/research-projects/coronavirus-government-response-tracker", img: oxfordLogo, title: "Blavatnik School of Government" },
        { url: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/", img: statetravelLogo, title: "Travel.State.Gov" },
        { url: "https://www.kayak.com/travel-restrictions", img: kayakLogo, title: "Kayak" },
        { url: "https://www.travel-advisory.info/", img: traveladvisoryLogo, title: "Travel Advisory API" },]
    return (
        <div style={{ margin: "30px 0px 20px 0px" }}>
            <Typography variant="h5" color="textPrimary" >
                {t("Our data sources")}
            </Typography>
            <Grid container spacing={1}>
                {sourcesArray.map(s => <Grid item xs={6} md={4} ><a href={s.url} target="_blank" style={{ cursor: "pointer", textDecoration: "none" }}>
                    <div style={{ height: 80, margin: "10px auto", width: "100%", display: "flex", justifyContent: "center" }}>
                        <img src={s.img} style={{ height: "100%", maxWidth: "100%", borderRadius: 10 }} />
                    </div>
                    <Typography variant="subtitle2" color="textPrimary" align="center" style={{ width: "100%", margin: "0px auto" }}>
                        {s.title}
                    </Typography>
                </a></Grid>)}
            </Grid>


        </div>
    )
}

export default Sources;