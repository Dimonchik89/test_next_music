import { useRef, useState } from "react";
import { Box, IconButton, Snackbar, Tooltip } from "@mui/material"
import { songIsDownloading } from "../../store/actualMusics"
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect';
import { useRouter } from "next/router";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CloseIcon from '@mui/icons-material/Close';

import helper from "../../styles/helper.module.scss"
import modal from "../../styles/modal.module.scss"

const ModalYoutubeComment = ({songIsDownloading}) => {
    const router = useRouter()
    const soundQuery = router.asPath.replace("/", "")
    const [copySuccess, setCopySuccess] = useState("")
    const [open, setOpen] = useState(false)
    const trackRef = useRef(null)

    const copyLink = async (e) => {
        try {
            await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_PAGE_URL}${soundQuery}`)
            setCopySuccess('Copied!');
            setOpen(true)

            setTimeout(() => {
                setOpen(false)
            }, 2000)
        } catch(e) {
            setCopySuccess('Failed to copy!');
            setOpen(true)

            setTimeout(() => {
                setOpen(false)
            }, 2000)
        }
    }

    const showCopyMessageClass = open ? helper.show : helper.hide
    
    return (
        <Box className={modal.info__container}>
            <p className={modal.info__item}>Song: {songIsDownloading.name}</p>
            <p className={modal.info__item}>Music provided by TuneBox</p>
            <div className={`${helper.d__flex} ${helper.align__center}`}>
                <p className={modal.info__item}>Free Download: <span ref={trackRef}>{process.env.NEXT_PUBLIC_PAGE_URL}{soundQuery}</span></p>
                <IconButton
                    disabled={open}
                    className={`${helper.reset__padding} ${modal.info__copy_btn}`}
                >
                    <ContentCopyIcon 
                        onClick={copyLink}
                        color="white" 
                        sx={{cursor: "pointer"}}
                    />
                </IconButton>
            </div>
            <div className={`${modal.youtube__link_snackbar} ${showCopyMessageClass}`}>
                {copySuccess}
            </div>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    songIsDownloading
})

export default connect(mapStateToProps)(ModalYoutubeComment)