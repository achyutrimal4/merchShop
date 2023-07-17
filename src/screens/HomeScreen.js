import React from "react";
import LandingSection from "../components/LandingSection";
import LandingChild from "../components/LandingChild";
import ProductsRow from "../components/ProductsRow";
import FastMarquee from "../components/FastMarquee";
import LatestVideo from "../components/LatestVideo";

function HomeScreen(){
    return(
        <>
        <LandingSection/>
        <LandingChild/>
        <ProductsRow/>
        <FastMarquee/>
        <LatestVideo/>
        </>
    )
}export default HomeScreen