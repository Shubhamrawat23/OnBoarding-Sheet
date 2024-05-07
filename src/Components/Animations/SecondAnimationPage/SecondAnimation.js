import React, { useEffect, useState } from "react";
import BgLoadingScenery from '../../Images/loadingBg.svg';
import Car from '../../Images/car.png'
import './SecondAnimation.css'
import UseData from "../../../Context/Context";

export default function SecondAnimation(){
    const [isBlur, setIsBlur] = useState(false)
    const { setData } = UseData();
    
    useEffect(()=>{
        const blurness =  setTimeout(() => {
            setIsBlur(true)
        }, 8000);
        
        return () => {
            clearTimeout(blurness)
        }
    },[])

    useEffect(() => {
        if (isBlur) {
            setData(prevData => ({
                ...prevData,
                loadingComplete: true
            }));
        }
    }, [isBlur, setData]);

    
    return(
        <>
        <div id="secondImgBox" style={isBlur?{filter:'blur(5px)'}:{}}>

            <img src={BgLoadingScenery} alt="backgroundSecenry" id="bgLoadingScene"/>

            <img src={Car} alt="car" id="carLoading"/>
            
        </div>
        </>
    )
}