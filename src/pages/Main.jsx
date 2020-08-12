import React, { useContext, useState, useEffect } from 'react'

import ClassesContext from './../context/classesContext';
import AboutInfo from './components/AboutInfo';
import UpdateCards from './components/UpdateCards';
import SearchSelect from './components/SearchSelect';
import LoaderDoggo from './components/LoaderDoggo';
//materialUI
import { Grid, Hidden } from '@material-ui/core';
import { Container, Typography, Divider } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

//api
// import { getHome } from './../api/api';


const Main = ({ location }) => {
    const classes = useContext(ClassesContext);
    // const [approvedCards, setApprovedCards] = useState([]);
    // const [pendingCards, setPendingCards] = useState([]);
    window.scrollTo(0, 0);

    // //load cards
    // useEffect(() => {
    //     // Create an scoped async function in the hook
    //     async function getCards() {
    //         await loadCards();
    //     }
    //     // Execute the created function directly
    //     getCards();
    // }, []); //execute when component is rendered



    // const loadCards = async () => {
    //     //console.log("loading home cards") //home cards includes 8 approved and 8 pending
    //     try {
    //         const response = await getHome();
    //         const homeSources = response.data;
    //         const approved = [];
    //         const pending = [];
    //         //sorting sources
    //         homeSources.map(h => {
    //             if (h.status === "approved") approved.push(h);
    //             if (h.status === "pending") pending.push(h);
    //         })
    //         setApprovedCards(approved);
    //         setPendingCards(pending);
    //     } catch (exception) {
    //         console.log("Card load failed")
    //     }
    // };

    return (
        <Container className={classes.root}>
            <Grid container spacing={2} >
                <Grid item lg={1} xl={2} >
                    <img scr={LoaderDoggo} style={{ visibility: "hidden" }} />
                </Grid>
                <Grid item xs={12} lg={10} xl={6} >
                    <div style={{ marginTop: 50 }}>

                        <SearchSelect />
                        <div className={` ${classes.homeWelcomeText} ${classes.flatContainer}`}>
                            <Typography component="h1" variant="h4" style={{ color: "#34515E" }}>
                                Traveling during COVID-19 pandemic?
                    </Typography>
                            <Typography component="h2" variant="h5" color="primary" className={classes.mainSubText}>
                                Find essential information to for a safe and enjoyable trip
                    </Typography>
                        </div>
                        <AboutInfo />
                    </div>
                </Grid>
                <Grid item lg={1} />
                <Grid item xs={12} xl={3}>
                    {/* <Typography component="h3" variant="h6" color="textPrimary" style={{ marginTop: 20 }}>
                        UPDATES
                    </Typography>
                    <UpdateCards /> */}
                </Grid>

            </Grid>

        </Container >
    );
}

export default Main;