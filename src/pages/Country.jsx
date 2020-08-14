import React, { useContext, useState, useEffect } from 'react'
import countryConverter from "i18n-iso-countries";
import ClassesContext from '../context/classesContext';
import { toast } from 'react-toastify';
//materialUI
import { Grid, Hidden, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from '@material-ui/core/Zoom';
//icons
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
//import ArrowBackIcon from '@material-ui/icons/ArrowBack';
//api
import { getCountry } from './../api/api';
import processCountryData from '../utils/ligma';
import LoaderDoggo from './components/LoaderDoggo';
import history from './../utils/history';
//utils
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Helmet } from "react-helmet";
//components
import Sources from './components/Sources';

const getDate = (date, t, time = false) => { //always pass t with it
    if (time) return moment(date).format((t("CheckLanguage") === "en") ? 'MMMM Do YYYY, h:mm a' : "DD-MM-YYYY, h:mm a");
    return moment(date).format((t("CheckLanguage") === "en") ? 'MMMM Do YYYY' : "DD-MM-YYYY");
};

//====================================components=================================
const GovernmentResponse = ({ dataObj }) => {
    const classes = useContext(ClassesContext);
    const { t, i18n } = useTranslation();

    return (
        <React.Fragment>
            {/* // <div className={`${classes.flatContainer} ${classes.containmentPolicies} ${classes[`${themeColor}Shadow`]}`}> */}

            <div className={classes.govContainer}>
                <Typography variant="h5" component="h3" color="textSecondary" style={{ marginBottom: 10 }}>
                    {t("Containment policies")}
                </Typography>
                {dataObj.containmentArray &&
                    <Grid container >
                        {dataObj.containmentArray.map(c => <Grid key={c.title} item xs={12} md={6} style={{ padding: 10 }}>
                            <DataPiece data={c} />
                        </Grid>)}
                    </Grid>}
                {(!dataObj.containmentArray) && <Typography variant="subtitle1" color="textSecondary" style={{ marginBottom: 10 }}>
                    {t("Oops, we don't have this data at the moment...")}
                </Typography>}
            </div>
            {/* // </div>  */}
            {/* <div className={`${classes.flatContainer} ${classes.containmentPolicies}`} style={{marginTop: -40, zIndex: 10}}> */}

            <div className={classes.govContainer}>
                <Typography variant="h5" component="h3" color="textSecondary" style={{ marginBottom: 10 }}>
                    {t("Health policies")}
                </Typography>
                {dataObj.healthArray && <Grid container >
                    {dataObj.healthArray.map(c => <Grid key={c.title} item xs={12} md={6} style={{ padding: 10 }}>
                        <DataPiece data={c} shape="square" color={c.color} />
                    </Grid>)}
                </Grid>}
                {!dataObj.healthArray && <Typography variant="subtitle1" color="textSecondary" style={{ marginBottom: 10 }}>
                    {t("Oops, we don't have this data at the moment...")}
                </Typography>}

                {dataObj.date && <Typography variant="caption" color="textSecondary" style={{ marginTop: 10 }}>
                    {t("updated on")} {getDate(dataObj.date, t)}
                </Typography>}
            </div>
            {/* </div>  */}
        </React.Fragment>
    )
}

const TravelAdvisory = ({ obj, handleThemeColor }) => {
    const classes = useContext(ClassesContext);
    const { t, i18n } = useTranslation();
    const color = obj.color;
    console.log("travel", obj)
    return (
        <div className={`${classes.flatContainer} ${classes.travelAdvisory} ${classes[`${color}Shadow`]}`}>
            <Typography component="h2" variant="subtitle1" color="textSecondary" style={{ position: "absolute", top: 5, left: 10, fontSize: "1.1em" }}>
                {t("Travel advisory")}
            </Typography>

            <Typography variant="h6" color="textPrimary" style={{ fontWeight: 600, maxWidth: "90%" }}
                className={classes[`${color}DataText`]}>
                {(obj.title) ? t(obj.title) : t("...data is not available")}
            </Typography>

            <Typography variant="body2" color="textSecondary" style={{ position: "absolute", bottom: 5, right: 10 }}>
                {t("updated on")} {getDate(obj.date, t)}
            </Typography>
        </div>
    )
}

