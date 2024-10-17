import { useState, useEffect } from "react";
import "./App.css";
// import React from "react";

function App() {

  const [img,setImg] = useState(false)


  // const [imgLnk, setImgLink] = useState<any>('');



  useEffect(() => {
    const IMG = localStorage.getItem("IMAGE");

    if (IMG) {
      setImg(true);
    }
  }, [img]);

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(sender, sendResponse);

    if (request.greeting) {
      if (request.greeting == "CLEAR") {
        localStorage.removeItem("IMAGE");
        localStorage.removeItem("IMGDATA");

        return setImg(false);
      }
    }

    return sendResponse({ farewell: "Thank you ! Image received !" });
  });

  return (
    <div className="h-[250px] w-[300px] text-center flex-col flex items-center justify-center bg-[#0f0f0f] p-[10px] transition">
      <div className={`h-full w-full ${!img?'bg-[#282828]':'bg-[#D4101D]'} flex-col flex items-start justify-between rounded-[15px] p-[15px]`}>
        <h1 className="text-white font-bold text-[16px]">Youtube Shorts Remover</h1>
        <p className="text-white text-left text-[10px] font-bold">We remove Youtube Shorts by default and change youtube thumbnail based on user's choice if any.</p>
        <h2 className="text-white text-left font-bold">{!img?'Wanna add a custom thumbnail to every the videos in your feed?':'You have a custom thumbnail set currently, Do you want to change or remove it ?'}</h2>
        <button 
         onClick={() =>{
          setImg(!img)
          chrome.tabs.create({ url: "src/optionsPage/optionsPage.html" })
         }
        }
        className={`text-white font-bold text-[10px] rounded-[5px] h-[40px] transition ease-in-out delay-50 duration-300 ${!img?'w-[150px]':'w-[120px]'} ${img?'bg-[#282828] hover:bg-[#444444]':'bg-[#D4101D] hover:bg-[#cc2a35]'}`} >{!img?'ADD CUSTOM THUMBNAIL':'CLICK ME'}</button>
      </div>
    </div>
  );
}

export default App;
