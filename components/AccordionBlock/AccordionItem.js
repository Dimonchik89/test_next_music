import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';

import helper from "../../styles/helper.module.scss";
import accordion from "../../styles/accordion.module.scss";
import footer from "../../styles/footer.module.scss";

const AccordionItem = ({title, text, link, allowed, forbidden}) => {
    const router = useRouter()

    const allowedContainer = allowed?.map((item, i) => <Typography variant="h4" component="h5" key={i}>{item}</Typography>)
    const forbiddenContainer = forbidden?.map((item, i) => <Typography variant='h4' component="h5" key={i}>{item}</Typography>)

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
                <Box className={helper.mb__20}>
                    <Typography
                        variant="h4"
                        component="span"
                    >
                        {text}
                    </Typography>
                    {!!link ? 
                        <button 
                            style={{fontSize: "20px", color: "#900"}}
                            // onClick={handleShowModal}
                            onClick={() => router.push({
                                pathname: "/",
                                query: {
                                    fix: "fix"
                                },
                            }, undefined, {scroll: false, shallow: false})}
                        >
                            form
                        </button> : 
                    null}
                    {allowedContainer}
                </Box>
                            
                {!!allowed ? <Typography
                    variant="h4"
                    component="span"
                >
                    Not Allowed:
                </Typography> : null}
                {forbiddenContainer}
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionItem;