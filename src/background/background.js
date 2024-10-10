// const getUrl = async () => {
// import ytLoc from './YT_1.png'

chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.tabs.create({
      url: "src/default/FirstLoad.html",
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  
  if (request.greeting) {
    if (request.greeting.data == "No Image") {
        return  chrome.action.setIcon({path:'YT_2_128.png'}, () => {
          if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
          } })
      }

    }
    if (request.greeting.data == "Image") {
      return chrome.action.setIcon({path:'YT_1_128.png'}, () => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
        } })
    }

    return sendResponse({ farewell: "Thank you ! Image received !" });
  }
);

function showAlert() {
  console.log("A new tab was opened!");
}
