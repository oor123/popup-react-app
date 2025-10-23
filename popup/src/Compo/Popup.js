import React, { useState, useEffect } from 'react';

const Popup = ({name, call: parentState, onClose}) => {
  const [display, setDisplay] = useState(false)
  const [pageData, setPageData] = useState({
    title: "This Is A PopUp Box",
    bgColor: "bg-orange-500",
    bgColorMsg: "bg-orange-800",
    select: "Sukriya Aapne Age badne Ke anumati diya hay.",
    msg: "Wellcome"
  })
  const closePopup = (v) => {
    setDisplay(v)
    onClose()
   }
   
   useEffect(()=>{
     setPageData(prev => ({
       ...prev,
       title: name[0],
       bgColor: name[1],
       bgColorMsg: name[2],
       select: name[3],
       msg: name[4]
     }))
     setDisplay(parentState)
   },[parentState])
  
  return (
    <>
      <div className={`absolute top-0 left-0 w-full h-screen bg-[#001415] grid place-items-center ${display ? "" : "hidden"} `} >
      
        <button className="absolute text-7xl text-rose-800 bg-rose-400 size-20 bold rounded right-12 top-12 text-center" onClick={() => closePopup(false)}>&times;</button >
        <div className={`size-90 border border-green-500 flex justify-center grid-cols-2 flex-wrap p-5 text-2xl text-white ${pageData.bgColor}`}>
          <h2 className="relative top-7 text-2xl text-center">{pageData.title}</h2>
          <span className="text-md text-center ">{pageData.select}</span>
          <p><span className={`${pageData.bgColorMsg} p-5 py-3 rounded`}>{pageData.msg}</span></p>
        </div>
      </div>
    </>
  )
}
export default Popup