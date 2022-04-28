import React, { useState } from 'react';
import classes from './styles/Navbar.module.scss';

import { Link } from 'react-router-dom';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu'

import SearchIcon from '@material-ui/icons/Search';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Navbar = () => {
    const [responsiveMenu, setResponsiveMenu] = useState(false);

    const ResponsiveMenuHandeler = (event) => {
        setResponsiveMenu(true);
    };

    const ResponsiveMenuCloseHandeler = () => {
        setResponsiveMenu(false);
    };

    return (
        <>
            <div className={classes.spaceHeader} />
            <Hidden smDown>
                <AppBar position="sticky" className={classes.navbarHeader}>
                    <Toolbar className={classes.toolBarNavbar}>
                        <div className={classes.menuItemsBoxLeft}>
                            <Link className={classes.menuItem} to="/">
                                سرزمین زرنیک
                            </Link>
                            <Link className={classes.menuItem} to="/#whatIsZarnik">
                                درباره زرنیک
                            </Link>
                            <Link className={classes.menuItem} to="/#zarnikSaffron">
                                زعفران زرنیک
                            </Link>
                            <Link className={classes.menuItem} to="/product">
                                محصولات
                            </Link>
                            <Link className={classes.menuItem} to="/#contactUs">
                                تماس با ما
                            </Link>
                            <span className={classes.menuItem}>
                                جستجو
                                <SearchIcon fontSize="small" />
                            </span>
                        </div>
                        <div className={classes.menuItemsBoxRight}>
                            <div className={classes.menuLanguage}>
                                <span className={classes.menuLanguageItem}>
                                    فارسی
                                </span>
                                <span className={classes.menuLanguageItem}>
                                    عربی
                                </span>
                                <span className={classes.menuLanguageItem}>
                                    انگلیسی
                                </span>
                            </div>
                            <div className={classes.menuProducts}>
                                <span className={classes.menuProductsItem}>
                                    سبد خرید
                                    <ShoppingBasketIcon fontSize="small" className={classes.menuPriductsIcon} />
                                </span>
                                <span className={classes.menuProductsItem}>
                                    نشان کردن
                                    <BookmarkIcon fontSize="small" className={classes.menuPriductsIcon} />
                                </span>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </Hidden>
            <Hidden mdUp>
                <AppBar position="absolute" className={classes.navbarHeaderResponsive}>
                    <Toolbar>
                        <IconButton onClick={ResponsiveMenuHandeler}>
                            <MenuIcon />
                        </IconButton>
                        <div className={`${classes.responsiveMenuBox} ${responsiveMenu && classes.active}`}>
                            <div className={classes.responsiveMenu} style={{ width: responsiveMenu ? "12rem" : "0px" }}>
                                <IconButton style={{ paddingRight: "2rem" }} onClick={ResponsiveMenuCloseHandeler}>
                                    <MenuIcon />
                                </IconButton>
                                <Link className={classes.responsiveMenuItem} to="/">
                                    - سرزمین زرنــــیک
                                </Link>
                                <Link className={classes.responsiveMenuItem} to="/#whatIsZarnik">
                                    - درباره زرنــــیک
                                </Link>
                                <Link className={classes.responsiveMenuItem} to="/#zarnikSaffron">
                                    - زعفــــران زرنــــیک
                                </Link>
                                <Link className={classes.responsiveMenuItem} to="/product">
                                    - محصــولات
                                </Link>
                                <Link className={classes.responsiveMenuItem} to="/#contactUs">
                                    - تــماس با ما
                                </Link>
                            </div>
                            <div className={classes.closesidebarBox} onClick={ResponsiveMenuCloseHandeler} />
                        </div>
                        <div className={classes.menuLanguageResponsive}>
                            <span className={classes.menuLanguageItemResponsive}>
                                PER
                            </span>
                            <span className={classes.menuLanguageItemResponsive}>
                                AR
                            </span>
                            <span className={classes.menuLanguageItemResponsive}>
                                EN
                            </span>
                        </div>
                    </Toolbar>
                </AppBar>
            </Hidden>
        </>
    );
};

export default Navbar;