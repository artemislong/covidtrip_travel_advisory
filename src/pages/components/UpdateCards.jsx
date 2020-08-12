import React, { useContext } from 'react'
import ClassesContext from '../../context/classesContext';
import Truncate from 'react-truncate';
import travel from "./../../images/travel.svg";
import history from './../../utils/history';
import vietnamFlag from './../../images/vietnamFlag.svg'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import { Grid } from '@material-ui/core';


const UpdateCards = () => {
    const classes = useContext(ClassesContext);
    const content = [{
        country: "Vietnam", countryId: "vi", date: "6 hours ago",
        flag: vietnamFlag, content: "Updated travel restrictions "
    },
    {
        country: "Vietnam", countryId: "vi", date: "6 hours ago",
        flag: vietnamFlag, content: "Updated travel restrictions "
    },
    {
        country: "Vietnam", countryId: "vi", date: "6 hours ago",
        flag: vietnamFlag, content: "Updated travel restrictions "
    },
    {
        country: "Vietnam", countryId: "vi", date: "6 hours ago",
        flag: vietnamFlag, content: "Updated travel restrictions "
    },
    {
        country: "Vietnam", countryId: "vi", date: "6 hours ago",
        flag: vietnamFlag, content: "Updated travel restrictions "
    }]

    const handleClick = (id) => {
        history.push(`/${id}`)
    }

    return (
        <div className={classes.updateCardsContainer}>
            {content.map(c =>
                <div key={c.a} onClick={() => handleClick(c.countryId)} className={classes.updateCard}>
                    <Typography component="span" variant="subtitle1" color="textPrimary" style={{ width: "80%", lineHeight: 1.1, marginTop: 5 }}>
                        {c.content} for {c.country}
                    </Typography>
                    <Typography component="span" variant="body2" color="textSecondary" className={classes.updateCardDate}>
                        {c.date}
                    </Typography>
                </div>
            )}
        </div>
    );
}

export default UpdateCards;