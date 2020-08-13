import React, { useContext } from 'react';
import ClassesContext from './../../context/classesContext';
import shiba from './../../images/shiba.gif';
import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
const LoaderDoggo = () => {
    // document.body.style.overflow = 'hidden' //dissable scrolling
    const classes = useContext(ClassesContext);
    const { t, i18n } = useTranslation();
    return (
        <React.Fragment>
            <div className={`${classes.flatContainer} ${classes.blueShadow}`} style={{ width: 150, height: 150, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <img src={shiba} style={{ width: "100%" }} />
                <div style={{ background: "rgba(0,0,0,0.1)", width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }} />
            </div>
            <div style={{ position: "absolute", bottom: 20 }} >
                <Typography variant="caption" color="textPrimary" align="center" component="h2" style={{ fontStyle: "italic", fontSize: "1em" }}>{t("One minute of patience")}<br />{t("ten years of peace")}</Typography>
            </div>
        </React.Fragment>
    );
}

export default LoaderDoggo;