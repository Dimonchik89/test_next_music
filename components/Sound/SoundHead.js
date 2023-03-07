import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Share from "../Share/Share";
import { useRouter } from "next/router";
import useMusic from "../../hooks/useMusic";
import { allStop, selectMusic, music } from "../../store/actualMusics";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import helper from "../../styles/helper.module.scss";
import sound from "../../styles/sound.module.scss";


const SoundHead = ({music, headerMusic, selectMusic}) => {
    const [ activeButton, setActiveButton ] = useState(false)
    const router = useRouter();
    const { handleDownload } = useMusic()

    const changeButton = () => {
        setActiveButton(prev => !prev)
    }

        const selectSong = () => {
        if(music?.id != headerMusic?.id) {
            router.push({ 
                pathname: '/', 
                query: { ...router.query, sound: music?.id } }, 
                undefined, 
                {scroll: false, shallow: true}
            )
            selectMusic(music?.id)
        }
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
                onClick={selectSong}
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
                    onClick={(e) => {
                        addSoundToQuery()
                        handleDownload(e, music)
                    }}  
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
    selectMusic: bindActionCreators(selectMusic, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SoundHead);