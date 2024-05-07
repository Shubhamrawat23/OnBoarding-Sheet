import React, { useEffect, useRef } from "react";
import Car from '../Images/car.png';
import './CarMove.css'
import UseData from "../../Context/Context";

export default function CarMove(){

    const carRef = useRef()
    const {data} = UseData()

    useEffect(()=>{
        const carMove = ()=>{
            carRef.current.classList.add('moveAnimation')

            //remove animation after 5sec
            setTimeout(()=>{
                carRef.current.classList.remove('moveAnimation')
            },3000)

        }
        
        const carAnimationInterval = setInterval(carMove,10000)

        return ()=>clearInterval(carAnimationInterval)
    },[])
    return(
        <>
            <img src={Car} alt="car" 
            className="carIcon" 
            ref={carRef}
            style={data && data.page===2?{top:'140px'}:{}}/>
        </>
    )
}