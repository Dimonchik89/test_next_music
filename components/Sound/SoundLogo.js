import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { allStop, selectMusic, music } from "../../store/actualMusics";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import sound from "../../styles/sound.module.scss";

const SoundLogo = ({iconPath, id, headerMusic, allStop, selectMusic}) => {
    const router = useRouter();

    const selectSong = () => {
        if(id != headerMusic?.id) {
            router.push({ 
                pathname: '/', 
                query: { ...router.query, sound: id } }, 
                undefined, 
                {scroll: false, shallow: true}
            )
            allStop()
            selectMusic(id)
        }
    }

    return (
        <Box className={sound.logo__container}>
            <picture>
                <img
                    onClick={selectSong}
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
    allStop: bindActionCreators(allStop, dispatch),
    selectMusic: bindActionCreators(selectMusic, dispatch)
}) 

export default connect(mapStateToProps, mapDispatchToProps)(SoundLogo);