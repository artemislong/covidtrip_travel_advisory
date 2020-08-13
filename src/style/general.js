import {
    createMuiTheme,
    responsiveFontSizes
} from '@material-ui/core/styles';
import {
    fade,
    makeStyles
} from '@material-ui/core/styles';
import themeObject from "./theme";
// import vietnamFlag from "./../images/vietnamFlag.svg"
// import englishFlag from "./../images/englishFlag.svg"
//---------------------Common styles---------------------
const mainColor = "#ffd100";
const secondaryColor = '#ffc371';
const unColor = "rgba(91,185,149,0.8)";
const blueWhiteShadow = "0px 12px 16px #EAF0F8";
const backgroundColor = "#EFEEEE";
const darkShadow = "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)";
const yellow = "#e0b000";
const green = "#79d756";
const purple = "#9956d7";
const blue = "#56ced7";
const pink = "#d75656";
const neutral = "#d1d8e0";
const getShadow = (color) => {
    return `0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px ${color}`;
}
const getInsetShadow = (color) => {
    return `inset 3px 3px 7px ${color} , inset -3px -3px 7px #FFFFFF`
}
const getGlow = (color) => {
    return `0 0 10px ${color}`
}

//----------------------generating MUI theme and assign responsive font size property
// then create a styling object and passing theme to it for styling.
//finally, we export both theme and stylingObject to App.js to execute in stateless function component.
// this way we prevented hook errors.

let theme = createMuiTheme(themeObject);
theme = responsiveFontSizes(theme);

