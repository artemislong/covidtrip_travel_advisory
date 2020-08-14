import React, { useContext, useState } from 'react'
import ClassesContext from '../../context/classesContext';
import history from './../../utils/history';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

// import AddIcon from '@material-ui/icons/Add';

import NavMenu from './NavMenu';
// import ResourceForm from './ResourceForm';
// import AlertDialog from './AlertDialog';
//api
import { postSource } from './../../api/api';



export default function NavBar({ t }) {
    const classes = useContext(ClassesContext);
    //create dialog
    // const [alertDialog, setAlert] = useState(false)

    // //create dilog handlers
    // const openAlert = (content) => {
    //     setAlert(content);
    // }
    // const cancelAlert = () => {
    //     setAlert(false);
    // }


    // //==================create form=======================
    // const [create, setCreate] = useState(false);


    // //create form handlers

    // const openCreate = () => {
    //     document.body.style.overflow = 'hidden' //dissable scrolling
    //     setCreate(true);
    // }

    // const closeCreate = () => {
    //     document.body.style.overflow = 'unset';
    //     //on close the form, the dialog will popup, content is assigned to alertDialog state
    //     openAlert({
    //         title: "Are you sure?",
    //         description: "If you close, your changes won't be saved",
    //         deny: "Cancel closing",
    //         confirm: "Close form",
    //         denyAction: cancelAlert,
    //         confirmAction: () => {
    //             setAlert(false) //close alert
    //             setCreate(false) //close form
    //         }
    //     });
    // }

    // //======================submitting form ===============================
    // //loading
    // const [loading, setLoading] = useState(false);

    // const submitCreate = async (source) => {
    //     document.body.style.overflow = 'unset';
    //     //on submit the form, the dialog will popup
    //     openAlert({
    //         title: "Confirm to publish",
    //         description:
    //             `If you confirm, your source will published and will appear in pending section. 
    //         \nThank you for your contribution.`,
    //         deny: "Cancel",
    //         confirm: "Confirm",
    //         denyAction: cancelAlert,
    //         //if confirm send, we will set loading and wait for sending data, if sent succesfully then close dialog and form
    //         confirmAction: async () => {
    //             setAlert(false) //close alert
    //             setLoading(true); //loading
    //             await handlePublishSource(source) //send data
    //         }
    //     });
    // }

    // const handlePublishSource = async (source) => {
    //     try {
    //         const response = await postSource(source);
    //         console.log(response);
    //         setLoading(false) //close loading
    //         setCreate(false) //close form
    //     } catch (exception) {
    //         console.log("Server not responding", exception)
    //         setLoading(false) //close loading
    //         setAlert(false) //close alert but keep form open
    //     }
    // };

    return (
        <div className={classes.appBar}>
            <AppBar className={classes.appBarShadow}>
                <Toolbar className={classes.toolbar}>
                    <Hidden xsDown>
                        <Typography component="h2" className={classes.title} onClick={() => history.push('/')} variant="h6" style={{ marginLeft: 10 }}>
                            Travel In Covid
                        </Typography>
                    </Hidden>

                    {/*------------------ desktop menu----------------------------  */}
                    {/* <div className={classes.sectionDesktop}> */}

                    <NavMenu />

                    {/* </div> */}
                    {/*----------------------------------------------  */}

                    {/* {!create && <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<AddIcon />}
                        onClick={openCreate}
                    >
                        Create
                        </Button>} */}

                </Toolbar>
            </AppBar>
            {/* {create && <ResourceForm closeCreate={closeCreate} submit={submitCreate} />}
            {alertDialog && <AlertDialog content={alertDialog} />}
            {/* loading backdrop */}
            {/* <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit" />
            </Backdrop> */}
        </div >
    );
}