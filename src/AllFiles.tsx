// App.tsx

import "./App.css";
// import React from "react";

function App() {
  const [imgLnk, setImgLink] = React.useState<any>(false);

  React.useEffect(() => {
    const IMG = localStorage.getItem("IMAGE");

    if (IMG) {
      setImgLink(true);
    }
  }, [imgLnk]);

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

        return setImgLink(false);
      }
    }

    return sendResponse({ farewell: "Thank you ! Image received !" });
  });

  if (imgLnk && localStorage.getItem("IMAGE")) {
    return (
      <>
        <div className="h-[300px] w-[300px] text-center flex-col flex items-center justify-center bg-[#0f0f0f] p-[15px] transition">
          <h2 className=" font-semibold text-white mb-[15px]">
            Wanna change or remove the custom thumbnails?
          </h2>
          <button
            disabled={!imgLnk}
            onClick={() =>
              chrome.tabs.create({ url: "src/optionsPage/optionsPage.html" })
            }
            className="h-[40px] w-[150px] border-[5px] hover:bg-[#FF0000] transition-all border-[#FF0000] rounded-[35px] font-semibold text-white"
          >
            CLICK ME
          </button>
        </div>
      </>
    );
  }


  return (
    <div className="h-[300px] w-[300px] text-center flex-col flex items-center justify-center bg-[#0f0f0f] p-[15px] transition">
      <div className="h-[60%] w-full flex-col flex items-start justify-center">
        <h2 className=" font-semibold text-white mb-[15px] text-left">
          Custom Youtube Stuff
        </h2>
        <h2 className=" font-semibold text-white mb-[15px] text-left">
          We remove Youtube Shorts and change youtube thumbnail based on user's
          choice if any.
        </h2>
        <button
          className={`h-[40px] w-[200px] border-[5px] border-[#00FF75] ${
            imgLnk ? "bg-[#00FF75]" : ""
          } rounded-[35px] font-semibold text-white`}
          onClick={() => setImgLink(!imgLnk)}
        >
          ADD CUSTOM THUMBNAIL
        </button>
      </div>
      <div
        className={`h-[40%] w-full ${
          !imgLnk ? "opacity-[20%]" : ""
        } flex-col flex items-center justify-center pl-[15px] pr-[15px]`}
      >
        <h2 className=" font-semibold text-white mb-[15px]">
          Wanna add a custom thumbnail to every the videos in your feed?
        </h2>
        <button
          disabled={!imgLnk}
          onClick={() =>
            chrome.tabs.create({ url: "src/optionsPage/optionsPage.html" })
          }
          className="h-[40px] w-[150px] border-[5px] border-[#FF0000] rounded-[35px] font-semibold text-white"
        >
          CLICK ME
        </button>
      </div>
    </div>
  );
}

export default App;


// App.tsx


// OptionApp.tsx

import React from "react";
import Youtube from "../assets/Youtube.svg";


function OptionsApp() {
  let a = [1, 2, 3];
  const [id, setId] = React.useState<any>("");
  const [tabId, setTabId] = React.useState<any>([]);
  const [unqtab, setUnTabID] = React.useState<any>([]);
  const [img, setImg] = React.useState({ name: "", size: "" });
  const [subCl, setSubCL] = React.useState(0);
  const [imgLink, setImgLink] = React.useState(false);

  //This function finds all of the youtube tabs and sneds images into them if any.
  const get_URL = () => {
    return chrome.tabs.query({}, function (tabs) {
      // console.log(tabs);
      const data:any = tabs.filter((val:any) => val.url?.includes("youtube"))

      if(data.length > 0){
        setTabId(data)
      }
      if(data.length === 0){
        setTabId([])
      }
    });
  };


  const Message = () => {
    return chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      console.log("Received", request, sender, sendResponse);
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
    setImg({ ...img, name: e?.name, size: exactSize });
  };

  const noYoutubeTabsOpen = () => {
    if(unqtab.length == 0){
      return(
        <>
          <div className="h-[30%] w-full mb-[15px] flex-col flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">No youtube tab is open. Please open a separate youtube tab for the code to work.</h1>
          </div>
        </>
      )
    }
    return (
      <>
        <div className="h-[30%] w-full mb-[15px]">
          <div className="h-full w-full flex-col flex items-center justify-center">
            {conditional_Card()}
            <div className="h-1/2 w-full flex items-center justify-end gap-[10px]">
              <button
                disabled={id.length < 0 && checkImage()? true : false}
                className={`h-[40px] w-[150px] ${
                  id.length > 0 ? "" : "opacity-25"
                } border-[5px] border-[#FF0000] hover:bg-[#FF0000] transition-all rounded-[35px] font-semibold text-white`}
                onClick={() => {
                  setSubCL(0);
                  localStorage.removeItem("IMAGE");
                  localStorage.removeItem("IMGDATA");
                  setId("");
                  chrome.tabs.query({}, async (tabs:any) => { 
                    const response = await chrome.tabs.sendMessage(tabs.id, {
                      greeting: "CLEAR",
                    });
                    return response;
                  })
                  Message();
                  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                    return  chrome.tabs.remove(tabs[0].id?tabs[0].id:0);
                  })
                }}
              >
                RESET
              </button>
              <button
                disabled={localStorage.getItem("IMAGE") && checkImage() ? true : false}
                onClick={() => {
                  setSubCL(subCl + 1);
                  localStorage.setItem("IMAGE", id);
                  unqtab.map((e: any) => {
                    return a.map(() => {
                      return sendImg(e.id);
                    });
                  });
                }}
                className={`h-[40px] w-[150px] ${
                  id.length > 0 ? "" : "opacity-25"
                } border-[5px] border-[#00FF75] rounded-[35px] ${
                  checkImage() ? "hidden" : ""
                } hover:bg-[#00FF75] transition-all font-semibold text-white`}
                // disable
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  const conditional_Card = () => {
    if (id) {
      return (
        <>
          <div className="h-1/2 w-full flex-col flex items-start justify-center">
            <h1 className=" font-semibold text-white">
              YOUR IMAGE :{" "}
              <label className=" font-regular text-white">{img.name}</label>
            </h1>
            <h1 className=" font-semibold text-white">
              IMAGE SIZE :{" "}
              <label className=" font-regular text-white">{img.size}</label>
            </h1>
            {img.size.includes("MB") ? (
              <h1 className=" font-semibold text-red-500">
                Your Image is larger than 1 MB.
              </h1>
            ) : (
              ""
            )}
          </div>
        </>
      );
    }
    return (
      <>
        <div className="h-1/2 w-full flex-col flex items-start justify-center">
          <h2 className=" font-semibold text-white">
            Please use an image whose size is lower than 1 mb
          </h2>
          <button
            onClick={() => setImgLink(!imgLink)}
            className="relative h-[40px] w-[150px] border-[5px] border-[#4994A5] hover:bg-[#4994A5] transition-all rounded-[35px] mt-[15px] font-semibold text-white cursor-pointer"
          >
            <input
              type="file"
              className=" absolute z-10 opacity-0"
              onChange={(e: any) => {
                const reader: any = new FileReader();
                reader.addEventListener("load", () => {
                  setId(reader.result);
                });
                reader.readAsDataURL(e.target.files[0]);
                image_Data(e.target.files[0]);
              }}
            />
            <label className=" font-semibold text-white">CHOOSE IMAGE</label>
          </button>
        </div>
      </>
    );
  };

  const Fun = () => {
    return subCl == 0 ? false : true;
  };

  const sendImg = async (e: number) => {
    console.log(e)
    const response = await chrome.tabs.sendMessage(e, {
      greeting: id,
    });


       chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                      return  chrome.tabs.remove(tabs[0].id?tabs[0].id:0);
                  })

    return response;
  };

  const checkImage = () => {
    if (img.size.includes("MB")) {
      return true;
    }
    if (localStorage.getItem("IMAGE")) {
      return true;
    }
    return false;
  };


  setInterval(() => get_URL(),500)

  React.useEffect(() => {
    const uniqueArray = Array.from(new Set(tabId));
    setUnTabID(uniqueArray)
    },[tabId])

  React.useEffect(() => {
    // console.log(img);
    if (img.name && img.size) {
      localStorage.setItem("IMGDATA", JSON.stringify(img));
    }
  }, [img]);

  React.useEffect(() => {
    Fun();
  }, [subCl]);

  React.useEffect(() => {
    const Img = localStorage.getItem("IMAGE");
    const ImgData: any = localStorage.getItem("IMGDATA");
    const SubIMG = JSON.parse(ImgData);

    if (Img && SubIMG.name && SubIMG.size) {
      setId(Img);
      setImg({ ...img, name: SubIMG.name, size: SubIMG.size });
    }
  }, []);

  return (
    <>
      <div className="h-[100vh] w-[100vw] text-center flex-col flex items-center justify-center bg-[#0f0f0f] p-[20px] transition ease-in-out delay-150">
        {noYoutubeTabsOpen()}
        <div className="h-[70%] w-full border-[5px] border-[#000] bg-black rounded-[25px] mt-[15px] pt-[10px] pl-[15px] pr-[15px] overflow-hidden">
          <div className="h-[10%] w-full flex items-center justify-between ">
            <img src={Youtube} className="h-[20px]" alt="" />
            <div className="h-[30px] w-[400px] rounded-[30px] border-[2px] flex items-center justify-end border-[#303030] overflow-hidden">
              <div className="h-full w-[60px] bg-[#303030]"></div>
            </div>
            <div className="h-[30px] w-[30px] rounded-[25px] bg-[#303030]"></div>
          </div>
          <div className="h-[90%] w-full flex items-center justify-center mt-[40px]">
            <div className="h-full w-[20%]"></div>
            <div className="h-full w-[80%] flex items-center justify-between flex-wrap gap-[15px] overflow-hidden">
              {Array(1, 2, 3, 4, 5, 6).map((idx: number) => {
                return (
                  <>
                    <div
                      key={idx}
                      className={`h-[220px] w-[325px] ${
                        idx == 1 ? "opacity-0" : ""
                      } flex items-center justify-center flex-col gap-[10px] mb-[10px] `}
                    >
                      <div
                        className={`h-[95%] w-full rounded-xl bg-[#303030] overflow-hidden`}
                      >
                        {id ? (
                          <img
                            className="w-full block ml-auto mr-auto"
                            src={id}
                          />
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="h-[5%] w-full rounded-[20px] bg-[#303030]"></div>
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

OptionsApp()

// export default OptionsApp;


// OptionApp.tsx