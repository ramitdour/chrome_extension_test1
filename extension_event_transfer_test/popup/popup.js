console.log("START popup.js");
console.log((new Date()).toString().split("GMT")[0]);


let counter_popup_real = 0;
let counter_popup_of_background = 0;
let counter_popup_of_content = 0;
let counter_popup_of_database = 0;

function increaseValue_popup() {
    console.log("increaseValue_popup");
    var value = parseInt(document.getElementById('number_popup').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number_popup').value = value;
}

function decreaseValue_popup() {
    console.log("decreaseValue_popup");
    var value = parseInt(document.getElementById('number_popup').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number_popup').value = value;
}


function increaseValue_content() {
    console.log("increaseValue_content");
    var value = parseInt(document.getElementById('number_content').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number_content').value = value;
}

function decreaseValue_content() {
    console.log("decreaseValue_content");
    var value = parseInt(document.getElementById('number_content').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number_content').value = value;
}

function increaseValue_background() {
    console.log("increaseValue_background");
    var value = parseInt(document.getElementById('number_background').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number_background').value = value;
}

function decreaseValue_background() {
    console.log("decreaseValue_background");
    var value = parseInt(document.getElementById('number_background').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number_background').value = value;
}


// var el = document.getElementById("button_text_p2b");
// if(el){
//     el.addEventListener("click", send_text_p2b);
// }

window.onload = function () {
    var el = document.getElementById("button_text_p2b");
    if (el) {
        el.addEventListener("click", send_text_p2b);
    }

    document.getElementById("this_tab_info").addEventListener("click", this_tab_info);;
}

function send_text_p2b() {
    console.log("send_text_p2b() called from popup.js");

    var tosendMsg = document.getElementById('input_text_p2b').value;
    if (tosendMsg == "") {
        tosendMsg = "NaN"
    }
    console.log(tosendMsg);

    chrome.runtime.sendMessage({ msg: tosendMsg }, function (response) {
        console.log(response); // {reply: 'reply from bg Mon Nov 14 2022 03:23:24 '}
        console.log(response.reply); //
    });

    // { id: 'jcdlgofdodghbbbdgijdepgppnaknahm', 
    // url: 'chrome-extension://jcdlgofdodghbbbdgijdepgppnaknahm/popup/popup.html', 
    // origin: 'chrome-extension://jcdlgofdodghbbbdgijdepgppnaknahm' }

}

/*https://developer.chrome.com/docs/extensions/reference/tabs/#get-the-current-tab*/
function this_tab_info() {
    console.log("this_tab_info()");
    

    var query = { active: true, currentWindow: true };

    function callback(tabs) {
        console.log(tabs);
        var currentTab = tabs[0]; // there will be only one in this array
        console.log(currentTab); // also has properties like currentTab.id : below details
        
        /*{
            "active": true,
            "audible": false,
            "autoDiscardable": false,
            "discarded": false,
            "favIconUrl": "",
            "groupId": -1,
            "height": 948,
            "highlighted": true,
            "id": 423242416,
            "incognito": false,
            "index": 20,
            "mutedInfo": {
                "muted": false
            },
            "pinned": false,
            "selected": true,
            "status": "complete",
            "title": "Extensions",
            "url": "chrome://extensions/",
            "width": 1848,
            "windowId": 423242138
        }*/
        
    }

    chrome.tabs.query(query, callback);

}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender);
        console.log(request);

        if (String(request.greeting).startsWith("hello")) {
            sendResponse({ reply: "PASS 2" })
        } else {
            sendResponse({ reply: "ERROR 2" })
        }
    }
);


console.log("END popup.js");
console.log((new Date()).toString().split("GMT")[0]);