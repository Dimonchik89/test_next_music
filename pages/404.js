import { Box } from '@mui/material';
import HeaderHead from '../components/Header/HeaderHead';
import Link from 'next/link';

import helper from "../styles/helper.module.scss";
import error from "../styles/error.module.scss";

const ErrorPage = () => {

    return (
        <Box className={error.page}>
            <HeaderHead/>
            <Box className={`${helper.d__flex} ${helper.align__center} ${helper.justify__center} ${error.inner}`}>
                <Box className={helper.fz__24}>
                    Something went wrong 
                    <Link 
                        href={"/"}
                        className={`${helper.color__yellow} ${helper.fz__24}`}
                    >
                        Go Home
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
export default ErrorPage