var counter = 0

function WaterGarden(){
    let localcounter = document.getElementById("TimeSinceLastPush")
    localcounter.innerHTML = counter
    counter = counter + 1
}