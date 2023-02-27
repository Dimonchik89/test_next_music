import { Box } from "@mui/material";
import { selectMusic } from "../../store/actualMusics";
import { showHeaderPlayer } from "../../store/player";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { music } from "../../store/actualMusics"
import { createStructuredSelector } from 'reselect';

import sound from "../../styles/sound.module.scss";

const SoundLogo = ({iconPath, music, selectMusic, showHeaderPlayer, headerMusic}) => {
    const router = useRouter();

    const handleShowPlayer = () => {
        console.log("music.id", music.id);
        console.log("headerMusic?.id", headerMusic?.id);
        if(music.id != headerMusic?.id) {
            router.push({ 
                pathname: '/', 
                query: { ...router.query, sound: music.id } }, 
                undefined, 
                {scroll: false, shallow: true}
            )
            selectMusic(music.id)
        }
        // showHeaderPlayer()
    }

    return (
        <Box className={sound.logo__container} onClick={handleShowPlayer}>
            <picture>
                <img
                    className={sound.logo}
                    src={`${process.env.NEXT_PUBLIC_IMG_URL}${iconPath}`}
                    alt="logo"
                />
            </picture>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    headerMusic: music
})

const mapDispatchToProps = dispatch => ({
    selectMusic: bindActionCreators(selectMusic, dispatch),
    showHeaderPlayer: bindActionCreators(showHeaderPlayer, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SoundLogo);