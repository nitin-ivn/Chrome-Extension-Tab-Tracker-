let tabData = {};

chrome.tabs.onActivated.addListener((info) => {
    chrome.tabs.get(info.tabId, (tab) => {
        tabData[info.tabId] = {
            url: tab.url,
            title: tab.title,
            openedAt: Date.now(),
            closedAt: null
        };

        console.log(tabData[info.tabId]);
    });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {  
    if (changeInfo.title) {  
      if (tabData[tabId]) {  
        tabData[tabId].title = tab.title;
        tabData[tabId].url = tab.url;  
        console.log(tabData[tabId]);  
      }  
    }  
});

chrome.tabs.onRemoved.addListener((tabId, info) => {
    tabData[tabId].closedAt = Date.now();
})