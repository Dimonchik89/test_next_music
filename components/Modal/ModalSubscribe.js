import { Box, Modal } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import { showModal, handleCloseModal } from '../../store/modal';
import CloseIcon from '@mui/icons-material/Close';
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import ModalSubscribeHeader from "./ModalSubscribeHeader";
import ModalBlock from "./ModalBlock";
import ModalYoutubeSubscribe from "./ModalYoutubeSubscribe";
import ModalYoutubeComment from "./ModalYoutubeComment";
import ModalYoutubeLink from "./ModalYoutubeLink";

import modal from "../../styles/modal.module.scss"
import button from "../../styles/button.module.scss"


const ModalSubscribe = ({showModal, handleCloseModal}) => {

    return (
        <Modal
            // hideBackdrop
            open={showModal}
            onClose={handleCloseModal}
        >
            <Box 
                className={modal.container}    
            >
                <IconButton
                    className={button.modal__close}
                    onClick={() => handleCloseModal()}
                >
                    <CloseIcon color="white" fontSize="large"/>
                </IconButton>
                <ModalSubscribeHeader/>
                <ModalBlock title="Subscribe to Youtube">
                    <ModalYoutubeSubscribe/>
                </ModalBlock>
                <ModalBlock title="Copy and paste this text into the description for your video">
                    <ModalYoutubeComment/>
                </ModalBlock>
                <ModalBlock title="Paste the link to your video we will take care of it">
                    <ModalYoutubeLink onClose={handleCloseModal}/>
                </ModalBlock>
            </Box>
        </Modal>
    )
}

const mapStateToProps = createStructuredSelector({
    showModal
})

const mapDispatchToProps = dispatch => ({
    handleCloseModal: bindActionCreators(handleCloseModal, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalSubscribe);