// const getUrl = async () => {
chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === "install") {
    chrome.tabs.create({
      url: "src/default/FirstLoad.html",
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(sender, sendResponse);

  if (request.greeting) {
    return SendMessage(request.greeting);
  }

  return sendResponse({ farewell: "Thank you Backend here! Image received !" });
});


//This is the code for dynamic icon change
//be sure to try it out
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.action.setIcon({ path: "icon1.png" });
// });

// chrome.action.onClicked.addListener((tab) => {
//   chrome.action.setIcon({ path: "icon2.png" });
// });



// const get_URL_1 = (e:any) => {
//   return chrome.tabs.query({}, function (tabs) {
//     // console.log(tabs);
//     const data:any = tabs.filter((val:any) => val.url?.includes("youtube"))

//     if(data.length > 0){
//       e(data)
//     }
//     if(data.length === 0){
//       e([])
//     }
//   });
// };

// chrome.tabs.onCreated.addListener(function (tab) {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: showAlert,
//   });
// });
chrome.runtime.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
  if(sender){}
  console.log('activated')
  if (request.greeting) {

    if(request.greeting == "No Image"){
      console.log('Got the No image bitch')
    }
    if(request.greeting == "Image"){
      console.log('Finally got the image bitch')
      chrome.action.setIcon({ path: "/YT_2.png" });
    }
      // chrome.runtime.onInstalled.addListener(() => {
      //     chrome.action.setIcon({ path: "YT_2.png" });
      //   });

    return sendResponse({ farewell: "Thank you ! Image received !" });
  }

})

function showAlert() {
  console.log("A new tab was opened!");
}

showAlert()

// const SendMessage = async (data) => {
//   const res = chrome.tabs.query({}, (tabs) =>
//     tabs.forEach((tab) => chrome.tabs.sendMessage(tab.id, data))
//   );

//   return res;
// };
