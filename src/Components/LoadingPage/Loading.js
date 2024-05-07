import React from "react";
import './Loading.css'
import SecondAnimation from "../Animations/SecondAnimationPage/SecondAnimation";

export default function Loading(){
    return (
        <>
            <div id="boxOfFetchingData">
                
                <span id="headingOfFetchDataTxt">Fetching your PAN Details</span>

                <span id="subHeadingOfFetchDataTxt">Getting your PAN details by your chosen method</span>

                <SecondAnimation/>

            </div>
        </>
    )
}