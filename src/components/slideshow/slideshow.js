import React, { useEffect, useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from 'react-material-ui-carousel';

import classes from './styles/slideshow.module.scss';

import zarnik from '../../assets/images/slideshow/zarnik.png';
import sliderTitle from '../../assets/images/slideshow/sliderTitle.png';
import { Hidden } from '@material-ui/core';

import Loading from "../loading/Loading";

import { AllSliders } from "../../api/AllSliders";
import CallApi from "../../functions/CallApi";

const Slideshow = () => {
    const [sliderData, setSliderData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPageData = async () => {
        setIsLoading(true);
        try {
            let responseSlider = await CallApi(AllSliders());
            setSliderData(responseSlider);
        } catch (error) {
            console.log(error);
        };
        setIsLoading(false);
    };

    useEffect(() => {
        getPageData();
    }, []);

    return (
        <>
            {isLoading && <Loading isLoading={true} />}
            {sliderData &&
                <Carousel style={{ overflow: 'unset' }} timeout={700} interval={7000} animation='fade' indicatorIconButtonProps={{ style: { color: '#56459d' } }} activeIndicatorIconButtonProps={{ style: { color: '#95d0d3' } }}>
                    {sliderData.map(item => (
                        <div className={classes.CarouselItem}>
                            <Hidden smUp>
                                <span className={classes.descriptionContent}>
                                    {item.content}
                                </span>
                            </Hidden>
                            <LazyLoadImage className={classes.carouselImage} alt='logo' src={item.image} />
                            <div className={classes.contentBox}>
                                <Hidden smUp>
                                    <LazyLoadImage className={classes.sliderImage} alt='logo' src={sliderTitle} />
                                </Hidden>
                                <span className={classes.CarouselTitleContentBox}>
                                    {item.title}
                                </span>
                                <span className={classes.CarouselSubTitleContentBox}>
                                    {item.subtitle}
                                </span>
                            </div>
                        </div>
                    ))
                    }
                </Carousel>
            }

        </>
    );
};

export default Slideshow
