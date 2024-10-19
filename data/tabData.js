class TabData{
    tabID
    name
    url
    openedAt
    closedAt
    timeSpent

    instances = 1;

    constructor(tabID,name,url,openedAt){
        this.tabID =tabID
        this.name = name,
        this.url = url,
        this.openedAt = openedAt
    }
}

export let tabData = new Map();

export function insertData(tabId,name,url,openedAt){
     if(tabData.has(tabId)){
        tabData.get(tabId).instances += 1;
     }else{
        tabData.set(tabId, new TabData(tabId, name, url, openedAt)); 
     } 
}

export function MatchingTab(tabId){
    return tabData.get(tabId);
}