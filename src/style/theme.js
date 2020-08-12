

const themeObject = {
    typography: {
        // fontSize: 15,
        // subtitle2: { fontWeight: "bold" },
        // h4: {
        //     '@media (max-width:350px)': {
        //         fontSize: '1.2rem',
        //     }
        // },
        fontFamily: '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 500, //was 600
            md: 650, //was 960
            lg: 930, //was 1280
            xl: 1200,
        },
    },
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#5BB995',
        },
        text: {
            primary: "#66727C",

        }
    },
};



export default themeObject;