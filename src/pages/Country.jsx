import React, { useContext, useState, useEffect } from 'react'
import countryConverter from "i18n-iso-countries";
import ClassesContext from '../context/classesContext';
import { toast } from 'react-toastify';
//materialUI
import { Grid, Typography } from '@material-ui/core';
import { Container, Button } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import Zoom from '@material-ui/core/Zoom';
//icons
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
//api
import { getCountry } from './../api/api';
import processCountryData from '../utils/ligma';
import LoaderDoggo from './components/LoaderDoggo';
import history from './../utils/history';
//utils
import ScrollToTop from './../utils/ScrollToTop';



const GovernmentResponse = ({ dataObj }) => {
    const classes = useContext(ClassesContext);
    console.log("govRes", dataObj)

    return (
        <React.Fragment>
            {/* // <div className={`${classes.flatContainer} ${classes.containmentPolicies} ${classes[`${themeColor}Shadow`]}`}> */}

            <div style={{ padding: 20 }}>
                <Typography variant="h5" color="textSecondary" style={{ marginBottom: 10 }}>
                    Containment policies
                    </Typography>
                {dataObj.containmentArray &&
                    <Grid container >
                        {dataObj.containmentArray.map(c => <Grid key={c.title} item xs={12} md={6} style={{ padding: 10 }}>
                            <DataPiece data={c} />
                        </Grid>)}
                    </Grid>}
                {(!dataObj.containmentArray) && <Typography variant="subtitle1" color="textSecondary" style={{ marginBottom: 10 }}>
                    Oops, we don't have this data...
            </Typography>}
            </div>
            {/* // </div>  */}
            {/* <div className={`${classes.flatContainer} ${classes.containmentPolicies}`} style={{marginTop: -40, zIndex: 10}}> */}

            <div style={{ padding: 20 }}>
                <Typography variant="h5" color="textSecondary" style={{ marginBottom: 10 }}>
                    Health policies
            </Typography>
                {dataObj.healthArray && <Grid container >
                    {dataObj.healthArray.map(c => <Grid key={c.title} item xs={12} md={6} style={{ padding: 10 }}>
                        <DataPiece data={c} shape="square" color={c.color} />
                    </Grid>)}
                </Grid>}
                {!dataObj.healthArray && <Typography variant="subtitle1" color="textSecondary" style={{ marginBottom: 10 }}>
                    Oops, we don't have this data...
            </Typography>}
            </div>

            {/* </div>  */}
        </React.Fragment>
    )
}

const TravelAdvisory = ({ obj, handleThemeColor }) => {
    const classes = useContext(ClassesContext);
    const color = obj.color;

    return (
        <div className={`${classes.flatContainer} ${classes.travelAdvisory} ${classes[`${color}Shadow`]}`}>
            <Typography variant="subtitle1" color="textSecondary" style={{ position: "absolute", top: 5, left: 10, fontSize: "1.1em" }}>
                Travel advisory
            </Typography>

            <Typography variant="h6" color="textPrimary" style={{ fontWeight: 600, maxWidth: "90%" }}
                className={classes[`${color}DataText`]}>
                {(obj.title) ? obj.title : "we failed you...no data"}
            </Typography>

            <Typography variant="body2" color="textSecondary" style={{ fontSize: "0.7em", position: "absolute", bottom: 5, right: 10 }}>
                updated on {obj.date}
            </Typography>
        </div>
    )
}

const MobilityCards = ({ dataObj }) => {
    const classes = useContext(ClassesContext);

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
                                {c.value}
                            </Typography>
                        </div>

                        <Typography component="p" variant="subtitle1" color="textSecondary" className={classes.mobilityCategory}>
                            {c.text}
                        </Typography>

                    </div>
                </Grid>
            })}</Grid>
    )
}

const DataPiece = ({ data }) => {
    const classes = useContext(ClassesContext);
    const Icon = data.icon;
    const shape = "smallSquare";
    const color = data.color;

    return <div className={classes.dataPieceContainer}>
        <Typography variant="subtitle1" color="textPrimary" style={{ position: "absolute", bottom: "110%", left: -5, fontSize: "1.2em", lineHeight: "1.1em" }}>
            {data.title}
        </Typography>
        <div className={classes.dataPieceContent}>

            <div className={`${classes[shape]} ${classes[`${color}Shadow`]}`} >
                <Icon className={`${classes[`${color}DataText`]}`} />
            </div>
            <div style={{ marginLeft: 20, width: "65%", maxWidth: 300 }}>
                <Typography variant="subtitle1" color="textSecondary" style={{ lineHeight: 1.2 }}>
                    {data.label}
                </Typography>
            </div>
        </div>
    </div>
}
const CovidData = ({ data, icon, label, color }) => {
    const classes = useContext(ClassesContext);
    const Icon = icon;

    return <div className={classes.dataPieceContainer}>
        <Typography variant="subtitle1" color="textPrimary" style={{ position: "absolute", bottom: "110%", left: 0, fontSize: "1.2em", lineHeight: "1.1em" }}>
            {label}
        </Typography>
        <div className={classes.dataPieceContent}>

            <div className={`${classes.smallCircle} ${classes[`${color}Shadow`]}`} >
                <Icon className={`${classes[`${color}DataText`]}`} />
            </div>
            <div style={{ marginLeft: 20, width: "auto", maxWidth: 300 }}>
                {data && <React.Fragment><Typography variant="subtitle1" color="textPrimary" style={{ lineHeight: 1.2, fontSize: "1.7em", fontWeight: 500 }}>
                    {(data.new) ? `+${data.new}` : (data.new === 0) ? 0 : "no data"}
                </Typography>
                    <Typography variant="subtitle1" color="textSecondary" style={{ lineHeight: 1.2 }}>
                        {(data.total) ? `total of ${data.total}` : ""}
                    </Typography>
                </React.Fragment>}
                {!data && <Typography variant="subtitle1" color="textPrimary" style={{ lineHeight: 1.2, fontSize: "1.7em", fontWeight: 500 }}>
                    no data
                </Typography>}
            </div>
        </div>
    </div>
}

