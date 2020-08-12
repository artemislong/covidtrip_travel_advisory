import React, { useContext, useState, useEffect } from 'react'

import ClassesContext from './../context/classesContext';
import AboutInfo from './components/AboutInfo';
import UpdateCards from './components/UpdateCards';
import SearchSelect from './components/SearchSelect';
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
                <Grid item xl={2}>

                </Grid>
                <Grid item xs={12} md={6} >
                    <div style={{ marginTop: 50 }}>
                        <SearchSelect />
                        <div style={{ padding: 20 }}>
                            <Typography component="h1" variant="h4" color="textPrimary" style={{ marginTop: 20 }}>
                                Considering to travel at this moment?
                    </Typography>
                            <Typography component="h2" variant="h5" color="textSecondary" style={{ marginTop: 5, width: "80%" }}>
                                Find essential information for a safe trip during Covid-19 pandemic
                    </Typography>
                        </div>
                        <AboutInfo />
                    </div>
                </Grid>
                <Grid item md={1} />
                <Grid item xs={12} md={4} xl={3}>
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