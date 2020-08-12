import React, { useContext, useState } from 'react'
import ClassesContext from '../../context/classesContext';
import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Skeleton from '@material-ui/lab/Skeleton';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';

import PreviewSource from "./PreviewSource";

const LinkSkeleton = ({ status }) => {
    return (
        <React.Fragment>
            <Skeleton variant="rect" width={"30%"} height={"70%"} animation={status} />
            <div style={{ margin: "auto", width: "60%" }}>
                <Skeleton width={"60%"} animation={status} />
                <Skeleton animation={status} />
            </div>
        </React.Fragment>
    )
}
const LinkPreview = ({ status, preview }) => {
    if (status === "loading") return (
        <LinkSkeleton status={"wave"} />
    )
    if (status === "error") return (
        <React.Fragment>
            <WarningIcon color="error" />
            <Typography color="error" variant="h6" component="span" style={{ fontWeight: 600 }}>
                The link might not working or preview is not available.
                    </Typography>
        </React.Fragment>
    )
    if (status === "loaded") return (
        <React.Fragment>
            <PreviewSource preview={preview} />
        </React.Fragment>
    )
    return (
        <LinkSkeleton status={false} />
    )

};

const UrlValidator = ({ urlVer }) => {
    if (urlVer === "verified") return (
        <Typography variant="body2" component="p" style={{ fontWeight: 600, color: "#2eb82e" }}>
            The url address is valid, please check the preview.
        </Typography>
    );
    if (urlVer === "failed") return (
        <Typography variant="body2" component="p" style={{ fontWeight: 600, color: "#ff3333" }}>
            The url address is invalid, please check again or report error to us.
        </Typography>
    );
    return (
        <Typography variant="body2" component="p" style={{ fontWeight: 600, color: "gray" }}>
            Check your url in order to load preview.
        </Typography>
    )
}

