const goal = 25;
let entries = [];
const entriesWrapper = document.querySelector('#entries');
document.querySelector("#target").innerHTML = goal;

function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li')
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue);

    entriesWrapper.appendChild(listItem);
}

function reducer(total, currentValue){
    return total + currentValue;
}

function calcAverage(){
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average').innerHTML = average;
}

function colTotal(){
    const totalValue =  entries.reduce(reducer);
    document.getElementById('total').innerHTML = totalValue;
    document.getElementById('progressTotal').innerHTML = totalValue;
}

function weeklyHigh(){
    const high = Math.max(...entries);
    document.getElementById('high').innerHTML = high;
}

function calcGoal(){
    const totalValue =  entries.reduce(reducer).toFixed(1);
    const completedPercent = totalValue / (goal /  100);
    const progressCircle = document.querySelector('#progressCircle');
    if(completedPercent > 100) completedPercent == 100;
    progressCircle.style.background = `conic-gradient(#70db70 ${completedPercent}%, #2b3740 ${completedPercent}% 100%`;
}

function handleSubmit(event){
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    console.log(entry);
    if(!entry) return;
    document.querySelector('form').reset();
    entries.push(entry);
    addNewEntry(entry);
    colTotal();
    calcAverage();
    weeklyHigh();
    calcGoal();
}

const form = document
    .querySelector('form')
    .addEventListener("submit" , handleSubmit);