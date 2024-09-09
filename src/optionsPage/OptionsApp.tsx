// import React from "react";
import { useState } from "react";
import Youtube from "../assets/Youtube.svg";

const noImage = {
  name: "",
  memory: "",
};

function OptionsApp() {
  const [image, setImage] = useState<any>("");
  const [imageData, setImageData] = useState({
    name: "",
    memory: "",
  });
  const [tabId, setTabId] = useState<any>([0]);

  const dynamic_Image_Cards = () => {
    if (image) {
      return (
        <>
          <h1 className="text-white text-left text-[18px] font-bold">
            Do you wanna save or reset ?
          </h1>
          <div className="w-full h-[60%] flex items-end justify-end flex-col gap-[10px]">
            <button
              className="text-white font-bold text-[10px] rounded-[10px] h-[40px] w-[100px] bg-[#D4101D]"
              onClick={() => {
                setImage("");
                setImageData(noImage);
              }}
            >
              RESET
            </button>
            <button className="text-white font-bold text-[10px] rounded-[10px] h-[40px] w-[100px] bg-[#00A74D]">
              SAVE
            </button>
          </div>
        </>
      );
    }
    if (tabId.length == 0) {
      return (
        <>
          <h1 className="text-red-600 text-left text-[18px] font-bold">
            Please open a youtube tab for the code to work !
          </h1>
        </>
      );
    }
    return (
      <>
        <h1 className="text-white text-left text-[18px] font-bold">
          Please Select a picture.
        </h1>
        <button className="text-white font-bold text-[15px] rounded-[10px] h-[40px] w-full mt-[-15px] bg-[#00A74D] relative">
          <input
            type="file"
            className="w-full h-full absolute top-0 left-0 z-10 opacity-0 cursor-pointer "
            onChange={(e: any) => {
              const reader: any = new FileReader();
              reader.addEventListener("load", () => {
                setImage(reader.result);
              });
              reader.readAsDataURL(e.target.files[0]);
              image_Data(e.target.files[0]);
            }}
          />
          <label className=" font-semibold text-[15px] text-white">
            CHOOSE IMAGE
          </label>
        </button>
      </>
    );
  };

  const get_URL = () => {
    return chrome.tabs.query({}, function (tabs) {
      // console.log(tabs);
      const data: any = tabs.filter((val: any) => val.url?.includes("youtube"));

      if (data.length > 0) {
        setTabId(data);
      }
      if (data.length === 0) {
        setTabId([]);
      }
    });
  };

  const image_Data = (e: any) => {
    var _size = e?.size;
    var fSExt = new Array("Bytes", "KB", "MB", "GB"),
      i = 0;
    while (_size > 900) {
      _size /= 1024;
      i++;
    }
    var exactSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
    if (exactSize.includes("MB")) console.log("Oh no B");
    setImageData({ ...imageData, name: e?.name, memory: exactSize });
  };

  setInterval(() => get_URL(), 1000);

  // chrome.tabs.onCreated.addListener(function (tab) {
  //   chrome.scripting.executeScript({
  //     target: { tabId: tab.id },
  //     function: showAlert,
  //   });
  // });

  // function showAlert() {
  //   alert("A new tab was opened!");
  // }

  // useEffect(() => {
  //   setImage('')
  // },[])

  return (
    <>
      <div className="h-[100vh] w-[100vw] p-[15px] bg-[#0f0f0f] flex items-center justify-center gap-4">
        <div className="h-full w-[20%] flex items-center justify-center flex-col rounded-[10px] gap-4">
          <div className="h-[60%] w-full rounded-[15px] flex items-start justify-between gap-[10px] flex-col bg-[#282828] pt-[40px] pb-[50px] pl-[15px] pr-[15px]">
            <h1 className="text-white font-bold text-[30px]">PREVIEW</h1>
            <h2 className="text-white font-bold text-[15px]">
              YOUR IMAGE :<br></br>
              <span className="font-light text-[18px]">
                {imageData.name ? imageData.name : "~"}
              </span>
            </h2>
            <h2 className="text-white font-bold text-[15px]">
              IMAGE SIZE :<br></br>
              <span className="font-light text-[18px]">
                {imageData.memory ? imageData.memory : "~"}
              </span>
            </h2>
            <h1 className="text-white font-bold">
              Please provide an image with size lower than 1 MB
            </h1>
          </div>
          <div
            className={`h-[40%] w-full rounded-[15px] flex items-start justify-${
              !image ? "between" : "between"
            } flex-col bg-[#282828] p-[15px] `}
          >
            {dynamic_Image_Cards()}
            {/* <h1 className="text-white text-left text-[18px] font-bold">Do you wanna save or reset ?</h1>
            <div className="w-full h-[60%] flex items-end justify-end flex-col gap-[10px]">
              <button className="text-white font-bold text-[10px] rounded-[10px] h-[40px] w-[100px] bg-[#D4101D]">RESET</button>
              <button className="text-white font-bold text-[10px] rounded-[10px] h-[40px] w-[100px] bg-[#00A74D]">SAVE</button>
            </div> */}
          </div>
        </div>
        <div className="h-full w-[80%] rounded-[15px] border-[10px] flex items-center justify-center flex-col border-[#282828]">
          <div className="h-[15%] w-full p-[15px] flex items-center justify-between">
            <img src={Youtube} className="h-[20px]" alt="" />
            <div className="h-[30px] w-[400px] rounded-[30px] border-[2px] flex items-center justify-end border-[#303030] overflow-hidden">
              <div className="h-full w-[60px] bg-[#303030]"></div>
            </div>
            <div className="h-[30px] w-[30px] bg-[#303030] rounded-[50%]"></div>
          </div>
          <div className="h-[85%] w-full flex items-center justify-center p-[15px]">
            <div className="h-full w-[20%]"></div>
            <div className="h-full w-[80%] flex items-center justify-end gap-3 max-h-full overflow-x-hidden flex-wrap">
              {Array(1, 2, 3, 4, 5, 6, 7, 8, 9).map((idx: number) => {
                return (
                  <>
                    <div
                      key={idx}
                      className={`flex items-center justify-center flex-col gap-3 h-[140px] w-[220px] ${
                        idx == 6 ? "opacity-0" : ""
                      }`}
                    >
                      <div
                        className="h-[85%] w-full bg-[#D9D9D9] rounded-[10px] bg-cover bg-center overflow-hidden"
                        style={{ backgroundImage: `url(${image})` }}
                      >
                        {/* {image && (
                          <>
                            <img 
                              className="w-full  block ml-auto mr-auto"
                              src={image}
                            />
                          </>
                        )} */}
                      </div>
                      <div className="h-[15%] w-full flex items-center justify-center gap-[5px]">
                        <div className="h-full w-[10%] bg-[#303030] rounded-[25px]"></div>
                        <div className="h-full w-[90%] bg-[#303030] rounded-[25px]"></div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OptionsApp;

// let testFile = () => {
//   return (
//     <>
//     <div className="h-[100vh] w-[100vw] text-center flex-col flex items-center justify-center bg-pink-400">
//       <input
//         type="file"
//         onChange={(e: any) => {
//           const reader: any = new FileReader();
//           reader.addEventListener("load", () => {
//             setImgLink(reader.result);
//           });
//           reader.readAsDataURL(e.target.files[0]);
//         }}
//       />
//       <button
//         onClick={() => {
//           id.map((e: number) => {
//             return (async () => {
//               const response = await chrome.tabs.sendMessage(e, {
//                 greeting: imgLink,
//               });
//               return response;
//             })();
//           });
//         }}
//       >
//         {" "}
//         SUB{" "}
//       </button>
//     </div>
//     </>
//   )
// }
