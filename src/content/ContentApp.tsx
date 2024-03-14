import React from "react";
import { testItem } from "../lib/atom";
import { useAtom } from "jotai";

// let allIMGGL: any = document.querySelectorAll(
//   "img.yt-core-image.yt-core-image--fill-parent-height.yt-core-image--fill-parent-width.yt-core-image--content-mode-scale-aspect-fill.yt-core-image--loaded"
// );

function ContentApp() {
  const [jotai, setJptai] = useAtom(testItem);

  // const [url, setUrl] = React.useState<any>("");
  // const getUrl = async () => {
  //   localStorage.setItem("DTA", "DATABASE");

  //   console.log("ing", imgLink);
  //   console.log(window.location.href);
  // };

  const changeIMG = () => {
    // const Parent: any = document.querySelector("body");
    let allIMG: any = document.querySelectorAll(
      "img.yt-core-image.yt-core-image--fill-parent-height.yt-core-image--fill-parent-width.yt-core-image--content-mode-scale-aspect-fill.yt-core-image--loaded"
    );

    const imgPath: any = localStorage.getItem("IMG_1");

    console.log(imgPath, "imgPath type", typeof imgPath, "json parse");

    for (let i = 0; i < allIMG.length; i++) {
      // const imgLink = localStorage.getItem("IMG");
      // allIMG[i].src = "./assets/concentrate.png";
      // allIMG[i].setAttribute("src", "./assets/concentrate.png");
      // allIMG[i].setAttribute(
      //   "src",
      //   "https://celebmafia.com/wp-content/uploads/2017/11/elizabeth-olsen-deadline-hollywood-presents-the-contenders-2017-in-la-3.jpg"
      // );
      allIMG[i].setAttribute(
        "src",
        imgPath
          ? imgPath
          : "https://celebmafia.com/wp-content/uploads/2017/11/elizabeth-olsen-deadline-hollywood-presents-the-contenders-2017-in-la-3.jpg"
      );
    }
    // Parent.appendChild(allIMG);
  };
  window.addEventListener("scroll", changeIMG);
  // window.addEventListener("loadeddata", changeIMG);
  // window.addEventListener("load", changeIMG);
  // window.addEventListener("loadedmetadata", changeIMG);
  // let imagesLeft = allIMGGL.length;
  // for (const image of allIMGGL) {
  //   image.addEventListener("load", () => {
  //     imagesLeft--;
  //     if (imagesLeft === 0) {
  //       allIMGGL[image].setAttribute(
  //         "src",
  //         "https://celebmafia.com/wp-content/uploads/2017/11/elizabeth-olsen-deadline-hollywood-presents-the-contenders-2017-in-la-3.jpg"
  //       );
  //     }
  //   });
  // }
  window.addEventListener("load", () => {
    setTimeout(() => {
      setJptai(false);
    }, 5000);
  });

  const deleteShorts = () => {
    const shortsBar: any = document.querySelectorAll(
      ".style-scope .ytd-rich-grid-renderer"
    );

    // console.log("working till here");

    for (let i = 0; i < shortsBar.length; i++) {
      const showMore: any = shortsBar[i].querySelectorAll(
        "div.button-container.style-scope.ytd-rich-shelf-renderer"
      );

      // console.log("first for loop", showMore);
      if (showMore) {
        for (let j = 0; j < showMore.length; j++) {
          // console.log("second for loop", showMore[j].parentNode);

          if (showMore[j]) showMore[j].parentNode.remove();
          // else console.log("not working", showMore[j].innerHTML);
        }
      }
    }
  };

  window.addEventListener("scroll", deleteShorts);

  const deleteShorts_WithoutShowmore = () => {
    const shortsBar: any = document.querySelectorAll(
      "ytd-reel-shelf-renderer.style-scope.ytd-item-section-renderer"
    );

    for (let i = 0; i < shortsBar.length; i++) {
      if (shortsBar[i]) shortsBar[i].remove();
    }
  };
  window.addEventListener("scroll", deleteShorts_WithoutShowmore);

  // React.useEffect(() => {
  //   console.log("inside useEffect");
  //   // localStorage.setItem("IMG_1", "");
  //   chrome.runtime.onMessage.addListener(function (
  //     request,
  //     sender,
  //     sendResponse
  //   ) {
  //     console.log("req", request, "sender", sender, "sendRes", sendResponse);
  //   });
  // }, [jotai]);

  React.useEffect(() => {
    console.log(jotai);
  }, [jotai]);

  // React.useEffect(() => {
  //   // alert("inside");
  //   getUrl();
  //   deleteShorts();
  //   // changeIMG();
  // }, []);

  // const scrollNames = () => {
  //   window.addEventListener("scroll", () => {
  //     let name: any = document.querySelectorAll("#video-title-link");
  //     for (let i = 0; i < name.length; i++) {
  //       console.log(name[i].title);
  //     }
  //   });

  //   window.addEventListener("scroll", () => {
  //     let allIMG = document.querySelectorAll(
  //       "img.yt-core-image.yt-core-image--fill-parent-height.yt-core-image--fill-parent-width.yt-core-image--content-mode-scale-aspect-fill.yt-core-image--loaded"
  //     );

  //     for (let i = 0; i < allIMG.length; i++) {
  //       allIMG[i].setAttribute(
  //         "src",
  //         "https://i.pinimg.com/736x/fe/e4/2b/fee42ba38d16a6120496cb0b3ef3bd1d.jpg"
  //       );
  //     }
  //   });
  // };

  // start building your content view here, like any other normal react app
  return (
    <>
      <div className="h-[100vh] w-[100vw] text-center font-bold underline flex items-center justify-center bg-purple-500 absolute">
        {jotai ? " hello from the other saaide" : "hat bc"}
        {/* <input
          type="file"
          // value={img}
          onChange={(e: any) => {
            const reader: any = new FileReader();

            reader.addEventListener("load", () => {
              // console.log(reader.result);
              localStorage.setItem("IMG", reader.result);
            });

            console.log("IMG", e.target.files);
            reader.readAsDataURL(e.target.files[0]);
            // imgfile(e);
          }}
        /> */}
      </div>
    </>
  );
}

export default ContentApp;
