import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { allStop, selectMusic } from "../../store/actualMusics";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";

import sound from "../../styles/sound.module.scss";

const SoundLogo = ({iconPath, id}) => {
    const router = useRouter();

    const selectSong = () => {
        if(id != headerMusic?.id) {
            router.push({ 
                pathname: '/', 
                query: { ...router.query, sound: music.id } }, 
                undefined, 
                {scroll: false, shallow: true}
            )
            allStop()
            selectMusic(music.id)
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

export default SoundLogo;