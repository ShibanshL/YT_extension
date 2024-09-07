import React from "react";
function ContentApp() {
  const [imgSrc, setImgSrc] = React.useState("");

  const changeIMG_IMGA = () => {
    let allIMG: any = document.querySelectorAll(
      "img.yt-core-image.yt-core-image--fill-parent-height.yt-core-image--fill-parent-width.yt-core-image--content-mode-scale-aspect-fill.yt-core-image--loaded"
    );

    for (let i = 0; i < allIMG.length; i++) {
      // allIMG[i].setAttribute("src", imgPresent());
      allIMG[i].setAttribute("src", imgSrc);
    }
  };

  //As the name suggest, this function finds the showmore button for tabs and then
  //deletes the entire shorts node
  const deleteShorts = () => {
    const shortsBar: any = document.querySelectorAll(
      ".style-scope .ytd-rich-grid-renderer"
    );
    for (let i = 0; i < shortsBar.length; i++) {
      const showMore: any = shortsBar[i].querySelectorAll(
        "div.button-container.style-scope.ytd-rich-shelf-renderer"
      );

      if (showMore) {
        for (let j = 0; j < showMore.length; j++) {
          if (showMore[j]) showMore[j].parentNode.remove();
        }
      }
    }
  };

  setInterval(() => deleteShorts(), 100);


  //This will delete the shorts button that we see below the search bar further restricting access to
  //Youtube search
  const removeShortButton = () => {
    const ShortButton:any = document.querySelector("#chips > yt-chip-cloud-chip-renderer:nth-child(2)")
    if(ShortButton.innerText == "Shorts")  ShortButton.remove();
  }

  setInterval(() => removeShortButton(), 100);

  const removeShortsButton_SideBar_Default = () => {
    const data:any = document.querySelector("ytd-guide-section-renderer.style-scope:nth-child(1) > div:nth-child(2) > ytd-guide-entry-renderer:nth-child(2) > a:nth-child(1) > tp-yt-paper-item:nth-child(1) > yt-icon:nth-child(1) > yt-icon-shape:nth-child(1) > icon-shape:nth-child(1) > div:nth-child(1)")
    
    if(data) return data.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
 
  }

  setInterval(() => removeShortsButton_SideBar_Default(), 100);


  const removeShortsButton_SideBar_Responsive = () => {

    const data:any = document.querySelector("#items > ytd-guide-entry-renderer:nth-child(2)")
    // console.log(JSON.stringify(data))
    if (data && data.innerText == "Shorts"){
      data.remove()
    }

    // const data:any = document.querySelector("ytd-mini-guide-entry-renderer.style-scope:nth-child(2) > a:nth-child(1) > yt-icon:nth-child(1) > yt-icon-shape:nth-child(1) > icon-shape:nth-child(1) > div:nth-child(1)")
    
    // if(data) return data.parentElement.parentElement.parentElement.parentElement.remove()

  }

  setInterval(() => removeShortsButton_SideBar_Responsive(), 100);

  const delete_newShorts = () => {
    const data:any = document.querySelector("#contents > ytd-rich-grid-group")

    if(data) return data.remove()
  }

  setInterval(() => delete_newShorts(), 100);



  //As the name suggest, this function finds and delete shorts tabs without
  //the need to search for the show more button because in many places shorts
  //appear without the show more button.
  const deleteShorts_WithoutShowmore = () => {
    const shortsBar: any = document.querySelectorAll(
      "ytd-reel-shelf-renderer.style-scope.ytd-item-section-renderer"
    );

    for (let i = 0; i < shortsBar.length; i++) {
      if (shortsBar[i]) shortsBar[i].remove();
    }
  };
  // window.addEventListener("scroll", deleteShorts_WithoutShowmore);
  setInterval(() => deleteShorts_WithoutShowmore(), 100);

  React.useEffect(() => {
    const img = localStorage.getItem("IMG_SRC");
    if (img) {
      return setImgSrc(img);
    }
  }, []);

  React.useEffect(() => {
    if (imgSrc) {
      setInterval(() => changeIMG_IMGA(), 100);
    }
  }, [imgSrc]);

  React.useEffect(() => {
    console.log('WELCOME')
  },[])

//   console.log('Checking if working.')

//   chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     // Your code here
//     const data = [tabId, tab]
//     console.log(changeInfo, 'data', data)
// });
  //This here checks if the app has sent any message using the chrome api, this is
  //how we communicate between the pages, this also saves the data in the localstorge
  //if any data is sent.
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(sender, sendResponse);

    if (request.greeting) {
      if (request.greeting == "CLEAR") {
        localStorage.removeItem("IMG_SRC");
        localStorage.removeItem("IMG_SRC");
        localStorage.removeItem("IMG_SRC");

        // if (window.location.host.includes("youtube")) {
          window.location.reload();
        // }
        return setImgSrc("");
      }

      localStorage.setItem("IMG_SRC", request.greeting);
      return setImgSrc(request.greeting);
    }

    return sendResponse({ farewell: "Thank you ! Image received !" });
  });
  return <></>;
}

export default ContentApp;