const Country = ({ match, location }) => {
    countryConverter.registerLocale(require("i18n-iso-countries/langs/en.json"));

    const [loading, setLoading] = useState(false);
    const classes = useContext(ClassesContext);
    const [country, setCountry] = useState({
        generalInfo: { cases: {}, recovered: {} },
        travelInfo: { advisory: {} },
        mobilityInfo: { date: '', array: [] },
        policyInfo: { containmentArray: [], healthArray: [] }
    })
    const [themeColor, setThemeColor] = useState(undefined)



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
                    const countryData = processCountryData(response.data);
                    console.log('processed data', countryData);
                    setCountry(countryData);
                    setTimeout(handleLoader, 1000) //1s loading after getting data
                    //generalInfo, travelInfo, mobilityInfo, policyInfo
                } else throw "no data"
            } catch (exception) {
                handleLoader(false);
                toast.error("😓 uh oh something went wrong")
                history.push('/')
                console.log("Server not responding or data unavailable", exception)
            }
        }

        ligma(id); //send request
    }, [location])


    const handleLoader = (value) => {

        setLoading(value)
        console.log("fater changing loader", loading)
    };

    const handleThemeColor = (color) => {
        console.log("changingColor", color)
        setThemeColor(color);
    }



    return (
        <React.Fragment>
            <Zoom
                in={loading}

                {...(loading ? { timeout: 1000 } : {})}
            ><div className={`${classes.root} ${classes.loading}`}> <LoaderDoggo /> </div></Zoom>
            {!loading && <Container className={classes.root}>
                {/* go back button
                <Button onClick={() => history.push("/")} className={classes.smallCircle}
                    style={{ position: "absolute", top: 100, left: 30 }}>
                    <HomeIcon style={{ fontSize: "2em" }} />
                </Button> */}
                <Grid container  >
                    <Grid item xl={1} />
                    <Grid item xs={12} lg={7} xl={6} >
                        <div style={{ width: "100%", margin: "0px auto" }}>
                            <div className={classes.countryNameFlag}>
                                <Typography variant="h3" color="textSecondary" style={{ fontWeight: 600 }}>

                                    {countryConverter.getName(match.params.id, "en")}

                                </Typography>
                                {/* <img src={vietnamFlag} className={classes.countryFlag} /> */}
                            </div>
                            <div className={`${classes.concaveContainer} ${classes.covidCases}`}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <CovidData data={country.generalInfo.cases} icon={AccessibilityNewIcon} label="confirmed cases" color="red" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CovidData data={country.generalInfo.recovered} icon={HomeIcon} label="recoveries" color="green" />
                                    </Grid>
                                </Grid>
                            </div>


                            <div className={`${classes.concaveContainer} ${classes.travelContainer}`}>

                                <TravelAdvisory obj={country.travelInfo.advisory} handleThemeColor={handleThemeColor} />

                                <div style={{ padding: 10 }}>
                                    <div className={classes.travelRestriction}>
                                        <Typography variant="h5" color="textPrimary" >
                                            Travel restrictions
                            </Typography>
                                        <Typography variant="subtitle1" color="textSecondary" align="justify" style={{ padding: "10px 20px", lineHeight: "1.4em" }}>
                                            {country.travelInfo.mainText}
                                        </Typography>
                                    </div>
                                    <div className={`${classes.flatContainer} ${classes.travelRestrictionText}`}>
                                        <Scrollbars
                                            style={{ height: 130 }}>
                                            <Typography variant="body2" color="textSecondary" align="justify" className={classes.travelInfoDetailedText}>
                                                {(country.travelInfo.detailedText) ? country.travelInfo.detailedText : "oops this box is empty, which means that we either couldn't find the data or it wasn't good enough to appear here..."}
                                            </Typography>
                                        </Scrollbars>
                                    </div>
                                </div>
                                {country.policyInfo && <GovernmentResponse dataObj={country.policyInfo} themeColor={themeColor} />}
                            </div>

                        </div>
                    </Grid>

                    <Grid item xl={1} />

                    {/* ==================Containment Policies======================= */}
                    <Grid item xs={12} lg={4} xl={3} style={{ margin: "0px auto" }}>
                        {/* ==============mobility=============== */}
                        {country.mobilityInfo && <React.Fragment>  <Typography variant="h5" color="textPrimary" style={{ marginBottom: 20 }}>
                            Mobility trends
                   </Typography>

                            <MobilityCards dataObj={country.mobilityInfo.array} />


                            <div style={{ position: "relative", width: "100%", height: 40 }}>
                                <Typography variant="subtitle1" color="textSecondary"
                                    style={{ position: "absolute", bottom: 0, right: 0, lineHeight: 1.1 }}>
                                    This data is relative to baseline data recorded from first 5 weeks of 2020
                   </Typography>
                            </div></React.Fragment>}

                    </Grid>
                    <Grid item xl={1} />


                </Grid>
            </Container >}
        </React.Fragment>

    );
}

export default Country;