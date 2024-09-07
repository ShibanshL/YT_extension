// const getUrl = async () => {
  chrome.runtime.onInstalled.addListener(({ reason }) => {
    if (reason === "install") {
      chrome.tabs.create({
        url: "src/default/FirstLoad.html",
      });
    }
  });


  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log(sender, sendResponse);

    if (request.greeting) {
      return SendMessage(request.greeting);
    }

    return sendResponse({ farewell: "Thank you Backend here! Image received !" });
  });


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

// chrome.tabs.onCreated.addListener(function(tab) {
//   chrome.scripting.executeScript({
//     target: {tabId: tab.id?tab.id:0},
//     function: () => console.log(';created')
//   });
// });

function showAlert() {
  alert("A new tab was opened!");
}

const SendMessage = async (data: any) => {

  const res = chrome.tabs.query({}, (tabs: any) =>
    tabs.forEach((tab: any) => chrome.tabs.sendMessage(tab.id, data))
  );

  return res;
};
