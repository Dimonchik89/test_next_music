import { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import useValue from '../../hooks/useValue';
import ErrorModal from './ErrorModal';
import ModalYoutubeLink from './ModalYoutubeLink';
import { useRouter } from 'next/router';

import helper from "../../styles/helper.module.scss"
import modal from "../../styles/modal.module.scss"

const ModalFixIt = ({showModal, handleCloseModal}) => {
    const { value, clearValue } = useValue()
    const [showError, setShowError] = useState(false)
    const router = useRouter()

    const closeErrorModal = () => {
        setShowError(false)
    }

    return (
        <>
            <Modal
                open={showModal}
                onClose={() => {
                    // handleCloseModal()
                    router.push({
                        pathname: '',
                        query: ""
                    }, undefined, {scroll: false, shallow: false})
                    clearValue()
                }}
            >
                <Box className={`${modal.container} ${modal.container__fix}`}>
                    <Box className={modal.fix__wrapper}>
                        <Typography
                            variant='h3'
                            component="h4"
                            className={helper.color__white}
                            textAlign="center"
                        >
                            If you used music from tunebox.com, then just put the link to the video bellow andassociatedcopyright claims be relesed
                        </Typography>
                        <ModalYoutubeLink onClose={handleCloseModal}/>
                    </Box>
                </Box>
            </Modal>
            <ErrorModal 
                open={showError} 
                handleClose={closeErrorModal} 
                text="Error, try later"
            />
        </>
    )
}
export default ModalFixIt