import React from 'react';
import classes from './styles/Loading.module.scss';

import Modal from '@material-ui/core/Modal';
import Loader from "react-loader-spinner";


const Loading = ({ isLoading }) => {
    return (
        <Modal open={isLoading} disableBackdropClick={true} className={classes.MoadlLoading}>
            <Loader
                type="Circles"
                color="#56459d"
                height={100}
                width={100}
                className={classes.SpinerLoading}
            />
        </Modal>
    );
};

export default Loading;