import "./App.css";
import React from "react";
// import ContentApp from "./content/ContentApp";
import { testItem } from "./lib/atom";
import { useAtom } from "jotai";

function App() {
  const [jotai, setJptai] = useAtom(testItem);
  const [setUrl] = React.useState<any>("");
  const [imgLink, setImgLink] = React.useState<any>(null);
  // const [img, imgfile] = React.useState<any>(null);
  const getUrl = async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      console.log("app", tabs);
      const currentURL = tabs[0].url;
      setUrl(currentURL);
    });
  };

  React.useEffect(() => {
    getUrl();
    // console.log(jotai);
  }, []);

  // React.useEffect(() => {
  //   if (JSON.stringify(imgLink).length > 0) {
  //     <ContentApp imgLink={imgLink} />;
  //   }
  // }, [imgLink]);
  // start bilding your popup app here
  return (
    <h1 className="h-[300px] w-[300px] text-center font-bold underline flex items-center justify-center">
      <input
        type="file"
        // value={img}
        onChange={(e: any) => {
          const reader: any = new FileReader();

          reader.addEventListener("load", () => {
            // console.log(reader.result);
            localStorage.setItem("IMG_123", reader.result);
            setImgLink(localStorage.getItem("IMG"));
            // setJptai(true);
          });

          console.log("IMG", e.target.files);
          reader.readAsDataURL(e.target.files[0]);
          // imgfile(e);
        }}
      />
      {imgLink ? <img src={imgLink} className="h-[40px] w-[90px]" /> : ""}

      <button
        onClick={() => {
          setJptai(!jotai);
          // chrome.runtime.sendMessage({
          //   message: "popup_to_background",
          //   data: { name: "Naruto" },
          // });

          console.log("jotai", jotai);
        }}
      >
        TEST
      </button>
      {/* <ContentApp imgLink={localStorage.getItem("IMG")} /> */}
    </h1>
  );
}

export default App;
