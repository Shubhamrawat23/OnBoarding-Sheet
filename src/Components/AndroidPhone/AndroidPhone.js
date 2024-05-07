import React from "react";
import './AndroidPhone.css'
import Wifi from '../Images/wifi.svg';
import Signal from '../Images/reception.svg'
import Battery from '../Images/battery.svg'

export default function AndroidPhone(){
    return(
        <div id="phoneMain">

            <div id="phoneBar">

                <div id="phoneTime">
                    12:45
                </div>

                <div id="statusBarContent">

                    <img src={Wifi} alt="wifi" id="wifi" />

                    <img src={Signal} alt="signal" id="signal"/>

                    <div id="batteryBox">

                        <span>100%</span>

                        <img src={Battery} alt="battery" />

                    </div>
                </div>
            </div>
        </div>
    )
}