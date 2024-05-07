import React from "react";
import './SelectedPlan.css'
import ArrowOfRtns from '../Images/arrow_circle_up.svg';

export default function SelectedPlan(){
    return(
        <div id="selectPLanMain">
            
            <div id="planBox">
                
                <div id="glanceTxt">
                    At a glance
                </div>

                <div id="priceMain">

                    <div id="priceInsideBox">

                        <div id="planPrice">
                            ₹ 3,596<span>.21</span>
                        </div>

                        <div id="txtCurrentValue">
                            Current Value
                        </div>
                    </div>

                    <div id="investMain">

                        <div id="invesetInsideBox">
                           
                            <div id="investPrice">
                                ₹ 3,500 <span>.11</span>
                            </div>

                            <div id="txtInvestAmt">
                                Invested Amount
                            </div>
                        </div>

                        <div id="profitBox">
                            <span id="profitPrice">
                            ₹ +96<span>.10</span>
                            </span>

                            <div id="returnBox">

                                <span id="txtReturn">
                                    Returns
                                </span>

                                <div id="rtrnPercentBox">

                                    <div id="returnArrowBox">
                                        <img src={ArrowOfRtns} alt="arrow" id="arrRtnsIcon"/>
                                    </div>

                                    <span id="rtnPercent">2.74%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}