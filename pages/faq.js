import { Box, Container } from "@mui/material";
import HeaderHead from "../components/Header/HeaderHead";
import AccordionBlock from "../components/AccordionBlock/AccordionBlock";

import helper from "../styles/helper.module.scss"
import main from "../styles/main.module.scss"

const accordionContent1 = [
    {
        title: "Why did I receive a copyright claim to my video?",
        text: "Don’t worry, this is perfectly normal. Copyright claims just mean that the copyright owner has decided to either monetize, track, or block your video in certain territories.",
    },
    {
        title: "How can I get the copyright claim removed?",
        text: `If you receive copyright claims, you can remove them following this form: `,
    },
    {
        title: "Is this music Royalty Free?",
        text: `Yes. This means that you can use the tracks in any way you like online, without having to pay any royalties or fees.`,
    },
    {
        title: "Where can I use your music?",
        text: `Our free audio tracks can be used for YouTube, blogs, music videos, websites, social media, podcasts, and online ads. However, they cannot be used for CDs, DVDs, video games, or TV/radio broadcasts.`,
    },
    {
        title: "Where I can use my music?",
        text: `All music on ${process.env.NEXT_PUBLIC_SITE_NAME} can be used in your commercial and non-commercial projects for free, including but not limited to:`,
        allowed: ['✅ YouTube videos*', '✅ Short videos (YouTube Shorts, Instagram Reels, TikTok, etc)', '✅ Podcasts', '✅ Websites and social media', '✅ Educational purposes'],
        forbidden: ['❌ CD & DVDs', '❌ TV & Radio Broadcasts', '❌ Advertising', '❌ Video games', '❌ Remix or remake music', '❌ Claim music as your own']
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
                    <AccordionBlock title="FAQ" accordionArray={accordionContent1}/>
                </Box>
            </Container>
        </Box>
    )
}
export default Faq;