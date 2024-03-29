import { Box } from "@mui/material"
import { useRouter } from "next/router";

import helper from "../../styles/helper.module.scss";
import footer from "../../styles/footer.module.scss";

const FooterBottom = ({handleShowModal}) => {
    const router = useRouter()
    // const logo = window.screen.width <= 375 ? "../../static/images/Logo_md.png" : "../../static/images/Logo_sm.png";

    return (
        <Box className={footer.bottom}>
            <Box className={footer.bottom__content}>
                <button 
                    className={footer.link}
                    // onClick={handleShowModal}
                    onClick={() => router.push({
                        pathname: "/",
                        query: {
                            fix: "fix"
                        },
                    }, undefined, {scroll: false, shallow: false})}
                >
                    Got a Claim? Fix it
                </button>
                <button 
                    className={footer.link}
                    onClick={() => router.push('/faq')}
                >
                    FAQ
                </button>
                {/* <Box className={footer.bottom__logo}></Box> */}
            </Box>
        </Box>
    )
}
export default FooterBottom;