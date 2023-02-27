import { useState } from "react";
// import { Container, Box } from "@mui/system";
import FooterHead from "./FooterHead";
import FooterIcons from "./FooterIcons";
import FooterBottom from "./FooterBottom";
import { Modal, Typography, Container, Box } from "@mui/material";

import footer from "../../styles/footer.module.scss";
import helper from '../../styles/helper.module.scss';
import modal from "../../styles/modal.module.scss";
import ModalSubscribe from '../Modal/ModalSubscribe';

const Footer = () => {
    const [showModal, setShowModal] = useState(false)

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <Box className={footer.wrapper}>
            <Container 
                maxWidth="md"
                className={helper.container}
            >
                <Box className={`${helper.d__flex} ${helper.direction__column} ${helper.space__between}`}>
                    <FooterHead/>
                    <FooterIcons/>
                    <FooterBottom handleShowModal={handleShowModal}/>
                </Box>
            </Container>
            <Modal
                open={showModal}
                onClose={handleCloseModal}
            >
                <Box 
                    className={modal.container}    
                >
                    LOREM
                </Box>
            </Modal>
        </Box>
    )
}
export default Footer