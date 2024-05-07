import React, { createContext, useContext, useState } from "react";

const onBoardSheet = createContext()

export function OnBoardSheetProvider({children}){
    const [data,setData] = useState({
        exp:'beginner',
        page:1,
        panCardNumber:'',
        verifyMethod:'Automatic',
        completed:false,
        loadingComplete:false,
    })
    return <onBoardSheet.Provider value={{data,setData}}>{children}</onBoardSheet.Provider>
}

export default function UseData (){
    return useContext(onBoardSheet);
}