import { useState } from "react";
import { Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "next/image";
import { sendEmail } from "../../api/sendEmail";
import ErrorModal from "./ErrorModal";
import useValue from "../../hooks/useValue";

import helper from "../../styles/helper.module.scss";
import modal from "../../styles/modal.module.scss"

import youtube from "../../static/icon/youtube_big.svg"

const ModalYoutubeLink = ({onClose}) => {
    const { value, handleChangeValue } = useValue()
    const [showError, setShowError] = useState(false)

    const openErrorModal = () => {
        setShowError(true)
    }

    const closeErrorModal = () => {
        setShowError(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await sendEmail(value)
        console.log(response);
        if(response.status === 200) {
            onClose()
        } else {
            openErrorModal()
        }

    }

    const sendOnButtonClick = (e) => {
        if(e.keyKode === 13) {
            handleSubmit(e)
        }
    }

    return (
        <>
            <Box className={modal.youtube__link__container}>
                <form 
                    className={modal.form}
                    onSubmit={handleSubmit}
                    onKeyDown={sendOnButtonClick}
                >
                    <Image
                        src={youtube}
                        alt="youtube"
                        width={45}
                        height={31}
                        className={modal.form__logo}
                    />
                    <input
                        placeholder="YouTube video link"
                        className={modal.input}
                        type="text"
                        value={value}
                        onChange={handleChangeValue}
                    />
                    <Box 
                        className={modal.submit__wrapper}
                        onClick={handleSubmit}  
                    >
                        <span className={modal.submit}>Submit</span>
                        <ArrowForwardIcon color="white"/>
                    </Box>
                </form>
                <Box 
                    className={modal.submit__mobile__wrapper}
                    onClick={handleSubmit}  
                >
                    <button className={modal.submit__mobile}>
                        <span className={modal.submit}>Submit</span>
                        <ArrowForwardIcon color="white" size="large"/>
                    </button>
                </Box>
            </Box>
            <ErrorModal 
                open={showError} 
                handleClose={closeErrorModal} 
                text="You must add your youtube link"
            />
        </>
    )
}
export default ModalYoutubeLink;