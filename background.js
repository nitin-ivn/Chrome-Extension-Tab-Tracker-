import { insertData, UpdateClosingTime, UpdateTab } from "./data/tabData.js";
import { renderTabs } from "./popup/popup.js";  

let tabData = {};

chrome.tabs.onActivated.addListener((info) => {
    chrome.tabs.get(info.tabId, (tab) => {
        tabData[info.tabId] = {
            url: tab.url,
            title: tab.title,
            openedAt: Date.now(),
            closedAt: null
        };

        insertData(info.tabId,tab.title,tab.url,Date.now());
        chrome.runtime.sendMessage({ action: "renderTabs"});
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {  
    if (changeInfo.title) {  
        UpdateTab(tabId,tab.title,tab.url);
    }  
});

chrome.tabs.onRemoved.addListener((tabId, info) => {
    if(tabData[tabId]){
        UpdateClosingTime(tabId);
        console.log(tabId + "closed");
    }
});


// chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {  
//     chrome.runtime.sendMessage({ action: "renderTabs"});  
// });