import React, { useContext, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import ClassesContext from '../../context/classesContext';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import TranslateIcon from '@material-ui/icons/Translate';
import history from './../../utils/history';
import SearchSelect from './SearchSelect';

const NavMenu = ({ }) => {

    const classes = useContext(ClassesContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    let location = useLocation();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const renderProfileMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={'primary-search-account-menu'}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <React.Fragment>
            {/* ----------------search------------ */}
            {(location.pathname !== '/') && <SearchSelect text={false} />}
            {/* ----------------other icon buttons------------ */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <IconButton title="go home" color="inherit" className={classes.smallCircle} onClick={() => history.push('/')}>
                    <HomeIcon />
                </IconButton>
                <IconButton title="change language" color="inherit" className={classes.smallCircle} onClick={() => history.push('/languages')}>
                    <TranslateIcon />
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