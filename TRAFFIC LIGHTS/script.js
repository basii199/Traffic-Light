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
    }, 2000); 

    setTimeout(() => {
        removeColor("yellow");
        addColor("green");
    }, 4000); 
}
trafficLightCycle();
setInterval(trafficLightCycle, 6000);