import React, { useContext } from 'react'
import ClassesContext from '../../context/classesContext';
import Truncate from 'react-truncate';

import history from './../../utils/history';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import GradeIcon from '@material-ui/icons/Grade';
import { Grid } from '@material-ui/core';

const PreviewCard = ({ data }) => {

    const classes = useContext(ClassesContext);

    const { id, title, imageUrl = undefined, description, tags, rating, date } = data;

    return (
        <Card variant="outlined" className={classes.previewCard}>
            <CardActionArea style={{ position: "static" }} onClick={() => history.push(`/resource/${id}`, { ...data })}>
                <CardMedia
                    component="img"
                    className={classes.previewCardMedia}
                    image={imageUrl}
                />
                <CardContent className={classes.previewCardContent}>
                    <Typography gutterBottom color="primary" variant="subtitle1" component="h3"
                        className={classes.previewCardTitle} >
                        <Truncate lines={2} ellipsis={<span>...</span>}>
                            {title}
                        </Truncate>
                    </Typography>
                    <div className={classes.previewCardTags}>
                        {tags.slice(0, 2).map(t => <Chip label={t.name} style={{ height: 20, marginRight: 5 }} />)}
                    </div>
                    <Typography variant="body2" align="justify" component="p" style={{ margin: "5px 0px" }}>
                        {description}
                    </Typography>


                </CardContent>
                <div className={classes.previewCardFooter}>
                    <Grid container spacing={1} >
                        <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
                            <GradeIcon color="primary" fontSize="small" />
                            <Typography variant="body2" color="textSecondary" component="span" style={{ fontWeight: 600 }}>
                                {rating}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography variant="body2" color="textSecondary" align="right" component="div" style={{ width: "85%", marginRight: 10 }}>
                                {date}
                            </Typography>
                        </Grid>
                    </Grid></div>
            </CardActionArea>
        </Card >
    );
}

export default PreviewCard;