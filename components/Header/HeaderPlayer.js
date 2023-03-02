import { useState, useEffect } from "react";
import { Box, Container } from "@mui/system";
import { createStructuredSelector } from 'reselect';
import { connect } from "react-redux";
import { music, stopMusic } from "../../store/actualMusics";
import HeaderPlayerLogo from "./HeaderPlayerLogo";
import HeaderPlayerContent from "./HeaderPlayerContent";
import HeaderPlayerMusic from "./HeaderPlayerMusic";
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from "next/router"
import { hideHeaderPlayer } from "../../store/player/playerSlice";
import { bindActionCreators } from "@reduxjs/toolkit";
import { IconButton } from "@mui/material";

import helper from "../../styles/helper.module.scss"
import header from "../../styles/header.module.scss"

const HeaderPlayer = ({music, hideHeaderPlayer, stopMusic}) => {
    const [ focusDownload, setFocusDownload ] = useState(false)
    const [ activeButton, setActiveButton ] = useState(false)
    const router = useRouter()

    const changeButton = () => {
        setActiveButton(prev => !prev)
    }

    const closeHeaderPlayer = () => {
        let newQuery = {};
        for(let key in router.query) {
            if(key !== 'sound') {
                newQuery[key] = router.query[key]
            }
        }
        router.push({
            pathname: '/',
            query: newQuery
        }, undefined, {shallow: true})
        if(music.play) {
            stopMusic(music.id)
        }
        hideHeaderPlayer()
    }

    return (
        <Box
            className={header.player}
        >
            <Container 
                maxWidth="md"
                className={helper.container}
            >
                <Box>
                    <Box className={`${header.player__wrapper}`}>
                        <HeaderPlayerLogo logoPath={music?.img}/>
                        <HeaderPlayerContent 
                            music={music} 
                            changeButton={changeButton} 
                            setFocusDownload={setFocusDownload} 
                            activeButton={activeButton}
                            focusDownload={focusDownload}
                        />
                    </Box>
                    <HeaderPlayerMusic music={music}/>
                </Box>
            </Container>
            <IconButton 
                className={header.close}
                onClick={closeHeaderPlayer}    
            >
                <CloseIcon sx={{color: '#f2d22b'}} fontSize="large"/>
            </IconButton>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    music
})

const mapDispatchToProps = dispatch => ({
    hideHeaderPlayer: bindActionCreators(hideHeaderPlayer, dispatch),
    stopMusic: bindActionCreators(stopMusic, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderPlayer);