import { Box, Container } from "@mui/material";
import HeaderHead from "../components/Header/HeaderHead";
import AccordionBlock from "../components/AccordionBlock/AccordionBlock";

import helper from "../styles/helper.module.scss"
import main from "../styles/main.module.scss"

const accordionContent1 = [
    {
        title: "Title 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Title 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
]

const accordionContent2 = [
    {
        title: "Title 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Title 4",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
]

const Faq = () => {

    return (
        <Box className={main.main}>
            <HeaderHead/>
            <Container
                maxWidth="md"
                className={helper.container}
            >
                <Box className={helper.mt__81}>
                    <AccordionBlock title="first" accordionArray={accordionContent1}/>
                    <AccordionBlock title="second" accordionArray={accordionContent1}/>
                </Box>
            </Container>
        </Box>
    )
}
export default Faq;