const MobilityCards = ({ dataObj }) => {
    const classes = useContext(ClassesContext);
    const { t, i18n } = useTranslation();
    return (
        <Grid container spacing={2} >
            {dataObj.map(c => {
                let Icon = c.icon;
                return <Grid key={c.key} item xs={6} lg={12}>

                    <div className={`${classes.mobilityContainer} ${classes.flatContainer} `} >


                        <div className={classes.mobilityInfo} >
                            <div className={`${classes.concaveContainer} ${classes[`${c.color}InsetShadow`]}`} style={{ padding: "5px 6px", borderRadius: 10, }}>
                                <Icon className={`${classes[`${c.color}DataText`]} ${classes.mobilityIcon}`} />
                            </div>
                            <Typography component="p" variant="h4" color="textPrimary" align="center"
                                className={classes.mobilityNumber} >
                                {t(c.value)}
                            </Typography>
                        </div>

                        <Typography component="h3" variant="subtitle1" color="textSecondary" className={classes.mobilityCategory}>
                            {t(c.text)}
                        </Typography>

                    </div>
                </Grid>
            })}</Grid>
    )
}

const DataPiece = ({ data }) => {
    const classes = useContext(ClassesContext);
    const { t, i18n } = useTranslation();
    const Icon = data.icon;
    const shape = "smallSquare";
    const color = data.color;

    return <div className={classes.dataPieceContainer}>
        <Typography variant="subtitle1" component="h4" color="textPrimary" style={{ position: "absolute", bottom: "130%", left: -5, fontSize: "1.2em", lineHeight: "1.1em" }}>
            {t(data.title)}
        </Typography>
        <div className={classes.dataPieceContent}>

            <div className={`${classes[shape]} ${classes[`${color}Shadow`]}`} >
                <Icon className={`${classes[`${color}DataText`]}`} />
            </div>
            <div style={{ marginLeft: 20, width: "65%", maxWidth: 300 }}>
                <Typography variant="subtitle1" color="textSecondary" style={{ lineHeight: 1.2 }}>
                    {t(data.label)}
                </Typography>
            </div>
        </div>
    </div>
}


const CovidData = ({ data, icon, label, color }) => {
    const { t, i18n } = useTranslation();
    const classes = useContext(ClassesContext);
    const Icon = icon;

    return <div className={classes.covidPieceContainer}>
        <Typography variant="subtitle1" component="h3" color="textPrimary" style={{ position: "absolute", bottom: "110%", left: 0, fontSize: "1.2em", lineHeight: "1.1em" }}>
            {t(label)}
        </Typography>
        <div className={classes.dataPieceContent}>

            <div className={`${classes.smallCircle} ${classes[`${color}Shadow`]}`} >
                <Icon className={`${classes[`${color}DataText`]}`} />
            </div>
            <div style={{ marginLeft: 20, width: "auto", maxWidth: 300 }}>
                {data && <React.Fragment><Typography variant="subtitle1" color="textPrimary" style={{ lineHeight: 1.2, fontSize: "1.7em", fontWeight: 500 }}>
                    {(data.new) ? `+${data.new}` : (data.new === 0) ? 0 : t("no data")}
                </Typography>
                    <Typography variant="subtitle1" color="textSecondary" style={{ lineHeight: 1.2 }}>
                        {(data.total) ? `${t("total of")} ${data.total}` : ""}
                    </Typography>
                </React.Fragment>}
                {!data && <Typography variant="subtitle1" color="textPrimary" style={{ lineHeight: 1.2, fontSize: "1.7em", fontWeight: 500 }}>
                    {t("no data")}
                </Typography>}
            </div>
        </div>
    </div>
}