const ResourceForm = ({ closeCreate, submit }) => {
    const classes = useContext(ClassesContext);
    const [language, setLanguage] = React.useState('vi');
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [urlVer, setUrlVer] = React.useState('');
    const [preview, setPreview] = React.useState(undefined);
    const [status, setStatus] = React.useState(undefined); //no, loading, loaded
    const [inputValidate, setInputValidate] = React.useState('');

    const titleMinLength = 12;
    const titleMaxLength = 50;
    const descriptionMinLength = 100;
    const descriptionMaxLength = 1000;

    const handleInputLink = (event) => {
        setUrl(event.target.value);
        setUrlVer('');
    };

    const handleValidate = (input) => {
        const validator = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/);
        const validation = validator.test(input);
        return validation
    };

    const handleLink = async () => {
        setUrlVer('')
        setStatus(undefined);
        setPreview(undefined);
        const validation = handleValidate(url);
        if (!validation) {
            setUrlVer("failed");
            return;
        }
        setUrlVer("verified");
        handlePreview(validation);
    };

    const handlePreview = (validation) => {
        if (urlVer !== "verified" && !validation) {
            return null;
        }
        //send url to server, get preview
        let previewData = {
            imgUrl: "https://i.ytimg.com/vi/mOAPAMwJ4kA/maxresdefault.jpg",
            url: url,
            title: "Ligma takes over the world",
            description: "in this uncertain times, God decided to surprise us we a news: Ligma disease is spreading around the globe. Anti-vaxxers began taking vaxines to protedt themselves."
        }
        setStatus("loading");
        setTimeout(() => {
            setPreview(previewData);
            setStatus("loaded")
        }, 10000);

    };

    const handleSubmit = (event) => {
        event.preventDefault()
        //validation
        //title
        let error = [];
        if (title.length < titleMinLength) error.push(<Box>Title is too short</Box>);
        if (title.length > titleMaxLength) error.push(<Box>Title is too long</Box>);
        if (urlVer !== "verified") error.push(<Box>Url is invalid or not verified</Box>);
        if (description.length < descriptionMinLength) error.push(<Box>Description is too short</Box>);
        if (title.length > descriptionMaxLength) error.push(<Box>Description is too long</Box>);
        if (error.length !== 0) {
            setInputValidate(error);
            return
        }
        setInputValidate('');
        const source = {
            url,
            language,
            [language]: {
                title,
                description
            },
            preview,
        }

        submit(source)
    };


    return (
        <Backdrop className={classes.formContainer} open={true} >
            <Paper className={classes.formPaper} elevation={3} >
                <div className={classes.formHeader}>
                    <Typography variant="h5" component="p" style={{ fontWeight: 600 }}>
                        Publish Source
                    </Typography>

                    <IconButton onClick={closeCreate}
                        className={classes.closeForm}>
                        <CloseIcon style={{ fontSize: 40 }} />
                    </IconButton>
                </div>

                <div style={{ padding: 20 }}>

                    <form>
                        <div>
                            <Typography variant="h6" component="p" gutterBottom>
                                Choose submission language
                        </Typography>
                            <FormControl required className={classes.formControl}>
                                <Select
                                    id="language"
                                    value={language}
                                    onChange={(event) => setLanguage(event.target.value)}
                                    name="Language"

                                >
                                    <option value={"vi"} className={classes.viButton}>Tiếng Việt</option>
                                    <option value={"en"} className={classes.enButton}>English</option>
                                </Select>
                            </FormControl>
                            <Typography variant="h6" component="p" gutterBottom style={{ marginTop: 20 }}>
                                Source's url address
                        </Typography>
                            <Typography variant="body2" component="p" color="textSecondary" gutterBottom>
                                Make sure that the url address works and is safe. The preview of your source will pop-up below.
                        </Typography>
                            <div style={{
                                display: "flex", flexWrap: 'nowrap',
                                justifyContent: 'space-evenly', alignItems: "center",
                            }}>
                                <TextField
                                    required
                                    fullWidth
                                    id="url"
                                    label="Url"
                                    value={url}
                                    onChange={handleInputLink}
                                    variant="outlined"
                                />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    onClick={handleLink}
                                >
                                    Check
                        </Button>
                            </div>


                            <UrlValidator urlVer={urlVer} />


                            <Typography variant="subtitle1" component="p" style={{ margin: 20, fontWeight: 600, marginBottom: 10 }}>
                                Link preview
                        </Typography>
                            <div className={classes.linkPreview} >
                                <LinkPreview status={status} preview={preview} />
                            </div>

                            <Typography variant="h6" component="p" gutterBottom style={{ marginTop: 20 }}>
                                Title
                        </Typography>
                            <Typography variant="body2" component="p" color="textSecondary" gutterBottom>
                                Your title should include source's name and what data it provides.
                        </Typography>
                            <TextField
                                required
                                fullWidth
                                id="title"
                                label="Title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                variant="outlined"
                            />
                            <Typography variant="body2" component="div"
                                color={(title.length > titleMaxLength || title.length < titleMinLength) ? "error" : "textSecondary"}
                                align="right" gutterBottom>
                                <Box style={{ fontWeight: 600 }}>{title.length}</Box> min {titleMinLength} - max {titleMaxLength} characters
                        </Typography>
                            <Typography variant="h6" component="p" gutterBottom style={{ marginTop: 20 }}>
                                Description
                        </Typography>
                            <Typography variant="body2" component="p" color="textSecondary" gutterBottom>
                                You can give an overview of the source or the data it displays, a review of its data reliability, or a quick tip on how to navigate the source.
                        </Typography>
                            <TextField
                                required
                                fullWidth
                                multiline
                                rows={6}
                                id="description"
                                label="Description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                variant="outlined"
                            />
                            <Typography variant="body2" component="div"
                                color={(description.length > descriptionMaxLength || description.length < descriptionMinLength) ? "error" : "textSecondary"}
                                align="right" gutterBottom>
                                <Box style={{ fontWeight: 600 }}>{description.length}</Box> min {descriptionMinLength} - max {descriptionMaxLength} characters
                        </Typography>

                            {/* <Typography variant="h6" component="p" gutterBottom style={{ marginTop: 20 }}>
                                Image Url (Optional)
                        </Typography>
                            <Typography variant="body2" component="p" color="textSecondary" gutterBottom>
                                You can pass link of source's image/logo or any other image that would describe your source better. One way
                                to the get image link is right-click on an image in Google Image and choose "copu url address".
                        </Typography>
                            <TextField
                                required
                                fullWidth
                                id="imgUrl"
                                label="Image Url"
                                value={imgUrl}
                                onChange={(event) => setImgUrl(event.target.value)}
                                variant="outlined"
                            /> */}

                        </div>
                        <div style={{
                            height: 150,
                            display: "flex", flexWrap: 'nowrap',
                            justifyContent: 'space-between', alignItems: "center",
                        }}>
                            <Typography variant="body2" component="p"
                                color={"error"} gutterBottom>
                                {inputValidate}
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                        </Button></div>
                    </form>
                </div>
            </Paper>

        </Backdrop>
    );
}

export default ResourceForm;