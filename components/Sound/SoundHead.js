import { useState } from "react";
import { Box } from "@mui/material";
import Share from "../Share/Share";
import { handleOpenModal } from "../../store/modal";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { downloadMusic } from "../../api/downloadApi";
import { setSongIsDownloading } from "../../store/actualMusics";
import { selectMusic } from "../../store/actualMusics";
import { showHeaderPlayer } from "../../store/player";
import { music } from "../../store/actualMusics";
import { createStructuredSelector } from 'reselect';
import { useRouter } from "next/router";

import helper from "../../styles/helper.module.scss";
import sound from "../../styles/sound.module.scss";


const SoundHead = ({music, handleOpenModal, setSongIsDownloading, selectMusic, showHeaderPlayer, headerMusic}) => {
    const [ activeButton, setActiveButton ] = useState(false)
    const router = useRouter();

    const handleShowPlayer = () => {
        if(music.id != headerMusic?.id) {
            router.push({ 
            pathname: '/', 
            query: { ...router.query, sound: music.id } }, 
            undefined, 
            {scroll: false, shallow: true}
            )
            selectMusic(music.id)
        }
        showHeaderPlayer()
    }

    const changeButton = () => {
        setActiveButton(prev => !prev)
    }

    const handleDownload = (e) => {
        setSongIsDownloading(music)
        handleOpenModal()
        downloadMusic({e, music})
    }

    const showButton = activeButton ? 
        <div className={sound.button__close_wrapper}>
            <button 
                className={`${sound.button__share_close}`}
                onClick={changeButton}
            /> 
            <Share musicId={music?.id} changeButton={changeButton}/>
        </div>
        : <button 
            className={`${sound.button} ${sound.button__share}`}
            onClick={changeButton}
        />

    return (
        <Box className={sound.head}>
            <span 
                className={sound.title}
                onClick={handleShowPlayer}
            >
               {music?.name}
               
            </span>
            <Box className={`${helper.d__flex} ${helper.align__center}`}>
                {/* <button className={`${sound.button} ${sound.button__heart}`}/> //favorite */}
                {showButton}
                <button
                    href={`${process.env.NEXT_PUBLIC_IMG_URL}${music?.audio}`} 
                    className={`${sound.button__text}`} 
                    download
                    target="_blank"
                    onClick={handleDownload}  
                >
                    <p className={sound.text__inner}>
                        Download
                    </p>
                </button>
            </Box>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    headerMusic: music
})

const mapDispatchToProps = dispatch => ({
    handleOpenModal: bindActionCreators(handleOpenModal, dispatch),
    setSongIsDownloading: bindActionCreators(setSongIsDownloading, dispatch),
    selectMusic: bindActionCreators(selectMusic, dispatch),
    showHeaderPlayer: bindActionCreators(showHeaderPlayer, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SoundHead);