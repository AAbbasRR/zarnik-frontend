import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import classes from './styles/Page404.module.scss';

import image404 from '../../assets/images/404/4040logo.png';

const Page404 = () => {
    return (
        <Container maxWidth="md" className={classes.main}>
            <div className={classes.box404}>
                <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                    <Grid item xs={2}>
                        <span className={classes.number404}>
                            4
                        </span>
                    </Grid>
                    <Grid item xs={4}>
                        <LazyLoadImage src={image404} alt="zarnik logo for 404" className={classes.image404Logo} />
                    </Grid>
                    <Grid item xs={2}>
                        <span className={classes.number404}>
                            4
                        </span>
                    </Grid>
                </Grid>
                <span className={classes.descriptionNotFound}>
                    متاسفانه صفحه پیدا نشد.
                </span>
                <button className={classes.BackBTN}>
                    بازگشت به خانه
                </button>
            </div>
        </Container>
    )
};

export default Page404;