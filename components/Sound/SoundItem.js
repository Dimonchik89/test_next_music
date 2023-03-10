import { Box } from "@mui/material";
import SoundLogo from "./SoundLogo";
import SoundHead from "./SoundHead";
import SoundContent from "./SoundContent";
import { useRouter } from "next/router";

import sound from "../../styles/sound.module.scss";

const SoundItem = ({music}) => {
    const { query } = useRouter()

    const activeStyle = music.id == query?.sound ? sound.active : null

    return (
        <Box className={sound.inner}>
            <Box className={`${sound.item} ${activeStyle}`}>
                <SoundLogo 
                    id={music?.id}
                    iconPath={music?.img}
                />

                <Box className={sound.content}>
                    <SoundHead music={music}/>
                    <SoundContent music={music}/>
                </Box>
            </Box>
        </Box>
    )
}
export default SoundItem;