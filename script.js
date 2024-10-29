function addColor(color){
    let element = document.querySelector(`.${color}`)
    element.classList.add(`js-${color}`)
}

function removeColor(color){
    let element = document.querySelector(`.${color}`)
    element.classList.remove(`js-${color}`)
}

function trafficLightCycle() {
    setTimeout(() => {
        addColor("red");
        removeColor("yellow");
        removeColor("green");
    }, 0);

    setTimeout(() => {
        removeColor("red");
        addColor("yellow");
    }, 1000); 

    setTimeout(() => {
        removeColor("yellow");
        addColor("green");
    }, 2000); 
}
trafficLightCycle();
setInterval(trafficLightCycle, 3000);