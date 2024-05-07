import React from "react";
import './Experience.css'
import UseData from "../../Context/Context";

export default function Experience(){
    const {data,setData} = UseData();

    const handleExpClick= (value)=>{

        setData(prev=>({
            ...prev,
            exp:value,
        }))
    }

    return (
        <>
            <div id="insideBoxExp">

                <div id="ExpQuesBox">
                    <div id="txtExpQues">
                        How much trading experience do you have?
                    </div>

                    <div id="pageNum">
                        <span>{`${data && data.page}/2`}</span>
                    </div>
                </div>

                <div id="experienceBox">

                    <div id="noneBox"
                        onClick={() => { handleExpClick('none') }}
                        className={data && data.exp === 'none' ? "active" : ""}>

                        <span>None</span>
                        <span>{`<1Y`}</span>

                    </div>

                    <div id="beginnerBox"
                        onClick={() => { handleExpClick('beginner') }}
                        className={data && data.exp === 'beginner' ? "active" : ""}>

                        <span>Beginner</span>
                        <span>1Y-3Y</span>

                    </div>

                    <div id="midBox"
                        onClick={() => { handleExpClick('mid') }}
                        className={data && data.exp === 'mid' ? "active" : ""}>

                        <span>Mid</span>
                        <span>3Y-5Y</span>

                    </div>

                    <div id="proBox"
                        onClick={() => { handleExpClick('pro') }}
                        className={data && data.exp === 'pro' ? "active" : ""}>

                        <span>Pro</span>
                        <span>{`>5Y`}</span>

                    </div>

                </div>
            </div>
        </>
    )
}