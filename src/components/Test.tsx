export const Test = (e: string) => {
  return e ? console.log("something") : console.log("NOTHING");
};

// import React from "react";
// function ContentApp() {
//   const [imgSrc, setImgSrc] = React.useState("");
//   //This funciton ensure that your image persists even if you switch off and on the lapop
//   //by checking if the image exist in the localstorage
//   const imgPresent = () => {
//     if (imgSrc) {
//       if (imgSrc == "CLEAR") {
//         localStorage.removeItem("IMG_SRC");
//         return "https://wallpapercave.com/wp/wp9073459.jpg";
//       } else return imgSrc;
//       // if (imgSrc == "STOP IT ALL") {
//       //   window.removeEventListener("scroll", () => changeIMG());
//       //   window.removeEventListener("click", () =>
//       //     setTimeout(() => changeIMG(), 500)
//       //   );
//       //   window.removeEventListener("load", () => changeIMG());
//       //   window.location.reload();
//       // }
//     }

//     return "https://wallpapercave.com/wp/wp9073459.jpg";
//   };

//   //This function finds all of the image node and update it by changing the img tags
//   //src to the desired image
//   const changeIMG = () => {
//     let allIMG: any = document.querySelectorAll(
//       "img.yt-core-image.yt-core-image--fill-parent-height.yt-core-image--fill-parent-width.yt-core-image--content-mode-scale-aspect-fill.yt-core-image--loaded"
//     );

//     for (let i = 0; i < allIMG.length; i++) {
//       allIMG[i].setAttribute("src", imgPresent());
//     }
//   };
//   window.addEventListener("scroll", () => changeIMG());
//   window.addEventListener("click", () => setTimeout(() => changeIMG(), 500));
//   window.addEventListener("load", () => changeIMG());
//   // changeIMG();

//   //As the name suggest, this function finds the showmore button for tabs and then
//   //deletes the entire shorts node
//   const deleteShorts = () => {
//     const shortsBar: any = document.querySelectorAll(
//       ".style-scope .ytd-rich-grid-renderer"
//     );
//     for (let i = 0; i < shortsBar.length; i++) {
//       const showMore: any = shortsBar[i].querySelectorAll(
//         "div.button-container.style-scope.ytd-rich-shelf-renderer"
//       );

//       if (showMore) {
//         for (let j = 0; j < showMore.length; j++) {
//           if (showMore[j]) showMore[j].parentNode.remove();
//         }
//       }
//     }
//   };

//   window.addEventListener("scroll", deleteShorts);
//   deleteShorts();

//   //As the name suggest, this function finds and delete shorts tabs without
//   //the need to search for the show more button because in many places shorts
//   //appear without the show more button.
//   const deleteShorts_WithoutShowmore = () => {
//     const shortsBar: any = document.querySelectorAll(
//       "ytd-reel-shelf-renderer.style-scope.ytd-item-section-renderer"
//     );

//     for (let i = 0; i < shortsBar.length; i++) {
//       if (shortsBar[i]) shortsBar[i].remove();
//     }
//   };
//   window.addEventListener("scroll", deleteShorts_WithoutShowmore);
//   deleteShorts_WithoutShowmore();

//   React.useEffect(() => {
//     const img = localStorage.getItem("IMG_SRC");
//     if (img) {
//       return setImgSrc(img);
//     }
//   }, []);

//   //This here checks if the app has sent any message using the chrome api, this is
//   //how we communicate between the pages, this also saves the data in the localstorge
//   //if any data is sent.
//   chrome.runtime.onMessage.addListener(function (
//     request,
//     sender,
//     sendResponse
//   ) {
//     console.log(sender, sendResponse);

//     if (request.greeting) {
//       // if (request.greeting == "STOP IT ALL") {
//       //   window.removeEventListener("scroll", () => changeIMG());
//       //   window.removeEventListener("click", () =>
//       //     setTimeout(() => changeIMG(), 500)
//       //   );
//       //   window.removeEventListener("load", () => changeIMG());
//       //   window.location.reload();
//       // }

//       localStorage.setItem("IMG_SRC", request.greeting);
//       return setImgSrc(request.greeting);
//     }

//     return sendResponse({ farewell: "Thank you ! Image received !" });
//   });
//   return (
//     <>
//       {/* <div className="h-[300px] w-[300px] text-center flex-col flex items-center justify-center bg-pink-400">
//         <input
//           type="text"
//           name=""
//           onChange={(e: any) => console.log(e.target.value)}
//           className="w-[80%] h-[20px]"
//         />
//       </div> */}
//     </>
//   );
// }

// export default ContentApp;

// function getThumbnails() {
//   const thumbnailQuery =
//     "ytd-thumbnail:not(.ytd-video-preview, .ytd-rich-grid-slim-media) a > yt-image > img.yt-core-image:only-child:not(.yt-core-attributed-string__image-element),.ytp-videowall-still-image:not([style*='extension:'])";

//   const thumbnail = document.querySelectorAll(thumbnailQuery);

//   thumbnail.forEach((image) => {
//     let counter = Math.random() > 0.001 ? 1 : 20;
//     let i = 0;
//     for (i = 0; i < counter; i++) {
//       image.setAttribute("src", "https://wallpapercave.com/wp/wp9073459.jpg");
//       // const index = getRandomImage();
//       // let flip = getImageState();
//       // let url = getImageURL(index);
//       // applyThumbnails(image, url, flip);
//     }
//   });
// }
