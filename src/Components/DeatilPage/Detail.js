import React, { useState } from "react";
import './Detail.css';
import UseData from "../../Context/Context";

export default function Detail(){
    const {data, setData} = UseData()
    const [panNum,setPanNum] = useState('DKWPAXXXXM')

    const handleVerifyMethod =(value)=>{
        setData(prev=>({
            ...prev,
            verifyMethod:value,
        }))
    }

    return(
        <>
        <div id="verifyMainBox">

            <div id="panVerifyBox">
                <div id="txtOfPanVerify">
                    Please enter your PAN details to complete verification
                </div>

                <div id="secondPageBox">
                    <span>{`${data && data.page}/2`}</span>
                </div>
            </div>

            <div id="verifyMethodBox">

                <span>Verification method</span>

                <div id="methodInsideBox">
                    
                    <div id="manualBox"
                    onClick={()=>handleVerifyMethod('Manual')}
                    className={data && data.verifyMethod==="Manual"?"activeVerifyBox":""}>
                        <div id="txtManual">Manual</div>
                    </div>

                    <div id="autoBox"
                    onClick={()=>handleVerifyMethod('Automatic')}
                    className={data && data.verifyMethod==="Automatic"?"activeVerifyBox":""}>
                        <div id="txtAutomatic">Automatic</div>
                    </div>
                </div>

            </div>

            <div id="panBox">

                <div id="txtOfPanLabel">PAN Card Number</div>

                <input type="text" name="panCardNumber" 
                placeholder="Pan Number" 
                value={panNum} 
                onChange={(e)=>setPanNum(e.target.value.toUpperCase())}
                id="panCardNum"/>
            </div>
        </div>
        </>
    )
}