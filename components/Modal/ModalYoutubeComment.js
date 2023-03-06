import { Box } from "@mui/material"
import { songIsDownloading } from "../../store/actualMusics"
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect';
import { useRouter } from "next/router";

import modal from "../../styles/modal.module.scss"

const ModalYoutubeComment = ({songIsDownloading}) => {
    const router = useRouter()
    const soundQuery = router.asPath.replace("/", "")
    
    return (
        <Box className={modal.info__container}>
            <p className={modal.info__item}>Song: {songIsDownloading.name}</p>
            <p className={modal.info__item}>Music provided by TuneBox</p>
            {/* <p className={modal.info__item}>Free Download: {process.env.NEXT_PUBLIC_PAGE_URL}?sound={songIsDownloading.id}</p> */}
            <p className={modal.info__item}>Free Download: {process.env.NEXT_PUBLIC_PAGE_URL}{soundQuery}</p>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    songIsDownloading
})

export default connect(mapStateToProps)(ModalYoutubeComment)