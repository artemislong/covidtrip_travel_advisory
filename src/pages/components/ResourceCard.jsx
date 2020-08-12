import React, { useContext, useState } from 'react'
import { useLocation } from "react-router-dom";
import history from './../../utils/history';

import ClassesContext from '../../context/classesContext';
import dataImage from "./../../images/dataImage.svg";

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import IconButton from '@material-ui/core/IconButton';
import PublicIcon from '@material-ui/icons/Public';
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import WarningIcon from '@material-ui/icons/Warning';
import { Grid } from '@material-ui/core';
import PreviewSource from './PreviewSource';

const ResourceCard = () => {
    const classes = useContext(ClassesContext);
    const location = useLocation();
    const [vote, setVote] = useState(undefined);

    // the logic here is if the user navigated from another page, the data will be passed from state. If user accesses with 
    // URL, the app will fetch data and hide go back button
    const { id, title, imageUrl = undefined, description, tags, rating, date, sourceUrl, versions } = location.state;
    const preview = {
        imgUrl: "https://i.ytimg.com/vi/mOAPAMwJ4kA/maxresdefault.jpg",
        url: "google.comhttps://i.ytimg.com/vi/mOAPAMwJ4kA/maxresdefault.jpg",
        title: "Ligma takes over the world",
        description: "in this uncertain times, God decided to surprise us we a news: Ligma disease is spreading around the globe. Anti-vaxxers began taking vaxines to protedt themselves."
    }

    const handleUpvote = () => {
        setVote(vote === "up" ? undefined : "up")
    }
    const handleDownvote = () => {
        setVote(vote === "down" ? undefined : "down")
    }

    return (
        <Paper className={classes.resourceCardContainer}>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>

                {location.state && <IconButton color="primary" onClick={null} onClick={() => history.goBack()}>
                    <ArrowBackIcon fontSize="large" />
                </IconButton>}

                <div style={{ marginLeft: 10 }}>
                    <Typography gutterBottom variant="h5" component="h1"
                        className={classes.previewCardTitle} >
                        {title}
                    </Typography>
                    <div className={classes.previewCardTags}>
                        {tags.map(t => <Chip label={t.name} style={{ height: 20, marginRight: 5 }} />)}
                    </div>
                </div>
            </div>
            <div className={classes.resourceCardAction}>
                {/* ----------voting--------- */}
                <Tooltip title="Upvote" arrow>
                    <IconButton size="small" color={vote === "up" ? "primary" : "textSecondary"}
                        aria-label="upvote"
                        onClick={() => handleUpvote()}>

                        <ThumbUpAltIcon fontSize="small" />
                    </IconButton></ Tooltip>

                <Typography variant="subtitle1" color="textSecondary"
                    style={{ fontWeight: 600, margin: "0px 5px" }}>{rating}</Typography>

                <Tooltip title="Downvote" arrow>
                    <IconButton size="small" title="Downvote" color={vote === "down" ? "primary" : "textSecondary"}
                        aria-label="downvote"
                        onClick={() => handleDownvote()}>
                        <ThumbDownAltIcon fontSize="small" />
                    </IconButton></ Tooltip>

                <div style={{ flexGrow: 1 }} />
                {/* ----------share--------- */}
                {/* <Typography variant="subtitle1" color="textSecondary" style={{ fontWeight: 600, margin: "0px 5px" }}>{rating}</Typography> */}
                <Button startIcon={<PublicIcon />} color="primary">Share</Button>
                <div style={{ flexGrow: 1 }} />
                {/* 
                <Button startIcon={<CreateIcon />} color="primary">Update</Button>
                <div style={{ flexGrow: 1 }} /> */}
                <Button startIcon={<WarningIcon />} color="error" style={{ color: "red" }}>Report</Button>

            </div>

            {/* -------------------source preview-------------------------- */}
            <Tooltip title="Click to go to source" arrow>
                <div className={classes.sourcePreviewBox} >
                    <PreviewSource preview={preview} />
                </div></Tooltip>

            <Typography gutterBottom variant="subtitle1" component="h3" style={{ fontWeight: 600 }}>
                Description
            </Typography>
            <Typography gutterBottom variant="body2" align="justify" component="p" >
                {description}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="h3" style={{ fontWeight: 600, marginTop: 20 }}>
                Versions
            </Typography>
            {
                versions.map(v =>
                    <Typography key={v.ver} gutterBottom variant="body2" align="justify" component="p" >
                        <Box style={{ fontWeight: 600 }} component="span">{v.date} by {v.contributor}:</Box> {v.status}
                    </Typography>
                )
            }




            {/* <div className={classes.sourcePreview}>
                <Typography gutterBottom variant="h6" component="h2" style={{ fontWeight: 600 }}
                    className={classes.sourcePreviewTitle}>
                    Source preview
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h3" style={{ fontWeight: 600 }}>
                    Screenshot
                </Typography>
                <div style={{ marginBottom: 20, display: "flex", justifyContent: "center" }}>
                    <img style={{ width: "80%", borderRadius: 20 }} src={imageUrl || dataImage} />
                </div>

                <div>
                    <Typography gutterBottom variant="subtitle1" component="span" style={{ fontWeight: 600, marginRight: 10 }}>
                        Web title:
                    </Typography>
                    <Typography gutterBottom variant="body2" component="span" >
                        Ligma balls - something else
                    </Typography>
                </div>
                <div>
                    <Typography gutterBottom variant="subtitle1" component="span" style={{ fontWeight: 600, marginRight: 10 }}>
                        URL:
                    </Typography>
                    <Link href={sourceUrl} target="_blank">{sourceUrl}</Link>
                </div>
            </div> */}
        </Paper >
    );
}

export default ResourceCard;