import React, { useContext } from 'react'
import { useLocation } from "react-router-dom";
import ClassesContext from '../../context/classesContext';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import history from './../../utils/history';
import vietnamFlag from './../../images/vietnamFlag.svg'
import englishFlag from './../../images/englishFlag.svg'
import { useTranslation } from 'react-i18next';
import SearchSelect from './SearchSelect';

const NavMenu = () => {
    const { t, i18n } = useTranslation();
    const classes = useContext(ClassesContext);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const isMenuOpen = Boolean(anchorEl);

    let location = useLocation();

    // const handleProfileMenuOpen = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleMenuClose = () => {
    //     setAnchorEl(null);
    // };

    // const renderProfileMenu = (
    //     <Menu
    //         anchorEl={anchorEl}
    //         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         id={'primary-search-account-menu'}
    //         keepMounted
    //         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    //         open={isMenuOpen}
    //         onClose={handleMenuClose}
    //     >
    //         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    //     </Menu>
    // );
    const handleLanguage = () => {
        console.log("changing language", t("CheckLanguage"))
        i18n.changeLanguage((t("CheckLanguage") === "en") ? "vi" : "en");
        history.push(location.pathname)
        window.scrollTo(0, 0);
        console.log("changed language", t("CheckLanguage"))
    };

    return (
        <React.Fragment>
            {/* ----------------search------------ */}
            {(location.pathname !== '/') && <SearchSelect text={false} />}
            {/* ----------------other icon buttons------------ */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <IconButton title={t("home page")} color="inherit" className={classes.smallCircle} onClick={() => history.push('/')}>
                    <HomeIcon />
                </IconButton>
                <IconButton title={t("change language")} onClick={handleLanguage} color="inherit" className={classes.smallCircle} >
                    <img src={(t("CheckLanguage") === "vi") ? englishFlag : vietnamFlag} style={{ width: "100%" }} />
                </IconButton>
            </div>

        </React.Fragment >
    );
}

export default NavMenu;

{/* profile 
                <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={"primary-search-account-menu"}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton> */}
{/* </div> */ }
{/* {renderProfileMenu} */ }