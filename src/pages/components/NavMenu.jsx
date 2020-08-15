import React, { useContext } from 'react'
import { useLocation } from "react-router-dom";
import ClassesContext from '../../context/classesContext';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import history from './../../utils/history';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { useTranslation } from 'react-i18next';
import SearchSelect from './SearchSelect';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';
const NavMenu = () => {
    const { t, i18n } = useTranslation();
    const classes = useContext(ClassesContext);
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const isMenuOpen = Boolean(anchorEl);
    //====================menu==========================
    let location = useLocation();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleLanguage = language => {
        handleClose()
        console.log("changing language", t("CheckLanguage"))
        i18n.changeLanguage(language);
        history.push(location.pathname)
        window.scrollTo(0, 0);
        console.log("changed language", t("CheckLanguage"))

    };

    return (
        <React.Fragment>
            {/* ----------------search------------ */}
            {(location.pathname !== '/livingroom') && <SearchSelect text={false} />}
            {/* ----------------other icon buttons------------ */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <IconButton title={t("home page")} color="inherit" className={classes.smallCircle} onClick={() => history.push('/')}>
                    <HomeIcon />
                </IconButton>
                <IconButton title={t("change language")} onClick={handleClick} color="inherit" className={classes.smallCircle} >
                    <TranslateIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => handleLanguage('en')}>English</MenuItem>
                    <MenuItem onClick={() => handleLanguage('ru')}>Pусский</MenuItem>
                    <MenuItem onClick={() => handleLanguage('vi')}>Tiếng Việt</MenuItem>
                    <MenuItem onClick={handleClose}><a href="https://forms.gle/P6JVpjnNKx6SNLLS6" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>{t("Add language")}<OpenInNewIcon style={{ fontSize: 'inherit' }} /></a></MenuItem>
                </Menu>
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