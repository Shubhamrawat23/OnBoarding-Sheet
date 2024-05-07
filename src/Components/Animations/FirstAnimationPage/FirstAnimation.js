import React, { useEffect, useRef } from "react";
import './FirstAnimation.css'
import BgScenery from '../../Images/background.svg'
import BgSecondSecne from '../../Images/background2.svg';
import Car from '../../Images/car.png';
import UseData from "../../../Context/Context.js";

 
export default function FirstAnimation(){

    const carRef = useRef()
    const {data} = UseData()

    useEffect(()=>{
        const carMove = ()=>{
             carRef.current.classList.add('moveAnimation')

            //remove animation after 3sec
                setTimeout(()=>{
                    if (carRef.current) {
                        carRef.current.classList.remove('moveAnimation');
                    }
                },3000)

        }
        
        const carAnimationInterval = setInterval(carMove,10000)


        return ()=>clearInterval(carAnimationInterval)
    },[])
    return (
        <>
            <div id={data && data.page === 2 ?"bgSecondScenery": "backgroundScenery"}>
                <img src={data && data.page===2?BgSecondSecne:BgScenery} alt="bgScene" id="bgScene"/>
            </div>

            <img src={Car} alt="car" 
            className="carIcon" 
            ref={carRef}
            style={data && data.page===2?{top:'140px'}:{}}/>

        </>
    )
}