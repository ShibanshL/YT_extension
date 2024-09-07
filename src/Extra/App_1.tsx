import "./App.css";
import React from "react";

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
            // onClick={() =>
            //   chrome.tabs.create({
            //     url: "src/default_webpage/DefaultWebPage.html",
            //   })
            // }
            className="h-[40px] w-[150px] border-[5px] hover:bg-[#FF0000] transition-all border-[#FF0000] rounded-[35px] font-semibold text-white"
          >
            CLICK ME
          </button>
        </div>
      </>
    );
  }

  // chrome.runtime.onMessage.addListener(function (message) {
  //   // Handle the received message
  //   localStorage.setItem("save", message);
  // });

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
          // onClick={() => {
          //   setImgLink("");
          //   (async () => {
          //     const [tab]: any = await chrome.tabs.query({
          //       active: true,
          //       lastFocusedWindow: true,
          //     });
          //     const response = await chrome.tabs.sendMessage(tab.id, {
          //       greeting: "CLEAR",
          //     });
          //     // do something with response here, not outside the function
          //     // console.log(response);
          //     return response;
          //   })();
          // }}
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
          // onClick={() =>
          //   chrome.tabs.create({
          //     url: "/src/default_webpage/DefaultWebPage.html",
          //   })
          // }
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

// let little =() => {
//   <div className="h-[300px] w-[300px] text-center flex-col flex items-center justify-center bg-pink-400">
//   <input
//     type="file"
//     onChange={(e: any) => {
//       const reader: any = new FileReader();
//       reader.addEventListener("load", () => {
//         setImgLink(reader.result);
//       });
//       reader.readAsDataURL(e.target.files[0]);
//     }}
//   />
//   <button
//     className="h-[40px] w-[120px] bg-yellow-100"
//     onClick={() => {
//       (async () => {
//         const [tab]: any = await chrome.tabs.query({
//           active: true,
//           lastFocusedWindow: true,
//         });
//         const response = await chrome.tabs.sendMessage(tab.id, {
//           greeting: imgLnk,
//         });
//         return response;
//       })();
//     }}
//   >
//     SUB IMG
//   </button>
//   <button
//     className="h-[40px] w-[120px] bg-yellow-300"
//     onClick={() => {
//       setImgLink("");
//       (async () => {
//         const [tab]: any = await chrome.tabs.query({
//           active: true,
//           lastFocusedWindow: true,
//         });
//         const response = await chrome.tabs.sendMessage(tab.id, {
//           greeting: "CLEAR",
//         });
//         // do something with response here, not outside the function
//         // console.log(response);
//         return response;
//       })();
//     }}
//   >
//     Clear
//   </button>

//   <a
//     onClick={() =>
//       chrome.tabs.create({ url: "src/optionsPage/optionsPage.html" })
//     }
//   >
//     OP
//   </a>

//   <button
//     onClick={async () => {
//       const [tab]: any = await chrome.tabs.query({
//         active: true,
//         lastFocusedWindow: true,
//       });
//       const response = await chrome.tabs.sendMessage(tab.id, {
//         greeting: "STOP IT ALL",
//       });
//       // do something with response here, not outside the function
//       // console.log(response);
//       return response;
//     }}
//   >
//     Check
//   </button>
// </div>
// }
