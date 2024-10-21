import { useState, useEffect } from "react";
import "./App.css";
// import React from "react";

function App() {

  const [img,setImg] = useState(false)
  // const [tabId, setTabId] = useState<any>([0]);


  // const [imgLnk, setImgLink] = useState<any>('');

  // This is the function that sends image into the youtube tabs to change
  // the thumbnail images
  // const sendImg = async (e: number, empty?: string) => {
  //   let response: any = {};

  //   if (empty) {
  //     response = await chrome.tabs.sendMessage(e, {
  //       greeting: "CLEAR",
  //     });
  //   }
  //   return response;
  // };

  // const get_URL = () => {
  //   return chrome.tabs.query({}, function (tabs) {
  //     const data: any = tabs.filter((val: any) => val.url?.includes("youtube"));

  //     if (data.length > 0) {
  //       setTabId(data);
  //     }
  //     if (data.length === 0) {
  //       setTabId([]);
  //     }
  //   });
  // };

  // setInterval(() => get_URL(), 1200);

  // useEffect(() => {
  //   console.log('changed',img)
  // },[img])


  useEffect(() => {
    const IMG = localStorage.getItem("IMAGE");

    if (IMG) {
      console.log('Im inside this thing',IMG,'also check', img)
      setImg(true);
    }
  }, [img]);

  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log('Got Response', sender, request.greeting);

    if (request.greeting) {
      if (request.greeting == "CLEAR") {
        localStorage.removeItem("IMAGE");
        localStorage.removeItem("IMGDATA");

        setImg(!img);
      }
    }

    return sendResponse({ farewell: "Thank you ! Image received !" });
  });

  return (
    <div className="h-[250px] w-[300px] text-center flex-col flex items-center justify-center bg-[#0f0f0f] p-[10px] transition relative">
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
        {/* {img?<button
          onClick={() => {
            // setImg(!img)
            tabId.map((e: any) => {
              return Array(1, 2, 3).map(() => {
                return sendImg(e.id, "NoImage");
              });
            });

          }}

          className="text-white font-bold text-[10px] rounded-[30px] w-[40px] h-[40px] bg-black absolute bottom-[15px] right-[15px]"        
        >D</button>:''} */}
      </div>
    </div>
  );
}

export default App;
