class TabData{
    tabID
    name
    url
    openedAt
    closedAt
    timeSpent
    History
    // instances = 1;

    constructor(tabID,name,url,openedAt){
        this.tabID =tabID
        this.name = name,
        this.url = url,
        this.openedAt = openedAt
        this.History = name
    }
}

export let tabData = new Map();

export function insertData(tabId,name,url,openedAt){
    //  if(tabData.has(name)){
    //     tabData.get(tabId).instances += 1;
    //  }else{
        tabData.set(tabId, new TabData(tabId, name, url, openedAt));
        console.log(tabData);
    //  } 
}

export function MatchingTab(tabId){
    return tabData.get(tabId);
}

export function UpdateClosingTime(tabId){
    if(tabData.has(tabId)){
        let tab = tabData.get(tabId);
        tab.closedAt = Date.now();
        tab.timeSpent = TimeSpent(tab.openedAt,tab.closedAt);
        console.log("Tab Closed");
     }else{
        console.log("No Tab ID"); 
     } 
}

export function UpdateTab(tabId, title, url){
    if (tabData.has(tabId)) {
        let tab = tabData.get(tabId);  
        tab.name = title;
        tab.url = url;
        tab.History += ` > ${title}`;  
        console.log("Tab Updated"); 
    } 
}

function TimeSpent(start,end){
const difference = end - start;  
 const totalSeconds = Math.floor(difference /1000);  
 const hours = Math.floor(totalSeconds /3600);  
 const minutes = Math.floor((totalSeconds %3600) /60);  
 const seconds = totalSeconds %60;
 return `${hours} hours: ${minutes} minutes:  ${seconds} seconds`;  
}  