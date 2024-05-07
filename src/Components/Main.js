import React from "react";
import './Main.css'
import AndroidPhone from "./AndroidPhone/AndroidPhone";
import NavHead from "./NavHead/NavHead";
import SelectedPlan from "./SelectedPlan/SelectedPlan";
import Close from './Images/close.svg';
import NxtArr from './Images/arrow_right_alt.svg';
import PreviousArrrow from './Images/keyboard_backspace.svg';
import FirstAnimation from "./Animations/FirstAnimationPage/FirstAnimation";
import Experience from "./ExperiencePage/Experience";
import UseData from "../Context/Context";
import Loading from "./LoadingPage/Loading";
import Detail from "./DeatilPage/Detail";
import Verification from "./VerificationPage/Verification";

export default function Main() {

    const { data, setData } = UseData()


    const handleCloseClick = () => {
        setData(prev => ({
            ...prev,
            exp: 'beginner',
            page: 1,
            panCardNumber: '',
            verifyMethod: 'Automatic',
            completed: false,
            loadingComplete: false,
        }))
    }

    const handleNxtBtn = () => {
        setData(prev => ({
            ...prev,
            page: prev.page < 2 ? prev.page + 1 : prev.page,
        }))
    }

    const handlePrevBtnClick = () => {
        setData((prev) => ({
            ...prev,
            page: prev.page > 1 ? prev.page - 1 : prev.page,
        }))
    }

    const handleCompletedBtnclick = () => {
        setData(prev => ({
            ...prev,
            completed: true,
        }));
    };


    return (
        <>
            <AndroidPhone />
            <NavHead />
            <SelectedPlan />




            <div id={data && data.completed ? "mainBoxAfterCompleted" : "frame327"}
                style={data && data.loadingComplete ? { height: "699px", top: "100px" } : {}}>

                <div id="frame279"
                    onClick={data && data.completed ? handleCloseClick : null}
                    style={data && data.loadingComplete ? { bottom: '715.01px' } : {}}>

                    <img src={Close} alt="close" id="closeIcon" />
                </div>


                {data && data.completed ?
                    (
                        data.loadingComplete ?
                            <Verification /> :
                            (<Loading />)
                    ) :
                    (<>
                        <div id="frame1191">

                            <div id="txtOfStartedFabits">
                                Get started with Fabits
                            </div>

                            <div id="txtOfQues">
                                Answer a few questions to begin onboarding
                            </div>

                        </div>
                        <div id="animationSec">

                            <FirstAnimation />

                        </div>

                        <div id="mainBoxOfExpAndVerify" style={data.page === 2 ? { height: '320px', bottom: '115px' } : {}}>

                            {data && data.page === 2 ?
                                <Detail /> :
                                <Experience />}

                            {data && data.page === 1 ?
                                (<>
                                    <div id="nxtBox">

                                        <button id="nextBtn" onClick={handleNxtBtn}>
                                            <span>Next</span>

                                            <div id="arrowBox">
                                                <img src={NxtArr} alt="next" id="nxtArrIcon" />
                                            </div>
                                        </button>
                                    </div>
                                </>) :
                                (<>

                                    <div id="nxtAndCompleteBtnBox">

                                        <div id="prevBtnBox" onClick={handlePrevBtnClick}>
                                            <img src={PreviousArrrow} alt="back" id="backArr" />
                                        </div>

                                        <div id="completeBox" onClick={handleCompletedBtnclick}>

                                            <span>Complete</span>

                                            <div id="completeArrBox">
                                                <img src={NxtArr} alt="next" id="nxtCompleteArrIcon" />
                                            </div>
                                        </div>

                                    </div>
                                </>)}

                        </div>
                    </>)}
            </div>
        </>
    )
}