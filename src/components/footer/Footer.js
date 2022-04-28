import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import classes from './styles/Footer.module.scss';

import footerLogo from '../../assets/images/footer/footerLogo@2x.png';
import humenLife from '../../assets/images/footer/humenLife.png';

import Loading from "../loading/Loading";

import { AllSettings } from "../../api/AllSettings";
import { AllSections } from "../../api/AllSections";
import { NewSletter } from '../../api/NewSletter';
import CallApi from "../../functions/CallApi";

const Footer = ({ humen = false }) => {
    const [settingData, setSettingData] = useState(null);
    const [sectionData, setSectionData] = useState(null);
    const [newSletter, setNewSletter] = useState({
        name: null,
        email: null
    });
    const [isLoading, setIsLoading] = useState(false);

    const getPageData = async () => {
        setIsLoading(true);
        try {
            let responseSetting = await CallApi(AllSettings());
            let responseSection = await CallApi(AllSections());
            let setting_data = {};
            let section_data = {};
            responseSetting.map(item => {
                setting_data[item.name] = item;
            });
            responseSection.map(item => {
                section_data[item.name] = item;
            });
            setSettingData(setting_data);
            setSectionData(section_data);
        } catch (error) {
            console.log(error);
        };
        setIsLoading(false);
    };

    useEffect(() => {
        getPageData();
    }, []);


    const scrollToTopHandeler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const newSletterChangeHandeler = (event, inputName) => {
        let newSletterVar = { ...newSletter };
        newSletterVar[inputName] = event.target.value;
        setNewSletter(newSletterVar);
    };

    const sendNewSletterHandeler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            let response = await CallApi(NewSletter(newSletter.name, newSletter.email));
        } catch (error) {
            console.log(error);
        };
        setIsLoading(false);
    };


    return (
        <>
            {isLoading && <Loading isLoading={true} />}
            <Grid container direction="row-reverse">
                <Hidden mdUp>
                    {humen &&
                        <div className={classes.humenLifeImageBox}>
                            <LazyLoadImage src={humenLife} alt="" className={classes.humenLifeImage} />
                        </div>
                    }
                </Hidden>
                <Hidden smDown>
                    <Grid item xs={1}>
                        <div className={classes.scrollToTop} onClick={scrollToTopHandeler}>
                            <ArrowUpwardOutlinedIcon />
                        </div>
                    </Grid>
                    <Grid item xs={11}>
                        <div className={classes.footer}>
                            <Grid container direction="row-reverse">
                                <Grid item xs={6}>
                                    <div className={classes.footerColumnsGrid}>
                                        <Grid container direction="row-reverse">
                                            <Grid item xs={4}>
                                                <div className={classes.footerCulomns}>
                                                    <ul>
                                                        <li>
                                                            <Link tp="/">
                                                                سرزمین زرنیک
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/#whatIsZarnik">
                                                                درباره زرنیک
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/#zarnikSaffron">
                                                                زعفران زرنیک
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/product">
                                                                محصولات
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/#lifeWithZarnik">
                                                                زندگی با زرنیک
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/#contactUs">
                                                                تماس با ما
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Grid>
                                            <Divider orientation="vertical" flexItem className={classes.columnsDivider} />
                                            <Grid item xs={4}>
                                                <div className={classes.footerCulomns}>
                                                    <ul>
                                                        <li>
                                                            <Link href="/#">
                                                                نقشه سایت
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/#">
                                                                حقوق مشتری
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                همکاری با زرنیک
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                امنیت
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Grid>
                                            <Divider orientation="vertical" flexItem className={classes.columnsDivider} />
                                            <Grid item xs={4}>
                                                {settingData &&
                                                    <div className={`${classes.footerCulomns} ${classes.columnContactUs}`}>
                                                        <span>
                                                            برای اطلاع از آخرین قیمت‌ها و بسته‌های تشویقی
                                                        </span>
                                                        {settingData.phone_number &&
                                                            <div className={classes.callNow}>
                                                                <span>
                                                                    الان تماس بگیرید
                                                                </span>
                                                                <span>
                                                                    {settingData.phone_number.value}
                                                                </span>
                                                            </div>
                                                        }
                                                    </div>
                                                }
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div className={classes.newsletterBox}>
                                        <span>
                                            ثبت نام در خبرنامه ایمیلی
                                        </span>
                                        <form className={classes.newsletterForm} autoComplete="off">
                                            <input type="text" placeholder="نام و نام‌خانوادگی" className={classes.newsletterFormInput} value={newSletter.name} onChange={(event) => newSletterChangeHandeler(event, "name")} />
                                            <input type="text" placeholder="پست الکترونیک" className={classes.newsletterFormInput} value={newSletter.email} onChange={(event) => newSletterChangeHandeler(event, "email")} />
                                            <input type="submit" value="تایید" className={classes.newsletterFormSubbmitButton} onSubmit={sendNewSletterHandeler} />
                                        </form>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div className={classes.aboutUs}>
                                        <LazyLoadImage className={classes.footerLogo} src={footerLogo} alt="zarnik logo image" />
                                        {settingData &&
                                            <div className={classes.zarnikAddress}>
                                                {(settingData.address_1 && settingData.address_2 && settingData.address_3) &&
                                                    <>
                                                        <span className={classes.titleAddress}>
                                                            دفتر مرکزی:
                                                        </span>
                                                        {settingData.address_1 &&
                                                            <span className={classes.descriptionAddress}>
                                                                {settingData.address_1.value}
                                                            </span>
                                                        }
                                                        {settingData.address_2 &&
                                                            <span className={classes.descriptionAddress}>
                                                                {settingData.address_2.value}
                                                            </span>
                                                        }
                                                        {settingData.address_3 &&
                                                            <span className={classes.descriptionAddress}>
                                                                {settingData.address_3.value}
                                                            </span>
                                                        }
                                                    </>
                                                }
                                                {settingData.email &&
                                                    <span className={classes.titleAddress}>
                                                        {settingData.email.value}
                                                    </span>
                                                }
                                                <span className={classes.titleAddress}>
                                                    تلفن/فکس :
                                                </span>
                                                {settingData.phone_number &&
                                                    <span className={classes.descriptionAddress}>
                                                        {settingData.phone_number.value}
                                                    </span>
                                                }
                                            </div>
                                        }
                                        <div className={classes.zarnikCopyRight}>
                                            <span>
                                                ©
                                            </span>
                                            <span>
                                                2019-2020 Zarnik. All Rights Reserved.
                                            </span>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Hidden>
                <Hidden mdUp>
                    <Grid item xs={12} className={classes.footerResponsiveBox}>
                        <Grid container direction="row-reverse">
                            <Grid item xs={1}>
                                <div className={classes.responsiveWhiteBox} />
                            </Grid>
                            <Grid item xs={10}>
                                <div className={`${classes.footerResponsive} ${humen && classes.BorderRadiusLeft}`}>
                                    <Grid container direction="column">
                                        {humen &&
                                            <Grid item>
                                                {sectionData &&
                                                    <div className={classes.footerResponsiveItem}>
                                                        {sectionData.responsive_footer &&
                                                            <>
                                                                <span className={classes.boxTitle}>
                                                                    {sectionData.responsive_footer.title}
                                                                </span>
                                                                <span className={classes.boxSubTitle}>
                                                                    {sectionData.responsive_footer.subtitle}
                                                                </span>
                                                                <span className={classes.boxDescription}>
                                                                    {sectionData.responsive_footer.content}
                                                                </span>
                                                            </>
                                                        }
                                                    </div>
                                                }
                                            </Grid>
                                        }
                                        <Grid item>
                                            {settingData &&
                                                <div className={classes.footerResponsiveItem}>
                                                    {settingData.phone_number &&
                                                        <>
                                                            <span className={classes.contactTitle}>
                                                                الان تماس بگیرید!
                                                            </span>
                                                            {humen && <span className={`${classes.yellowText} ${classes.contactTitle}`}>تماس با تیم فروش</span>}
                                                            <span className={classes.yellowText}>
                                                                {settingData.phone_number.value}
                                                            </span>
                                                        </>
                                                    }
                                                </div>
                                            }
                                        </Grid>
                                        {humen &&
                                            <Grid item>
                                                {settingData &&
                                                    <div className={classes.footerResponsiveItem}>
                                                        {settingData.customer_service_phone_number &&
                                                            <>
                                                                <span className={classes.contactTitle}>
                                                                    تماس با امور مشتریان
                                                                </span>
                                                                <span className={classes.blueText}>
                                                                    {settingData.customer_service_phone_number.value}
                                                                </span>
                                                            </>
                                                        }
                                                    </div>
                                                }
                                            </Grid>
                                        }
                                        <Grid item>
                                            <div className={classes.footerResponsiveNewsletterItem}>
                                                <span>
                                                    اطلاع از آخرین اخبار و قیمت‌ها
                                                </span>
                                                <form className={classes.newsletterFormResponsive} autoComplete="off">
                                                    <input type="text" placeholder="پست الکترونیک" className={classes.newsletterFormInputResponsive} />
                                                </form>
                                            </div>
                                        </Grid>
                                        <Grid item className={classes.zarnikAddressBoxResponsive}>
                                            {settingData &&
                                                <div className={classes.zarnikAddressResponsive}>
                                                    {(settingData.address_1 && settingData.address_2 && settingData.address_3) &&
                                                        <>
                                                            <span className={classes.titleAddressResponsive}>
                                                                دفتر مرکزی:
                                                            </span>
                                                            {settingData.address_1 &&
                                                                <span className={classes.descriptionAddressResponsive}>
                                                                    {settingData.address_1.value}
                                                                </span>
                                                            }
                                                            {settingData.address_2 &&
                                                                <span className={classes.descriptionAddressResponsive}>
                                                                    {settingData.address_2.value}
                                                                </span>
                                                            }
                                                            {settingData.address_3 &&
                                                                <span className={classes.descriptionAddressResponsive}>
                                                                    {settingData.address_3.value}
                                                                </span>
                                                            }
                                                        </>
                                                    }
                                                    {settingData.email &&
                                                        <span className={classes.titleAddressResponsive}>
                                                            {settingData.email.value}
                                                        </span>
                                                    }
                                                    <span className={classes.titleAddressResponsive}>
                                                        تلفن/فکس :
                                                    </span>
                                                    {settingData.phone_number &&
                                                        <span className={classes.descriptionAddressResponsive}>
                                                            {settingData.phone_number.value}
                                                        </span>
                                                    }
                                                </div>
                                            }
                                        </Grid>
                                        <Grid item>
                                            <div className={classes.copyRightResponsive}>
                                                <LazyLoadImage className={classes.footerLogoResponsive} src={footerLogo} alt="zarnik logo image" />
                                                <div className={classes.zarnikCopyRightEngResponsive}>
                                                    <span>
                                                        ©
                                                    </span>
                                                    <span>
                                                        2019-2020 Zarnik. All Rights Reserved.
                                                    </span>
                                                </div>
                                                <span>
                                                    تمامی حقوق و متعلقات
                                                </span>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={1}>
                                <div className={classes.responsiveWhiteBox} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
        </>
    );
};

export default Footer