import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

import helper from "../../styles/helper.module.scss";

const AccordionItem = ({title, text}) => {


    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Box>
                    <Typography
                        variant="h4"
                        component="h3"
                    >
                        {title}
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                    className={helper.fz__16}
                    component="span"
                >
                    {text}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionItem;