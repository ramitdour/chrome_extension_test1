console.log("START background.js");
console.log((new Date()).toString().split("GMT")[0]);

chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

const extensions = 'https://developer.chrome.com/docs/extensions'
const webstore = 'https://developer.chrome.com/docs/webstore'


/*in mainfest.json 
    "action": {
    "default_popup": "popup/popup.html",
    }

    You cannot have a "popup" with an onclick event. 
    Remove the popup.html from the manifest file. 
    And keep the background page, and it will work.
*/
chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
        // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
        const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
        // Next state will always be the opposite
        const nextState = prevState === 'ON' ? 'OFF' : 'ON'

        console.log("changing state");
        console.log((new Date()).toString().split("GMT")[0]);

        // Set the action badge to the next state
        await chrome.action.setBadgeText({
            tabId: tab.id,
            text: nextState,
        });

        console.log(" state changed");
        console.log((new Date()).toString().split("GMT")[0]);

        if (nextState === "ON") {
            // Insert the CSS file when the user turns the extension on
            await chrome.scripting.insertCSS({
                files: ["./focus-mode.css"],
                target: { tabId: tab.id },
            });
        } else if (nextState === "OFF") {
            // Remove the CSS file when the user turns the extension off
            await chrome.scripting.removeCSS({
                files: ["./focus-mode.css"],
                target: { tabId: tab.id },
            });
        }


    }
});


console.log("END background.js");
console.log((new Date()).toString().split("GMT")[0]);