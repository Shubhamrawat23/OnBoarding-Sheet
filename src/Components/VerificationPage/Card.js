import React from "react";
import './Card.css'

export default function Card({ cardImg, CardNum, Name, dataFetched, dateLabel, dateTxt }) {
    const handleCardClick = ()=>{
        window.open('https://www.linkedin.com/in/shubham-rawat01','_blank')
    }
    return (

        <div id="fistCardBox" onClick={handleCardClick}>

            <div id="userImgAndName">

                <img src={cardImg} alt="userImg" id="userImg" />

                <div id="userNameAndCardNum">
                    <span>{CardNum}</span>
                    <span>{Name}</span>
                </div>

            </div>

            <div id="fetchAndDateBox">

                <div id="fetchDetails">
                    <span>Fetched Via</span>
                    <span>{dataFetched}</span>
                </div>

                <div id="userDate">
                    <span>{dateLabel}</span>
                    <span>{dateTxt}</span>
                </div>
            </div>
        </div>
    )
}