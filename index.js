let canvas = document.getElementById("starCanvas")
let ctx = canvas.getContext("2d")



canvas.width = 2300
canvas.height = 2300

let starColors = {
    Yellow : "rgb(255,255,0)",
    Red : "rgb(255,0,0)",
    Blue : "rgb(0,0,127)",
    Neutron : "rgb(0,0,255)",
    BlackHole : "rgb(255,255,255)",
    Orange : "rgb(127,127,0)"
}

async function getCSV(){
    const csv = await fetch("wos database.csv")
    const data = await csv.text()
    const rows = data.split("\n").slice(1)
    var values = []
    rows.forEach(row => {
       const e = row.split(",")
       values.push(e)
    });
    return values
}
async function displayCelestialBodies(){
    let stars = await getCSV()
    let num = 0
    stars.forEach(star => {
        num++
        let x = parseInt(star[0])
        let y = parseInt(star[1])
        if (x<0){
            console.log("yoi")
        }
        ctx.beginPath() // -100, -100 = 100,100  --  100, 100 = 2100, 2100 ctx.arc(250+x*20,250+y*20,10,0,2*Math.PI)
        ctx.fillStyle = starColors[star[2].replace("\r","") || "rgb(0,0,0)"]
        ctx.arc(1000+((x*10+100)),1050+((y*-10+100)),10,0,2*Math.PI)
        ctx.fill()
        ctx.fillStyle = "rgb(200,200,200)"
        ctx.fillText(`${x},${y}`,990+((x*10+100)),1050+((y*-10+100)))
    });
}

displayCelestialBodies()