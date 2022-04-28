import React, {useState, useEffect} from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import classes from './styles/Products.module.scss';
import Navbar from '../../components/navbar/Navbar';
import Loading from "../../components/loading/Loading";
import Footer from '../../components/footer/Footer';

import ZarnikBox from '../../assets/images/product/section/ZarnikBox.png';
import ZarnikBoxResponsive from '../../assets/images/product/section/ZarnikBoxResponsive.png';

import twogr from '../../assets/images/product/product1/2grProduct.png';

import threegr from '../../assets/images/product/product2/3grProduct.png';

import mesghal from '../../assets/images/product/product3/1mesghal.png';

import bigBox from '../../assets/images/product/product4/250gr.png';

import waterbackgroundperson from '../../assets/images/product/contact/waterbackgroundperson@2x.png';
import person from '../../assets/images/product/contact/person@2x.png';
import lifezarnik from '../../assets/images/product/contact/lifezarnik@2x.png';

import { AllProducts } from "../../api/AllProducts";
import { AllSections } from "../../api/AllSections";
import { AllSettings } from "../../api/AllSettings";
import CallApi from "../../functions/CallApi";

const Products = () => {
    const [productData, setProductData] = useState(null);
    const [sectionData, setSectionData] = useState(null);
    const [settingData, setSettingData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPageData = async () =>{
        setIsLoading(true);
        try{
            let responseProduct = await CallApi(AllProducts());
            let responseSection = await CallApi(AllSections());
            let responseSetting = await CallApi(AllSettings());
            let product_data = {};
            let section_data = {};
            let setting_data = {};
            responseProduct.map(item=>{
                product_data[item.name] = item;
            });
            responseSection.map(item=>{
                section_data[item.name] = item;
            });
            responseSetting.map(item=>{
                setting_data[item.name] = item;
            });
            setProductData(product_data);
            setSectionData(section_data);
            setSettingData(setting_data);
        }catch(error){
            console.log(error);
        };
        setIsLoading(false);
    };

    useEffect(()=>{
        getPageData();
    },[]);

    return (
        <>  
            {isLoading && <Loading isLoading={true}/>}
            <Navbar />
            <div className={classes.mainDiv}>
                <Container maxWidth="md" className={classes.main}>
                    <Grid container direction="column">
                        {sectionData &&
                            <Grid item xs={12}>
                                {sectionData.product_section &&
                                    <div className={classes.section}>
                                        <Grid container direction="row" justify="center" className={classes.sectionBox}>
                                            <div className={classes.circleBackground} />
                                            <Hidden mdUp>
                                                <Grid item xs={12} md={7}>
                                                    <div className={classes.sectionBoxImageLeft}>
                                                        <LazyLoadImage src={ZarnikBoxResponsive} alt="" className={classes.sectionBoxImage} />
                                                    </div>
                                                </Grid>
                                            </Hidden>
                                            <Grid item xs={12} md={5} className={classes.sectionBoxContent}>
                                                <span className={classes.titleContentBox}>
                                                    {sectionData.product_section.title}
                                                </span>
                                                <span className={classes.subtitleContentBox}>
                                                    {sectionData.product_section.subtitle}
                                                </span>
                                                <span className={classes.descriptionContentBox}>
                                                    {sectionData.product_section.content}
                                                </span>
                                            </Grid>
                                            <Hidden smDown>
                                                <Grid item xs={12} md={7}>
                                                    <div className={classes.sectionBoxImageLeft}>
                                                        <LazyLoadImage src={ZarnikBox} alt="" className={classes.sectionBoxImage} />
                                                    </div>
                                                </Grid>
                                            </Hidden>
                                        </Grid>
                                    </div>
                                }
                            </Grid>
                        }
                        {productData ? 
                            <>
                                {productData.product_1 &&
                                    <Grid item xs={12}>
                                        <div className={classes.section}>
                                            <Grid container direction="row" justify="center" className={classes.sectionBox}>
                                                <div className={classes.circleBackground} />
                                                <Grid item xs={12} md={6}>
                                                    <div className={classes.sectionBoxImageRight}>
                                                        <LazyLoadImage src={twogr} alt="" className={classes.sectionBoxProductImage} />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={6} className={classes.sectionBoxContent}>
                                                    <span className={classes.titleContentBox}>
                                                        {productData.product_1.title}
                                                    </span>
                                                    <span className={classes.subtitleContentBox}>
                                                        {productData.product_1.subtitle}
                                                    </span>
                                                    <span className={classes.descriptionContentBox}>
                                                        {productData.product_1.content}
                                                    </span>
                                                    <Grid container direction="row" wrap="wrap" className={classes.productContentBox}>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                اندازه بسته بندی
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_1.ProductSize}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                وزن محتوا
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_1.ProductWeight}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                کیفیت زعفران
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_1.ProductQuality}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                بسته بندی مادر
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_1.MotherPacking}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                نحوه فروش
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_1.ProductWhoSell}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={6}></Grid>
                                                        <Grid item xs={6}>
                                                            <button className={classes.priceBTN}>
                                                                استعلام قیمت
                                                            </button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                }
                                {productData.product_2 &&
                                    <Grid item xs={12}>
                                        <div className={classes.section}>
                                            <Grid container direction="row" justify="center" className={classes.sectionBox}>
                                                <div className={classes.circleBackground} />
                                                <Grid item xs={12} md={6}>
                                                    <div className={classes.sectionBoxImageRight}>
                                                        <LazyLoadImage src={threegr} alt="" className={classes.sectionBoxProductImage} />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={6} className={classes.sectionBoxContent}>
                                                    <span className={classes.titleContentBox}>
                                                        {productData.product_2.title}
                                                    </span>
                                                    <span className={classes.subtitleContentBox}>
                                                        {productData.product_2.subtitle}
                                                    </span>
                                                    <span className={classes.descriptionContentBox}>
                                                        {productData.product_2.content}
                                                    </span>
                                                    <Grid container direction="row" wrap="wrap" className={classes.productContentBox}>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                اندازه بسته بندی
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_2.ProductSize}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                وزن محتوا
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_2.ProductWeight}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                کیفیت زعفران
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_2.ProductQuality}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                بسته بندی مادر
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_2.MotherPacking}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                نحوه فروش
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_2.ProductWhoSell}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={6}></Grid>
                                                        <Grid item xs={6}>
                                                            <button className={classes.priceBTN}>
                                                                استعلام قیمت
                                                            </button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                }
                                {productData.product_3 &&
                                    <Grid item xs={12}>
                                        <div className={classes.section}>
                                            <Grid container direction="row" justify="center" className={classes.sectionBox}>
                                                <div className={classes.circleBackground} />
                                                <Grid item xs={12} md={6}>
                                                    <div className={classes.sectionBoxImageRight}>
                                                        <LazyLoadImage src={mesghal} alt="" className={classes.sectionBoxProductImage} />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} md={6} className={classes.sectionBoxContent}>
                                                    <span className={classes.titleContentBox}>
                                                        {productData.product_3.title}
                                                    </span>
                                                    <span className={classes.subtitleContentBox}>
                                                        {productData.product_3.subtitle}
                                                    </span>
                                                    <span className={classes.descriptionContentBox}>
                                                        {productData.product_3.content}
                                                    </span>
                                                    <Grid container direction="row" wrap="wrap" className={classes.productContentBox}>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                اندازه بسته بندی
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_3.ProductSize}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                وزن محتوا
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_3.ProductWeight}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                کیفیت زعفران
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_3.ProductQuality}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                بسته بندی مادر
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_3.MotherPacking}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                نحوه فروش
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_3.ProductWhoSell}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={6}></Grid>
                                                        <Grid item xs={6}>
                                                            <button className={classes.priceBTN}>
                                                                استعلام قیمت
                                                            </button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                }
                                {productData.product_4 &&
                                    <Grid item xs={12}>
                                        <div className={classes.section}>
                                            <Grid container direction="row" justify="center" className={classes.sectionBox}>
                                                <div className={classes.circleBackground} />
                                                <Hidden mdUp>
                                                    <Grid item xs={12} md={6}>
                                                        <div className={classes.sectionBoxImageRight}>
                                                            <LazyLoadImage src={bigBox} alt="" className={classes.sectionBoxProductImage} />
                                                        </div>
                                                    </Grid>
                                                </Hidden>
                                                <Grid item xs={12} md={6} className={classes.sectionBoxContent}>
                                                    <span className={classes.titleContentBox}>
                                                        {productData.product_4.title}
                                                    </span>
                                                    <span className={classes.subtitleContentBox}>
                                                        {productData.product_4.subtitle}
                                                    </span>
                                                    <span className={classes.descriptionContentBox}>
                                                        {productData.product_4.content}
                                                    </span>
                                                    <Grid container direction="row" wrap="wrap" className={classes.productContentBox}>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                اندازه بسته بندی
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_4.ProductSize}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                وزن محتوا
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_4.ProductWeight}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                کیفیت زعفران
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_4.ProductQuality}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                بسته بندی مادر
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_4.MotherPacking}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <span className={classes.productContentBoxItemTitle}>
                                                                نحوه فروش
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <span className={classes.productContentBoxItemSubTitle}>
                                                                {productData.product_4.ProductWhoSell}
                                                            </span>
                                                        </Grid>
                                                        <Grid item xs={6}></Grid>
                                                        <Grid item xs={6}>
                                                            <button className={classes.priceBTN}>
                                                                استعلام قیمت
                                                            </button>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Hidden smDown>
                                                    <Grid item xs={12} md={6}>
                                                        <div className={classes.sectionBoxProductImageLeft}>
                                                            <LazyLoadImage src={bigBox} alt="" className={classes.sectionBoxProductImage} />
                                                        </div>
                                                    </Grid>
                                                </Hidden>
                                            </Grid>
                                        </div>
                                    </Grid>
                                }
                            </>
                        : null}
                        {(settingData && sectionData) ? 
                            <>
                                <Hidden mdUp>
                                    <Footer humen />
                                </Hidden>
                                <Hidden smDown>
                                    {sectionData.product_footer &&
                                        <Grid item xs={12}>
                                            <div className={classes.section}>
                                                <div className={classes.contactUsBox}>
                                                    <span className={classes.contactUsTitle}>
                                                        الان تماس بگیرید!
                                                    </span>
                                                    <div className={classes.contactUsBoxDetail}>
                                                        <span className={classes.contactUsBoxDetailTitle}>
                                                            {sectionData.product_footer.title}
                                                        </span>
                                                        <span className={classes.contactUsBoxDetailSubtitle}>
                                                            {sectionData.product_footer.subtitle}
                                                        </span>
                                                        <span className={classes.contactUsBoxDetailDescription}>
                                                            {sectionData.product_footer.content}
                                                        </span>
                                                        {settingData ?
                                                            <Grid container spacing={2} direction="row" className={classes.ContactUsPhoneNumber}>
                                                                <Grid item xs={6}>
                                                                    <span>
                                                                        تماس با تیم فروش
                                                                    </span>
                                                                </Grid>
                                                                <Grid item xs={6}>
                                                                    <span>
                                                                        {settingData.phone_number.value}
                                                                    </span>
                                                                </Grid>
                                                            </Grid>
                                                        : null}
                                                    </div>
                                                    <span className={classes.contactUsFooter}>
                                                        جدید تمامی حقوق محفوظ و متعلق به برند زرنیک میباشد . علامت انحصاری
                                                    </span>
                                                    <LazyLoadImage src={waterbackgroundperson} className={classes.contactUsHumanWater} />
                                                    <LazyLoadImage src={lifezarnik} className={classes.contactUsHumanLife} />
                                                    <LazyLoadImage src={person} className={classes.contactUsHumanPerson} />
                                                </div>
                                            </div>
                                        </Grid>
                                    }
                                </Hidden>
                            </>
                        : null}
                    </Grid>
                </Container>
            </div>
        </>
    );
};

export default Products;