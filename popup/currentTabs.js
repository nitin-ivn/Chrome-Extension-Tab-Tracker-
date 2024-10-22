import { tabData } from "../data/tabData.js";

function formatTime(timestamp){
    const date = new Date(timestamp);  
    let hours = date.getHours();  
    const minutes = String(date.getMinutes()).padStart(2, '0');  
    const seconds = String(date.getSeconds()).padStart(2, '0');  
    const ampm = hours >=12 ? 'pm' : 'am';
    hours = hours %12;  
    hours = hours ? String(hours) : '12';
   
    return `${hours}:${minutes}:${seconds} ${ampm}`;  
} 

export function renderTabs(){
    let tabHTML = ``;
    tabData.forEach((tab) => {
        tabHTML += `
            <div class="contentBox">
                <div class="label">${tab.name}/div>
                <div class="content-desc">
                    <p>
                        <span class="headerAtt">URL: </span><a href="${tab.url}">${tab.url}</a><br>
                        <span class="headerAtt">Opened At:</span> ${formatTime(tab.openedAt)} <br>
                        <span class="headerAtt">Closed At:</span> ${formatTime(tab.closedAt)} <br>
                        <span class="headerAtt">Time Spent:</span> ${tab.timeSpent} <br>
                        <span class="headerAtt">History: </span> ${tab.History}
                    </p>
                </div>
            </div>
        `
    });

    document.querySelector(".accordion").innerHTML = tabHTML;
} 

renderTabs();