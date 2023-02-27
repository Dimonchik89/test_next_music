import { Box } from "@mui/material";
import Link from "next/link";


import helper from "../../styles/helper.module.scss";
import footer from "../../styles/footer.module.scss";

const FooterBottom = ({handleShowModal}) => {

    // const logo = window.screen.width <= 375 ? "../../static/images/Logo_md.png" : "../../static/images/Logo_sm.png";

    return (
        <Box className={footer.bottom}>
            <Box className={footer.bottom__content}>
                <button 
                    className={footer.link}
                    onClick={handleShowModal}
                >
                    Got a Claim? Fix it
                </button>
                <Box className={footer.bottom__logo}></Box>
            </Box>
        </Box>
    )
}
export default FooterBottom;