const stylingObject = (theme) => ({
    root: {
        minHeight: "100vh",
        maxWidth: "100vw",
        overflowX: 'hidden',
        // background: "#f7f7f7",
        background: backgroundColor,
        padding: "70px 15px",
        position: "relative",
        boxSizing: "border-box",
        [theme.breakpoints.down(500)]: {
            width: "auto",
            padding: "40px 5px",
        },
    },
    loading: {
        zIndex: 49, position: "relative",
        display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh"
    },
    loadingText: {
        position: "relative",
        color: "rgba(0, 0, 0, .3)",
    },
    button: {
        margin: theme.spacing(1),
        borderRadius: 20,
        marginLeft: 12
    },
    // container: {
    //     [theme.breakpoints.down(700)]: {
    //         marginTop: 10,
    //         marginBottom: 0,
    //         minHeight: 500,
    //     },
    // },
    //=================================Home================================
    mainSubText: {
        marginTop: 5, marginLeft: 20,
        width: "70%",
        [theme.breakpoints.down(500)]: {
            marginLeft: 0,
            width: "100%",
        },
    },
    homeWelcomeText: {
        padding: 20, backgroundColor: "#FAACA8",
        background: `${unColor} !important`,
        margin: "20px auto 0px auto", maxWidth: 500
    },
    aboutInfoContainer: {
        paddingTop: 15,
        display: "flex",
        //flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    aboutInfoElement: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "33%",

    },
    aboutInfoImageContainer: {
        width: 120,
        height: 120,
        // position: "relative",
        border: "0px solid #fff",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center", alignItems: 'center',
        boxShadow: darkShadow,
        overflow: "hidden",
        [theme.breakpoints.down(500)]: {
            width: 70,
            height: 70,
        },
    },
    aboutInfoImage: {
        width: "80%",
        //objectFit: "cover"
    },
    updateCardsContainer: {
        paddingTop: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    updateCard: {
        //border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 30,
        background: "linear-gradient(135deg,  #ffffff, #ebf2ff )",
        //dark
        boxShadow: blueWhiteShadow,
        width: "95%",
        height: 85,
        position: "relative",
        display: "flex",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer"
    },

    updateCardDate: {
        position: "absolute",
        bottom: 5,
        right: 15,
        fontStyle: "italic"
    },
    // backdrop: {
    //     zIndex: 100000,
    //     color: mainColor,
    //     background: "rgba(255,255,255,0.6)",
    // },
    //=======================Country================================
    countryNameFlag: {
        marginTop: 20,
        display: "flex",
        alignItems: "center",
    },
    countryFlag: {
        width: 30,
        borderRadius: 5,
        boxShadow: blueWhiteShadow,
    },
    concaveContainer: {
        //backgroundColor: "#f2f2f2",9px 9px 16px rgba(163, 177, 198, 0.6),-9px -9px 16px rgba(255, 255, 255, 0.5)
        //width: "100%",
        boxShadow: `${darkShadow}, inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF`,
        background: "linear-gradient(318.32deg, rgba(163, 177, 198, 0.05) 0%, rgba(163, 177, 198, 0.05) 55%, rgba(163, 177, 198, 0.15) 100%)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 20,
        overflow: "hidden",
    },
    flatContainer: {
        // backgroundColor: "#f2f2f2",
        // boxShadow: "0px -6px 10px rgba(255, 255, 255, 1), 0px 4px 15px rgba(0, 0, 0, 0.15)",
        boxShadow: darkShadow,
        background: backgroundColor,
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: 20,
        overflow: "hidden",
    },
    covidCases: {
        width: "75%",
        position: "relative",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "20px 0px",
        marginTop: 30,
        padding: "20px 40px",
        [theme.breakpoints.down(500)]: {
            width: "auto",
            padding: "20px 10px",
        },
    },
    smallCircle: {
        boxShadow: darkShadow,
        marginLeft: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50px !important",
        height: "50px !important",
        borderRadius: "50%",
    },
    pressedCircle: {
        boxShadow: `${darkShadow}, inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #FFFFFF`,
        background: "linear-gradient(318.32deg, rgba(163, 177, 198, 0.05) 0%, rgba(163, 177, 198, 0.05) 55%, rgba(163, 177, 198, 0.15) 100%)",
        border: "1px solid rgba(255,255,255,0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
        borderRadius: "50%",
        position: "absolute",
        top: 20,
        left: 20
    },
    smallSquare: {
        boxShadow: darkShadow,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    travelContainer: {
        margin: "30px 0px",

        padding: "20px 0px 50px 0px",
    },
    travelAdvisory: {
        width: "70%",
        margin: "20px auto",
        height: 120,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down(500)]: {
            width: "90%",
        },
    },
    travelRestriction: {
        padding: "20px 40px",
        [theme.breakpoints.down(500)]: {

            padding: "20px 0px",
        },
    },
    travelRestrictionText: {
        height: 130,
        width: "80%",
        margin: "0px auto",
        padding: 20,
        overflowY: "hidden"
    },
    travelInfoDetailedText: {
        padding: "10px 20px", lineHeight: "1.2em",
        [theme.breakpoints.down(500)]: {
            padding: "10px 0px",
        },
    },
    containmentPolicies: {
        margin: "30px auto",
        width: "100%",
        zIndex: 40,
        position: "relative",
        overflow: "visible"
    },
    dataPieceContainer: {
        position: "relative",
        margin: "20px auto 10px auto",
        width: "auto",
        maxWidth: 200,

    },
    dataPieceContent: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        margin: "30px auto 10px auto",
        [theme.breakpoints.down(500)]: {
            justifyContent: "flex-start",
        },
    },

    mobilityContainer: {
        // width: "100%",
        maxWidth: 250,
        margin: "0px auto",
        //height: 120,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 30,
        [theme.breakpoints.down(500)]: {
            padding: 10, paddingTop: 20
        },
    },
    mobilityInfo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    mobilityNumber: {
        fontWeight: 600, fontSize: "2.7em",
        [theme.breakpoints.down(500)]: {
            fontSize: "1.7em",
        },
    },
    mobilityIcon: {
        fontSize: "2.5em",
        [theme.breakpoints.down(500)]: {
            fontSize: "1.5em",
        },
    },
    mobilityCategory: {
        lineHeight: 1.2, marginTop: 10, fontSize: "1.2em",
        [theme.breakpoints.down(500)]: {
            //height: 2.4,
            height: "2.4em",
            fontSize: "1em",
            width: "70%"
        },
    },
    positiveBackground: {
        // textShadow: "-8px -8px 12px rgba(255,255,255,0.4),8px 8px 12px rgba(0,0,0,0.08)",
        //backgroundImage: greenVerGradient,
        backgroundSize: "100%",
        backgroundRepeat: "repeat",

        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        MozBackgroundClip: "text",
        MozTextFillColor: "transparent",
    },
    negativeBackground: {
        // backgroundImage: pinkVerGradient,
        backgroundSize: "100%",
        backgroundRepeat: "repeat",

        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        MozBackgroundClip: "text",
        MozTextFillColor: "transparent",
    },
    redShadow: {
        boxShadow: getShadow(pink)
    },
    purpleShadow: {
        boxShadow: getShadow(purple)
    },
    blueShadow: {
        boxShadow: getShadow(blue)
    },
    yellowShadow: {
        boxShadow: getShadow(yellow)
    },
    greenShadow: {
        boxShadow: getShadow(green)
    },
    neutralShadow: {
        boxShadow: getShadow(neutral)
    },
    redInsetShadow: {
        boxShadow: getInsetShadow(pink)
    },
    purpleInsetShadow: {
        boxShadow: getInsetShadow(purple)
    },
    blueInsetShadow: {
        boxShadow: getInsetShadow(blue)
    },
    yellowInsetShadow: {
        boxShadow: getInsetShadow(yellow)
    },
    greenInsetShadow: {
        boxShadow: getInsetShadow(green)
    },
    neutralInsetShadow: {
        boxShadow: getInsetShadow(neutral)
    },
    redDataText: {
        color: pink,
        // textShadow: getGlow(pink)
    },
    purpleDataText: {
        color: purple
    },
    greenDataText: {
        color: green,
        // textShadow: getGlow(green)
    },
    yellowDataText: {
        color: yellow,
        // textShadow: getGlow(yellow)
    },
    blueDataText: {
        color: blue,
        // textShadow: getGlow(blue)
    },
    neutralDataText: {
        color: neutral,
    },

    //_______________________App Bar______________________________
    appBar: {
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        position: "relative",
    },
    appBarShadow: {
        boxShadow: blueWhiteShadow,

    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "auto",
        padding: "5px 0px"
        //  width: "100%"
    },
    title: {
        cursor: "pointer"
    },
    // sectionDesktop: {
    //     display: 'none',
    //     [theme.breakpoints.up(500)]: {
    //         display: 'flex',
    //         justifyContent: "flex-end",
    //         alignItems: "center"
    //     },
    // },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        boxShadow: "inset 6px 6px 11px #d9d9d9, inset -6px -6px 11px #ffffff",
        // height: 40,
        display: "flex",
        justifyContent: "flex-end",
        // width: '100%',
        [theme.breakpoints.up('sm')]: {
            //marginLeft: theme.spacing(3),
            // width: '50%',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cssFocused: {},
    cssOutlinedInput: {
        "& $notchedOutline": {
            borderColor: "rgba(0,0,0,0) !important",
            borderWidth: 0
        },
        "&:hover $notchedOutline": {
            borderColor: "rgba(0,0,0,0) !important",
            borderWidth: 0
        },
        "&$cssFocused $notchedOutline ": {
            borderWidth: 0,
            borderColor: "rgba(0,0,0,0) !important",
        }
    },
    notchedOutline: {},


    //_______________________footer bar__________________________
    footerContainer: {
        width: "100vw", height: "100vh",
        position: "relative",
        padding: 10,
        boxSizing: "border-box",
        paddingTop: 30,
        background: " #1e323e",
        display: "flex", justifyContent: 'center', flexDirection: "column",
        [theme.breakpoints.down(500)]: {
            height: "auto"
        },
    },
    footer2020Text: {
        margin: "20px auto"
    },
    footerImageContainer: {
        width: "90%",
        margin: "5px auto",
        maxWidth: 300, borderRadius: 30,
        display: "flex", flexDirection: "column", justifyContent: "center",
    },
    footerAboutUsImage: {
        width: "100%",
        margin: "10px 0px",
        borderRadius: 30
    },
    footerButton: {
        background: "linear-gradient(145deg, #61c69f, #52a786)",
        //boxShadow: "15px 15px 30px #4d9d7f, -15px -15px 30px #69d5ab",
        margin: "10px auto", marginLeft: "auto", marginRight: "auto", color: "#FFF"
    },
});





export {
    stylingObject,
    theme
};