import { useState } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useValue from '../../hooks/useValue';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { sendFix } from '../../api/sendEmail';
import ErrorModal from './ErrorModal';
import ModalYoutubeLink from './ModalYoutubeLink';

import helper from "../../styles/helper.module.scss"
import modal from "../../styles/modal.module.scss"
import button from "../../styles/button.module.scss"

const ModalFixIt = ({showModal, handleCloseModal}) => {
    const { value, handleChangeValue, clearValue } = useValue()
    const [showError, setShowError] = useState(false)

    const openErrorModal = () => {
        setShowError(true)
    }

    const closeErrorModal = () => {
        setShowError(false)
    }

    const sendOnButtonClick = (e) => {
        if(e.keyKode === 13) {
            handleSubmit(e)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await sendFix(value)
        if(response.status === 200) {
            handleCloseModal()
            clearValue()
        } else {
            openErrorModal()
            clearValue()
        }
    }

    return (
        <>
            <Modal
                open={showModal}
                onClose={() => {
                    handleCloseModal()
                    clearValue()
                }}
            >
                <Box className={modal.container}>
                    <Box className={modal.fix__wrapper}>
                        <Typography
                            variant='h3'
                            component="h4"
                            className={helper.color__white}
                            textAlign="center"
                        >
                            If you used music from tunebox.com, then just put the link to the video bellow andassociatedcopyright claims be relesed
                        </Typography>
                        {/* <Box>
                            <form 
                                className={modal.form__fix}
                                onSubmit={handleSubmit}
                                onKeyDown={sendOnButtonClick}
                            >
                                <TextareaAutosize
                                    className={modal.textarea}
                                    value={value}
                                    onChange={handleChangeValue}
                                    minRows={7}
                                    maxRows={10}
                                />
                                <Box className={`${helper.d__flex} ${helper.justify__center} ${modal.form__button__wrapper}`}>
                                    <button 
                                        className={button.button__yellow__bold}
                                        type="submit"
                                    >
                                        Send
                                    </button>
                                </Box>
                            </form>
                        </Box> */}
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