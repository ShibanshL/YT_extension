// console.log("woeking");

// const deleteShorts = async () => {
//   const [tab] = await chrome.tabs.query({ active: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id! },
//     func: () => {
//       const shortsBar: any = document.querySelectorAll(
//         ".style-scope .ytd-rich-grid-renderer"
//       );

//       // console.log("working till here");

//       for (let i = 0; i < shortsBar.length; i++) {
//         const showMore: any = shortsBar[i].querySelectorAll(
//           "div.button-container.style-scope.ytd-rich-shelf-renderer"
//         );

//         // console.log("first for loop", showMore);
//         if (showMore) {
//           for (let j = 0; j < showMore.length; j++) {
//             console.log("second for loop", showMore[j].parentNode);

//             if (showMore[j]) showMore[j].parentNode.remove();
//             // else console.log("not working", showMore[j].innerHTML);
//           }
//         }
//       }
//     },
//   });
// };

const getUrl = async () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentURL = tabs[0].url;

    console.log("c_url ", currentURL);
    // if (currentURL?.includes("youtube")) {
    //   deleteShorts();
    // }
  });
};

getUrl();

// alert("FUCK U");
