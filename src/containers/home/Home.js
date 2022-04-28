import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import classes from './styles/Home.module.scss';
import Navbar from '../../components/navbar/Navbar';
import Slideshow from '../../components/slideshow/slideshow';
import Loading from "../../components/loading/Loading";
import Footer from '../../components/footer/Footer';

import farm from '../../assets/images/home/section1/farm@2x.png';

import WhatIsZarnikBG from '../../assets/images/home/section2/WhatIsZarnikBG@2x.png';
import WhatIsZarnikWoman from '../../assets/images/home/section2/WhatIsZarnikWoman@2x.png';
import ZarnikWomanContentLogo from '../../assets/images/home/section2/ZarnikWomanContentLogo@2x.png';

import productBox from '../../assets/images/home/section3/productBox@2x.png';
import ProductsResponsive from '../../assets/images/home/section3/ProductsResponsive@2x.png';

import iceCream from '../../assets/images/home/section4/iceCream@2x.png';
import lifeWithZarnik from '../../assets/images/home/section4/lifeWithZarnik@2x.png';
import IceCreameResponsive from '../../assets/images/home/section4/IceCreameResponsive@2x.png';

import zarnikMapAddress from '../../assets/images/home/section5/zarnikMapAddress@2x.png';

import { AllSections } from "../../api/AllSections";
import CallApi from "../../functions/CallApi";

