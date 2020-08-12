import React, { useContext } from 'react';
import ClassesContext from '../../context/classesContext';
import Truncate from 'react-truncate';
import { Typography } from '@material-ui/core';

const PreviewSource = ({ preview }) => {
    const classes = useContext(ClassesContext);



    return (
        <React.Fragment>
            <img src={preview.imgUrl} className={classes.previewImg} />
            <div style={{ margin: 20 }}>
                <Typography variant="h6" component="p" >
                    {preview.title}
                </Typography>
                <Truncate lines={3} ellipsis={<span>...</span>} style={{ textAlign: "justify" }}>
                    <Typography variant="body1" align="justify" component="p" >
                        {preview.description}
                    </Typography>
                </Truncate>
                <Truncate lines={1} ellipsis={<span>...</span>} style={{ color: "gray", fontSize: "0.8em" }}>
                    <Typography variant="caption" align="justify" component="p" >
                        {preview.url}
                    </Typography>
                </Truncate>
            </div>
        </React.Fragment>
    );
}

export default PreviewSource;