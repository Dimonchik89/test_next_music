import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

import helper from "../../styles/helper.module.scss";
import accordion from "../../styles/accordion.module.scss";

const AccordionItem = ({title, text, link}) => {

    // const allowedContainer = allowed?.map((item, i) => <p key={i}>{item}</p>)
    // const forbiddenContainer = forbidden?.map((item, i) => <p key={i}>{item}</p>)

    return (
        <Accordion className={accordion.bg}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Box>
                    <Typography
                        variant="h3"
                        component="h3"
                    >
                        {title}
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Typography
                    variant="h4"
                    component="span"
                >
                    {text}
                    {!!link ? <a style={{color: "red"}} target="_blank" href={link}>YouTube</a> : null}
                    {/*{allowedContainer}
                    {!!forbidden ? 'Not Allowed:' : null}
                    {forbiddenContainer} */}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionItem;