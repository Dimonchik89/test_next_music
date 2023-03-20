import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionItem from './AccordionItem';
import { Box } from '@mui/material';

import helper from "../../styles/helper.module.scss"

const AccordionBlock = ({title, accordionArray}) => {

    const content = accordionArray?.map((item, i) => <AccordionItem key={i} title={item.title}/>)

    return (
        <Box className={helper.mt__60}>
            <Typography
                variant='h2'
                component="h3"
                textAlign="center"
                className={`${helper.color__white} ${helper.text__capitalize} ${helper.mb__20}`}
            >
                {title}
            </Typography>
            <div>
                {content}
            </div>
        </Box>
    )
}

export default AccordionBlock