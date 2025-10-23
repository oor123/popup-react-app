import React, {useState, useEffect} from 'react';
import Popup from './Popup'

const Home = () => {
  const [popup, setPopup] = useState(false)
  const [data, setData] = useState([])
  const [popupTrigger, setPopupTrigger] = useState(0);
  const [call, setCall] = useState(false)
  
  const handlePopupClose = () => {
    setCall(false);
  };
  
  const greenPopup = (v) => {
    let writeData = ["Aapne Sahi Button Par Click Kiya. Very Good Boy/Garl!","bg-green-500","bg-green-800","Thank You So Much! Aab Abhi Age Jane Ke Liye Ready Ho.","Wellcome",true]
    setData(writeData)
    setPopupTrigger(prev => prev + 1);
    setCall(true)
  }
  const redpopup = (v) => {
    let writeData = ["Aapne Galat Button Par Click Kiya. Try Agin Leter!","bg-rose-500","bg-rose-800","Apne Chesta Kiya Tha Par Sahi Button Par Click Nahi Kar Paya. Good Job.","Try Agin!",true]
    setData(writeData)
    setPopupTrigger(prev => prev + 1);
    setCall(true)
  }
  
  return (
    <>
      <div className="w-full h-screen bg-[#130041] grid place-items-center text-white" > 
      
        <div className="size-82 border border-green-500 grid place-items-center grid-cols-2 text-2xl text-white">
          <button className="relative top-0 bg-rose-500 border rounded-md border-rose-300 p-3 py-1 hover:bg-rose-800 transition-all duration-300 hover:-top-[10px] shadow-lg hover:shadow-rose-500/20" onClick={() => greenPopup(true)}>Agree</button>
          <button className="relative top-0 bg-cyan-500 border rounded-md border-cyan-300 p-3 py-1 hover:bg-cyan-800 transition-all duration-300 hover:-top-[10px] shadow-lg hover:shadow-cyan-500/20" onClick={() => redpopup(true)}>disagree</button>
        </div>
        
      {popupTrigger > 0 && <Popup name={data} call={call} onClose={handlePopupClose} /> }
      </div>
    </>
  )
}

export default Home