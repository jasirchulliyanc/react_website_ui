import "./Main.css";
import SectionOne from "./section/SectionOne"
import SectionTwo from "./section/SectionTwo";
import SectionThree from "./section/SectionThree";


import CarouselItems from "./carousel/Carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";

const Main = () => {
    return (
        <main>
            <SectionOne/>
            {/*<CarouselItems/>*/}
            <SectionTwo/>
            <SectionThree/>
        </main>
    )
}
export default Main;