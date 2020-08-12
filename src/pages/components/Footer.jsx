import React, { useContext } from 'react'
import ClassesContext from '../../context/classesContext';
import Truncate from 'react-truncate';
import travel from "./../../images/travel.svg";
import plane from "./../../images/plane.svg";
import doctor from "./../../images/doctor.svg";
import history from './../../utils/history';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import { Grid } from '@material-ui/core';

const Footer = () => {
    const classes = useContext(ClassesContext);
    const content = [{ img: plane, text: "Decide whether you should travel", a: 1 }, { img: travel, text: "Learn local policies", a: 2 },
    { img: doctor, text: "Protect yourself and others", a: 3 }]
    return (
        <div className={classes.aboutInfoContainer}>
            {content.map(c =>
                <div key={c.a} className={classes.aboutInfoElement}>
                    <div className={classes.aboutInfoImageContainer}
                        style={{ backgroundImage: `url(${c.img})`, /* The image used */ }} >
                        <div className={classes.aboutInfoInnerShadow} />
                    </div>
                    <Typography component="p" variant="subtitle1" color="textSecondary" align="center" style={{ width: "80%", lineHeight: 1.2, marginTop: 20 }}>
                        {c.text}
                    </Typography>
                </div>
            )}
        </div>
    );
}

export default Footer;