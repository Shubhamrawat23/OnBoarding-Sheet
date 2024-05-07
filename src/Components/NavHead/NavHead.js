import React from "react";
import './NavHead.css';
import MenuBar from '../Images/menu.svg';
import Logo from '../Images/Logo.svg';
import Notifi from '../Images/notifications.svg';
import AccountIcon from '../Images/account_circle.svg'

export default function NavHead(){
    return (
        <div id="mainNav">

            <div id="menuBox">

                <div id="menuBar">
                    <img src={MenuBar} alt="menuBar" id="menuBarIcon"/>
                </div>

                <img src={Logo} alt="Logo" id="logoIcon"/>
            </div>

            <div id="notificationBox">

                <div id="notification">
                    <img src={Notifi} alt="notification" id="notifiIcon"/>
                </div>

                <div id="account">
                    <img src={AccountIcon} alt="acount" id="accountIcon"/>
                </div>
            </div>
        </div>
    )
}