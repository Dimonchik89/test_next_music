import { useState, useEffect } from "react";
import { Container, CircularProgress, Box } from "@mui/material";
import Header from "../Header/Header";
import Carousel from "../Carousel/Carousel";
import Sound from "../Sound/Sound";
import Footer from "../Footer/Footer";
import { showPlayer } from '../../store/player/selectors';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ModalSubscribe from "../Modal/ModalSubscribe";
import { allCategory } from '../../store/category';
import PagePagination from "../PagePagination/PagePagination";
import { fetchPaginationMusic, addMusic, incrementPage, currentPage, allCount, changeLimit, limit, actualMusics } from "../../store/actualMusics";
import { useRouter } from "next/router";
import { bindActionCreators } from "@reduxjs/toolkit";
import {Button} from "@mui/material";

import main from "../../styles/main.module.scss";
import button from "../../styles/button.module.scss";

const Main = ({showPlayer, allCategory, fetchPaginationMusic, addMusic, incrementPage, currentPage, allCount, changeLimit, limit, actualMusics }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleDownloadMore = () => {
        setLoading(true)
        changeLimit(limit + +process.env.NEXT_PUBLIC_SOUND_LIMIT)
        incrementPage()
        console.log("limit", limit);
        if(limit === process.env.NEXT_PUBLIC_SOUND_LIMIT) {
            router.push({
                pathname: "/",
                query: {
                    ...router.query,
                    page: currentPage + 1,
                }
            }, undefined, { shallow: true })
        } else {
            router.push({
                pathname: "/",
                query: {
                    ...router.query,
                    page: currentPage + 1,
                    limit: limit + +process.env.NEXT_PUBLIC_SOUND_LIMIT,
                }
            }, undefined, { shallow: true })
        }

        const queryKeys = Object.keys(router.query)
        const tailQuery = queryKeys.filter(item => item !== "limit")
        const resultQuery = {}
        tailQuery.forEach(item => {
            resultQuery[item] = router.query[item]
        })

        fetchPaginationMusic(`music?${new URLSearchParams({...resultQuery, page: currentPage + 1, limit: process.env.NEXT_PUBLIC_SOUND_LIMIT})}`) //убрать лимит, он задан дефолтно на сервере
            .then(data => {
                setLoading(false)
                addMusic(data.payload)
            })
            .catch(e => {
                setLoading(false)
                throw new Error(e)
            })
    }

    return (
        <Box className={main.main}>
            <Header/>
            <Container maxWidth="xl">
                {showPlayer ? null : <Carousel styleWrapper={main.main__carousel} category={allCategory}/>}
                <Sound/>
                {/* <PagePagination pathname="/"/> */}
                <Box
                    style={{display: "flex", justifyContent: "center", marginTop: "20px"}}
                >
                    {
                        loading ?
                        <Button 
                            onClick={handleDownloadMore} 
                            disabled
                            className={button.button__yellow__bold}
                        >
                            <CircularProgress/>
                        </Button> :
                        <Button 
                            onClick={handleDownloadMore} 
                            disabled={ +allCount === actualMusics.length}
                            className={button.button__yellow__bold}
                        >
                            Show more
                        </Button>
                    }
                </Box>
                <ModalSubscribe/>
            </Container>
            <Footer/>
        </Box>
    )
}

const mapStateToProps = createStructuredSelector({
    showPlayer,
    allCategory,
    currentPage,
    allCount,
    limit,
    actualMusics
})

const mapDispatchToProps = dispatch => ({
    fetchPaginationMusic: bindActionCreators(fetchPaginationMusic, dispatch),
    addMusic: bindActionCreators(addMusic, dispatch),
    incrementPage: bindActionCreators(incrementPage, dispatch),
    changeLimit: bindActionCreators(changeLimit, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);