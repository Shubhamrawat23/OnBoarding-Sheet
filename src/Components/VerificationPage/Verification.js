import React from "react";
import './Verification.css'
import BlurBg from '../Images/g7104.svg'
import UserImg from '../Images/userImg.svg';
import FingerPrintImg from '../Images/userImg.svg';
import AddressImg from '../Images/userImg.svg';
import Card from "./Card";

export default function Verification(){
    return (
        <>
            <div id="blurBgBox">

                <div id="bgInsideBox">
                    <img src={BlurBg} alt="bavkground" id="blurBg"/>
                </div>
            </div>

            <div id="verifyDetailsBox">

                <div id="verfiyTxtBox">

                    <span>Verify your details</span>

                    <span>Aadhaar link found</span>
                
                </div>

                <div id="allDetailsMainBox">

                    <Card cardImg={UserImg} CardNum={`CMRPMXXXXF`} Name={`ASHAR RAI MUJEEB`} dataFetched={`NSDL`} dateLabel={`Last Updated`} dateTxt={`24/04/2024`} />

                    <Card cardImg={FingerPrintImg} CardNum={`Address`} Name={`Aadhaar UID`} dataFetched={`Digio`} dateLabel={`Date of Birth`} dateTxt={`18/10/1994`} />

                    <Card cardImg={AddressImg} CardNum={`Address`} Name={`16/2, 8 Jat Regiment, c/o 56 APO`} dataFetched={`Digio`} dateLabel={`Address Type`} dateTxt={`Correspondence`} />

                </div>

            </div>
        </>
    )
}