class TabData{
    closedAt: Date
    timeSpent
    
    instances: number = 1;

    constructor(
        public tabID,
        public name: string,
        public url: string,
        public openedAt: Date,
    ){}
}

export let tabData = new Map<number, TabData>();

export function insertData(tabId,name: string,url: string,openedAt): void{
     if(tabData.has(tabId)){
        tabData.get(tabId)!.instances += 1;
     }else{
        tabData.set(tabId, new TabData(tabId, name, url, openedAt)); 
     } 
}

export function MatchingTab(tabId): TabData | undefined{
    return tabData.get(tabId);
}