const Country = ({ match, location }) => {
    const { t, i18n } = useTranslation();
    countryConverter.registerLocale(require(`i18n-iso-countries/langs/en.json`));
    countryConverter.registerLocale(require(`i18n-iso-countries/langs/vi.json`));
    countryConverter.registerLocale(require(`i18n-iso-countries/langs/ru.json`));
    const [loading, setLoading] = useState(false);
    const classes = useContext(ClassesContext);
    const [country, setCountry] = useState({
        generalInfo: { cases: {}, recovered: {} },
        travelInfo: { advisory: {} },
        mobilityInfo: { date: '', array: [] },
        policyInfo: { containmentArray: [], healthArray: [] }
    })
    //const [themeColor, setThemeColor] = useState(undefined)




    useEffect(() => {
        const id = match.params.id;
        console.log(id)
        handleLoader(true)
        const ligma = async (id) => {
            // console.log('effect')

            try {
                const response = await getCountry(id);
                console.log(response);

                if (response.data) {
                    const countryData = processCountryData(response.data, t("CheckLanguage"));
                    console.log('processed data', countryData);
                    setCountry(countryData);
                    setTimeout(handleLoader, 1000) //1s loading after getting data
                    //generalInfo, travelInfo, mobilityInfo, policyInfo
                } else throw t("no data")
            } catch (exception) {
                handleLoader(false);
                toast.error(`😓 ${t("uhhh something went wrong")}`)
                history.push('/')
                //console.log("Server not responding or data unavailable", exception)
            }
        }

        ligma(id); //send request
    }, [location])


    const handleLoader = (value) => {

        setLoading(value)
        //console.log("fater changing loader", loading)
    };

    // const handleThemeColor = (color) => {
    //     //console.log("changingColor", color)
    //     setThemeColor(color);
    // }


    return (
        <React.Fragment>
            <Helmet>
                <title>{`${countryConverter.getName(match.params.id, t("CheckLanguage"))} - TravelinCovid`}</title>
                <meta name="description"
                    content="Newest information on travel restrictions, containment and health policies, and other helpful information for you to make a right decision to travel during COVID-19 pandemic" />
            </Helmet>
            <Zoom
                in={loading}

                {...(loading ? { timeout: 1000 } : {})}
            ><div className={`${classes.root} ${classes.loading} `}> <LoaderDoggo /> </div></Zoom>
            {!loading && <Container className={classes.root}>
                {/* go back button
                <Button onClick={() => history.push("/")} className={classes.smallCircle}
                    style={{ position: "absolute", top: 100, left: 30 }}>
                    <HomeIcon style={{ fontSize: "2em" }} />
                </Button> */}
                <Grid container  >
                    <Grid item xs={false} xl={1} />
                    <Grid item xs={12} lg={7} xl={6} >
                        <div style={{ width: "100%", margin: "0px auto" }}>
                            <div className={classes.countryNameFlag}>
                                <Typography variant="h3" color="textSecondary" component="h1" style={{ fontWeight: 600 }}>
                                    {countryConverter.getName(match.params.id, t("CheckLanguage"))}
                                </Typography>
                                {/* <img src={vietnamFlag} className={classes.countryFlag} /> */}
                            </div>
                            <div className={`${classes.concaveContainer} ${classes.covidCases} `}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <CovidData data={country.generalInfo.cases} icon={AccessibilityNewIcon} label={t("confirmed cases")} color="red" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CovidData data={country.generalInfo.recovered} icon={HomeIcon} label={t("recoveries")} color="green" />
                                    </Grid>
                                </Grid>
                                <Typography variant="caption" color="textSecondary" style={{ position: "absolute", bottom: 2, right: 10 }}>
                                    {t("updated on")} {getDate(country.generalInfo.date, t, true)}
                                </Typography>
                            </div>


                            <div className={`${classes.concaveContainer} ${classes.travelContainer} `}>

                                <TravelAdvisory obj={country.travelInfo.advisory} />

                                <div style={{ padding: 10 }}>
                                    <div className={classes.travelRestriction}>
                                        <Typography variant="h5" component="h2" color="textPrimary" >
                                            {t("Travel restrictions")}
                                        </Typography>
                                        <Typography variant="subtitle1" component="h3" color="textSecondary" align="justify" style={{ padding: "10px 20px", lineHeight: "1.4em" }}>
                                            {country.travelInfo.mainText}
                                        </Typography>
                                    </div>
                                    <div className={`${classes.flatContainer} ${classes.travelRestrictionText} `}>
                                        <Scrollbars
                                            style={{ height: 130 }}>
                                            <Typography variant="body2" color="textSecondary" align="justify" className={classes.travelInfoDetailedText}>
                                                {(country.travelInfo.detailedText) ? country.travelInfo.detailedText : t("oops this box is empty, which means that we either couldn't find the data or it wasn't good enough to appear here...")}
                                            </Typography>
                                        </Scrollbars>
                                    </div>
                                </div>
                                <GovernmentResponse dataObj={country.policyInfo} />
                                {/* {country.policyInfo && <GovernmentResponse dataObj={country.policyInfo} />} */}
                            </div>
                            <Hidden mdDown>
                                <Sources />
                            </Hidden>
                        </div>
                    </Grid>

                    <Grid item xs={false} xl={1} />

                    {/* ==================Containment Policies======================= */}
                    <Grid item xs={12} lg={4} xl={3} style={{ margin: "0px auto" }}>
                        {/* ==============mobility=============== */}
                        {country.mobilityInfo && <React.Fragment>  <Typography variant="h5" component="h2" color="textPrimary" style={{ marginBottom: 20 }}>
                            {t("Mobility trends")}
                        </Typography>

                            <MobilityCards dataObj={country.mobilityInfo.array} />

                            <Typography variant="body2" color="textSecondary"
                                style={{ lineHeight: 1.1, marginTop: 10 }}>
                                {t("The value is relative to the median value of the corresponding days of the first 5 weeks of 2020.")}
                            </Typography>
                            <Typography variant="caption" color="textSecondary" >
                                {t("updated on")} {getDate(country.mobilityInfo.date, t)}
                            </Typography>
                        </React.Fragment>}

                    </Grid>
                    <Grid item xs={false} xl={1} />


                </Grid>
                <Hidden lgUp>
                    <Sources />
                </Hidden>
            </Container >}
        </React.Fragment>

    );
}

export default Country;