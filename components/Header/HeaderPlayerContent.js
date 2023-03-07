import { Box } from "@mui/material"
import Image from "next/image";
import Share from "../Share/Share";
import { downloadMusic } from "../../api/downloadApi";
import { handleOpenModal } from "../../store/modal";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { setSongIsDownloading } from "../../store/actualMusics";
import useMusic from "../../hooks/useMusic";

import helper from "../../styles/helper.module.scss"
import header from "../../styles/header.module.scss"
import button from "../../styles/button.module.scss"

const HeaderPlayerContent = ({music, changeButton, setFocusDownload, activeButton, focusDownload, handleOpenModal, setSongIsDownloading}) => {
    const { handleDownload } = useMusic()
    const headerStyle = {
        right: '-2rem',
        borderRadius: "2rem"
    }

    const showButton = activeButton ? 
        <div className={header.button__close_wrapper}>
            <button 
                className={` ${button.header__close} ${button.header__square}`}
                onClick={changeButton}
            /> 
            <Share musicId={music?.id} addedStyle={headerStyle} changeButton={changeButton}/>
        </div>
        : <button 
            className={`${button.header__square} ${header.button__share}`}
            onClick={changeButton}
        />

    // const downloadStyle = focusDownload ? button.header__download__hover : null;
    
    // const downloadIcon = focusDownload ? 
    //     <Image
    //         style={{marginBottom: '4px'}}
    //         src="/static/icon/download-black.svg"
    //         width={20}
    //         height={21}
    //         alt="download-black"
    //     /> : 
    //     <Image
    //         style={{marginBottom: '4px'}}
    //         src="/static/icon/download.svg"
    //         width={20}
    //         height={21}
    //         alt="download"
    //     />

    // const downloadIcon = focusDownload ? 
    //     <image
    //         style={{marginBottom: '4px', height: '21px', width: '20px'}}
    //         src="./static/icon/download-black.svg"
    //         alt="download-black"
    //     /> : 
    //     <image
    //         style={{marginBottom: '4px', height: '21px', width: '20px'}}
    //         src="./static/icon/download.svg"
    //         alt="download"
    //     />

    // если хук работает правельно убрать импорты функция, удалить их из mapDispatchToPtops и Props-ов
    // const handleDownload = (e) => {
    //     setSongIsDownloading(music)
    //     handleOpenModal()
    //     downloadMusic({e, music})
    // }

    return (
        <>
        
        <Box className={header.content}>
            <h2 className={header.title}>
                {music?.name}
            </h2>
            <p className={header.subtitle}>Tunebox</p>
            <Box className={header.description__wrapper}>
                <p className={header.text}>{music?.description}</p>
            </Box>
            <Box className={header.button__group}>
                <button 
                    className={`${button.header__download}`} 
                    // onClick={handleDownload}
                    onClick={e => handleDownload(e, music)}
                    onMouseEnter={() => setFocusDownload(true)}
                    onMouseLeave={() => setFocusDownload(false)}
                >
                    {/* {downloadIcon} */}
                    <p>
                        Download
                    </p>
                </button>
                <Box className={helper.d__flex}>
                    {/* <button className={`${button.header__square} ${button.header__heart}`}/>  // favoriter */}  
                    {showButton}
                </Box>
            </Box>
        </Box>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    handleOpenModal: bindActionCreators(handleOpenModal, dispatch),
    setSongIsDownloading: bindActionCreators(setSongIsDownloading, dispatch)
})

export default connect(null, mapDispatchToProps)(HeaderPlayerContent)