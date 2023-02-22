import { Box } from '@mui/material';
import HeaderHead from '../components/Header/HeaderHead';
import Link from 'next/link';

import helper from "../styles/helper.module.scss";
import error from "../styles/error.module.scss";

const ErrorPage = () => {

    return (
        <Box className={error.page}>
            <HeaderHead/>
            <Box className={`${helper.d__flex} ${helper.align__center} ${helper.justify__center}`}>
                <Box>
                    Something went wrong 
                    <Link 
                        href={"/"}
                        className={helper.color__yellow}
                    >
                        Go Home
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default ErrorPage