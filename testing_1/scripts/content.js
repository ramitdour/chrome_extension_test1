// (() => {

//     console.log("0hello content.js");

//     // 1. Send a message to the service worker requesting the user's data
//     chrome.runtime.sendMessage('get-user-data', (response) => {
//         // 3. Got an asynchronous response with the data from the service worker
//         console.log('received user data', response);
//         initializeUI(response);
//     });


//     let youtubeLeftControls, youtubePlayer;
//     let currentVideo = "";
//     let currentVideoBookmarks = [];



//     const newVideoLoaded = async () => {

//         console.log("2hello content.js");

//         const ramit = "dour";

//         const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0];

//         currentVideoBookmarks = await fetchBookmarks();

//         if (!bookmarkBtnExists) {
//             const bookmarkBtn = document.createElement("img");

//             bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
//             bookmarkBtn.className = "ytp-button " + "bookmark-btn";
//             bookmarkBtn.title = "Click to bookmark current timestamp";

//             youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
//             youtubePlayer = document.getElementsByClassName('video-stream')[0];

//             youtubeLeftControls.appendChild(bookmarkBtn);
//             bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
//         }
//     };

//     chrome.runtime.onMessage.addListener((obj, sender, response) => {
//         const { type, value, videoId } = obj;

//         console.log("1hello content.js");

//         if (type === "NEW") {
//             currentVideo = videoId;
//             console.log("content.js event listened");
//             newVideoLoaded();
//         }
//         // else if (type === "PLAY") {
//         //   youtubePlayer.currentTime = value;
//         // } else if ( type === "DELETE") {
//         //   currentVideoBookmarks = currentVideoBookmarks.filter((b) => b.time != value);
//         //   chrome.storage.sync.set({ [currentVideo]: JSON.stringify(currentVideoBookmarks) });

//         //   response(currentVideoBookmarks);
//         // }
//     });



// })();


console.log("0hello content.js");

chrome.runtime.onMessage.addListener((obj, sender, response) => {
    console.log("1hello content.js");
    const { type, value, videoId } = obj;

    console.log("1hello content.js");

    if (type === "NEW") {
        currentVideo = videoId;
        console.log("content.js event listened");
        newVideoLoaded();
    }
    // else if (type === "PLAY") {
    //   youtubePlayer.currentTime = value;
    // } else if ( type === "DELETE") {
    //   currentVideoBookmarks = currentVideoBookmarks.filter((b) => b.time != value);
    //   chrome.storage.sync.set({ [currentVideo]: JSON.stringify(currentVideoBookmarks) });

    //   response(currentVideoBookmarks);
    // }
    response({ramit:"dour"});
    // return Promise.resolve({ response: "Hi from content script" });
});