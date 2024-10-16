"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabData = void 0;
exports.insertData = insertData;
exports.MatchingTab = MatchingTab;
var TabData = /** @class */ (function () {
    function TabData(tabID, name, url, openedAt) {
        this.tabID = tabID;
        this.name = name;
        this.url = url;
        this.openedAt = openedAt;
        this.instances = 1;
    }
    return TabData;
}());
exports.tabData = new Map();
function insertData(tabId, name, url, openedAt) {
    if (exports.tabData.has(tabId)) {
        exports.tabData.get(tabId).instances += 1;
    }
    else {
        exports.tabData.set(tabId, new TabData(tabId, name, url, openedAt));
    }
}
function MatchingTab(tabId) {
    return exports.tabData.get(tabId);
}
