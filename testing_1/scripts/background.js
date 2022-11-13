
// Example of a simple user data object
const user = {
    username: 'demo-user'
  };
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    if (message === 'get-user-data') {

      console.log("got data bg.js get-user-data , now responsing")  
      sendResponse(user);
    }
  });


chrome.tabs.onUpdated.addListener((tabId, tab) => {

    // console.log("Hello background.js");
    // console.log(tab.url);
    // console.log(tabId);

    // console.log(JSON.stringify(tab));
    // console.log(JSON.stringify(tabId));
    // console.dir(tab);


    if (tab.url && tab.url.includes("youtube.com/watch")) {
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
    
      console.log("TAB-----");

      console.log("Hello background.js if YT");
      console.log(tab.url);
      console.log(tabId);
      console.log(tab.id);

    //   console.log(tab);
    //   console.log(tab.url);
    //   console.log(queryParameters);

    //   console.log(urlParameters);
      
      console.log(urlParameters.get("v"));
    // //   console.table(urlParameters);
    //   console.log("3Hello background.js");

      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v")
      })
      .then((response) => {
        console.log("Message from the content script:");
        console.log(response.response);
      })
      .catch(onError);

    }
  });

  function onError(error) {
    // console.error("`Error: ${error}`");
    // console.error(error);

    console.log("`Error: ${error}`");
    console.log(error);
  }