const Home = ({ location }) => {
    const history = useHistory();

    const [sectionData, setSectionData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getPageData = async () => {
        setIsLoading(true);
        try {
            let responseSection = await CallApi(AllSections());
            let section_data = {};
            responseSection.map(item => {
                section_data[item.name] = item;
            });
            setSectionData(section_data);
        } catch (error) {
            console.log(error);
        };
        setIsLoading(false);
    };

    useEffect(() => {
        getPageData();
    }, []);

    useEffect(() => {
        const elementTag = document.getElementById(location.hash.split("#")[1]);
        if (elementTag) {
            elementTag.scrollIntoView({ behavior: "smooth" });
        }
    }, [location.hash]);

    return (
        <>
            {isLoading && <Loading isLoading={true}/>}
            <Navbar />
            <div className={classes.main}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <div className={classes.slideshowCont}>
                            <div className={classes.slideShowBackGround} />
                            <Slideshow />
                            <button className={classes.informationBTNContentBox}>
                                بیشتر بدانیم
                            </button>
                        </div>
                    </Grid>
                    {sectionData &&
                        <>
                            {sectionData.home_section_1 &&
                                <Grid item xs={12}>
                                    <div className={classes.section} id="lifeWithZarnik">
                                        <Container maxWidth="md">
                                            <Grid container direction="row" spacing={4} className={classes.sectionContainer}>
                                                <div className={classes.circleBackground} />
                                                <Hidden smDown>
                                                    <Grid item xs={12} sm={7} className={classes.imageSection}>
                                                        <LazyLoadImage src={farm} alt="zarnik farm image" />
                                                    </Grid>
                                                </Hidden>
                                                <Grid item xs={12} sm={5} className={classes.sectionContentBox}>
                                                    <div className={classes.sectionOneTitrContentBox}>
                                                        <span className={classes.titleContentBox}>
                                                            {sectionData.home_section_1.title}
                                                        </span>
                                                        <span className={classes.subtitleContentBox}>
                                                            {sectionData.home_section_1.subtitle}
                                                        </span>
                                                    </div>
                                                    <span className={classes.descriptionContentBox}>
                                                        {sectionData.home_section_1.content}
                                                    </span>
                                                    <button className={classes.moreBTNContentBox}>
                                                        بیشتر بدانیم
                                                    </button>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </div>
                                </Grid>
                            }
                            {sectionData.home_section_2 &&
                                <>
                                    <Hidden smDown>
                                        <Grid item xs={12}>
                                            <div className={classes.section} id="whatIsZarnik">
                                                {/* <div className={classes.womanDashLine}>
                                                <LazyLoadImage src={dashLine} alt="zarnik farm image" />
                                            </div> */}
                                                <Container maxWidth="md" className={classes.whatIsZarnikContainer}>
                                                    <div className={`${classes.whatIsZarnikBGImage} ${classes.whatIsZarnikImage}`}>
                                                        <LazyLoadImage src={WhatIsZarnikBG} alt="what is zarnik background image" />
                                                    </div>
                                                    <div className={`${classes.whatIsZarnikWomanImage} ${classes.whatIsZarnikImage}`}>
                                                        <LazyLoadImage src={WhatIsZarnikWoman} alt="what is zarnik woman image" />
                                                    </div>
                                                    <div className={classes.whatIsZarnikContent}>
                                                        <span className={classes.whatIsZarnikTitleContentBox}>
                                                            {sectionData.home_section_2.title}
                                                        </span>
                                                        <span className={classes.whatIsZarnikSubTitleContentBox}>
                                                            {sectionData.home_section_2.subtitle}
                                                        </span>
                                                        <span className={classes.whatIsZarnikDescriptionContentBox}>
                                                            {sectionData.home_section_2.content}
                                                        </span>
                                                        <LazyLoadImage src={ZarnikWomanContentLogo} alt="what is zarnik logo image" className={classes.whatIsZarnikWomanContentLogo} />
                                                    </div>
                                                </Container>
                                            </div>
                                        </Grid>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <Grid item xs={12}>
                                            <div className={classes.section} id="whatIsZarnik">
                                                <Container maxWidth="md">
                                                    <Grid container direction="row" spacing={4} className={classes.sectionContainer}>
                                                        <div className={classes.circleBackground} />
                                                        <Grid item xs={12} sm={7} className={classes.imageSection}>
                                                            <LazyLoadImage src={farm} alt="zarnik farm image" />
                                                        </Grid>
                                                        <Grid item xs={12} sm={5} className={classes.sectionContentBox}>
                                                            <div className={classes.sectionOneTitrContentBox}>
                                                                <span className={classes.ResponsiveTitleContentBox}>
                                                                    {sectionData.home_section_2.title}
                                                                </span>
                                                                <span className={classes.ResponsiveSubtitleContentBox}>
                                                                    {sectionData.home_section_2.subtitle}
                                                                </span>
                                                            </div>
                                                            <span className={classes.descriptionContentBox}>
                                                                {sectionData.home_section_2.content}
                                                            </span>
                                                            <button className={classes.moreBTNContentBox}>
                                                                بیشتر بدانیم
                                                            </button>
                                                        </Grid>
                                                    </Grid>
                                                </Container>
                                            </div>
                                        </Grid>
                                    </Hidden>
                                </>
                            }
                            {sectionData.home_section_3 &&
                                <Hidden smDown>
                                    <Grid item xs={12}>
                                        <div className={classes.section}>
                                            <Container maxWidth="md">
                                                <Grid container direction="row-reverse" spacing={4} className={classes.sectionContainer}>
                                                    <div className={classes.circleBackground} />
                                                    <Grid item xs={12} md={7} className={classes.imageSection}>
                                                        <LazyLoadImage src={productBox} alt="zarnik product box image" />
                                                    </Grid>
                                                    <Grid item xs={12} md={5} className={classes.sectionContentBox}>
                                                        <div className={classes.TitrContentBox}>
                                                            <span className={classes.bigTitleContentBox}>
                                                                {sectionData.home_section_3.title.slice(0,sectionData.home_section_3.title.lastIndexOf(" "))}
                                                            </span>
                                                            <span className={classes.bigSubtitleContentBox}>
                                                                {sectionData.home_section_3.title.split(" ").pop()}
                                                            </span>
                                                        </div>
                                                        <span className={classes.descriptionContentBox}>
                                                            {sectionData.home_section_3.content}
                                                        </span>
                                                        <button className={classes.moreBTNContentBox} onClick={() => history.replace('/product')}>
                                                            لیست محصولات
                                                        </button>
                                                    </Grid>
                                                </Grid>
                                            </Container>
                                        </div>
                                    </Grid>
                                </Hidden>
                            }
                            {sectionData.home_section_4 &&
                                <Grid item xs={12}>
                                    <div className={classes.section} id="zarnikSaffron">
                                        <Container maxWidth="md">
                                            <Grid container direction="row" spacing={4} className={classes.sectionContainer}>
                                                <div className={classes.circleBackground} />
                                                <Grid item xs={12} sm={7} className={classes.imageSection}>
                                                    <Hidden smDown>
                                                        <LazyLoadImage src={iceCream} alt="zarnik icecream image" />
                                                    </Hidden>
                                                    <Hidden mdUp>
                                                        <LazyLoadImage src={IceCreameResponsive} alt="zarnik icecream image" style={{ marginBottom: "1rem" }} />
                                                    </Hidden>
                                                </Grid>
                                                <Grid item xs={12} sm={5} className={classes.sectionContentBox}>
                                                    <Hidden smDown>
                                                        <LazyLoadImage src={lifeWithZarnik} alt="life with zarnik image" className={classes.lifeWithZarnikimage} />
                                                    </Hidden>
                                                    <div className={classes.TitrContentBox}>
                                                        <span className={classes.bigTitleContentBox}>
                                                            {sectionData.home_section_4.title.slice(0,sectionData.home_section_4.title.lastIndexOf(" "))}
                                                        </span>
                                                        <span className={classes.bigSubtitleContentBox}>
                                                            {sectionData.home_section_4.title.split(" ").pop()}
                                                        </span>
                                                    </div>
                                                    <span className={classes.bigDescriptionContentBox}>
                                                        {sectionData.home_section_4.subtitle}
                                                    </span>
                                                    <span className={classes.descriptionContentBox}>
                                                        {sectionData.home_section_4.content}
                                                    </span>
                                                    <button className={classes.moreBTNContentBox}>
                                                        موضوعات بیشتر
                                                    </button>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </div>
                                </Grid>
                            }
                            {sectionData.home_section_3 &&
                                <Hidden mdUp>
                                    <Grid item xs={12}>
                                        <div className={classes.section}>
                                            <Container maxWidth="md">
                                                <Grid container direction="row-reverse" spacing={4} className={classes.sectionContainer}>
                                                    <div className={classes.circleBackground} />
                                                    <Grid item xs={12} className={classes.sectionContentBox}>
                                                        <div className={classes.TitrContentBox}>
                                                            <span className={classes.bigTitleContentBox}>
                                                                {sectionData.home_section_3.title.slice(0,sectionData.home_section_3.title.lastIndexOf(" "))}
                                                            </span>
                                                            <span className={classes.bigSubtitleContentBox}>
                                                                {sectionData.home_section_3.title.split(" ").pop()}
                                                            </span>
                                                        </div>
                                                        <span className={classes.descriptionContentBox}>
                                                            {sectionData.home_section_3.content}
                                                        </span>
                                                        <div className={classes.imageSectionResponsive}>
                                                            <LazyLoadImage src={ProductsResponsive} alt="zarnik product image" />
                                                        </div>
                                                        <button className={classes.moreBTNContentBox} onClick={() => history.push}>
                                                            لیست محصولات
                                                        </button>
                                                    </Grid>
                                                </Grid>
                                            </Container>
                                        </div>
                                    </Grid>
                                </Hidden>
                            }
                            {sectionData.home_section_5 &&
                                <Grid item xs={12}>
                                    <div className={classes.section} id="contactUs">
                                        <Container maxWidth="md">
                                            <Grid container direction="row-reverse" spacing={4} className={classes.sectionContainer}>
                                                <div className={classes.circleBackground} />
                                                <Grid item xs={12} sm={7} className={classes.imageSection}>
                                                    <LazyLoadImage src={zarnikMapAddress} alt="zarnik map address image" />
                                                </Grid>
                                                <Grid item xs={12} sm={5} className={classes.sectionContentBox}>
                                                    <div className={classes.TitrContentBox}>
                                                        <span className={classes.bigTitleContentBox}>
                                                            {sectionData.home_section_5.title.slice(0,sectionData.home_section_5.title.lastIndexOf(" "))}
                                                        </span>
                                                        <span className={classes.bigSubtitleContentBox}>
                                                            {sectionData.home_section_5.title.split(" ").pop()}
                                                        </span>
                                                    </div>
                                                    <span className={classes.descriptionContentBox}>
                                                        {sectionData.home_section_5.content}
                                                    </span>
                                                    <button className={classes.moreBTNContentBox}>
                                                        تماس با زرنیک
                                                    </button>
                                                </Grid>
                                            </Grid>
                                        </Container>
                                    </div>
                                </Grid>
                            }
                        </>
                    }
                </Grid>
            </div>
            <Footer />
        </>
    );
};
export default Home