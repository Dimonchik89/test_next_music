import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

import helper from "../../styles/helper.module.scss";
import accordion from "../../styles/accordion.module.scss";

const AccordionItem = ({title, text, link}) => {

    // const actualLink = !!link ? <a target="_blank" href={link}>YouTube</a> : null
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
                    
                    {/*{allowedContainer}
                    {!!forbidden ? 'Not Allowed:' : null}
                    {forbiddenContainer} */}
                </Typography>
                {/* {!!link ? 
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
                        Youtube
                    </button> : 
                null} */}
                <button 
                    // onClick={handleShowModal}
                    onClick={() => router.push({
                        pathname: "/",
                        query: {
                            fix: "fix"
                        },
                    }, undefined, {scroll: false, shallow: false})}
                >
                    Youtube
                </button>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionItem;