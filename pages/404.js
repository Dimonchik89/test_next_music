import { Box, Typography } from '@mui/material';
import HeaderHead from '../components/Header/HeaderHead';
import Link from 'next/link';

import helper from "../styles/helper.module.scss";
import error from "../styles/error.module.scss";

const ErrorPage = () => {

    return (
        <Box className={error.page}>
            <HeaderHead/>
            <Box className={`${helper.d__flex} ${helper.align__center} ${helper.justify__center} ${error.inner}`}>
                <Box>
                    <Typography
                        vatiant="h3"
                        component="p"
                        className={`${helper.fz__24} ${helper.color__white}`}
                    >    
                        Something went wrong 
                    </Typography>
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