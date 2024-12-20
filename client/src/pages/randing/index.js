import React from "react";
import Topbar from "./topBar";
import EmblaCarousel from './EmblaCarousel'
import ResultMatch from "./resultMatch";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Randing = () => {
    return (
        <>
        <div className="randing">
           <Topbar />
           <img src="assets/imgs/banner.png" style={{width:"100%"}} />
           <EmblaCarousel slides={SLIDES} options={OPTIONS} />
           <ResultMatch />

        </div>
        </>
    )
}

export default Randing;