import { getWheels, setWheel } from "./database.js" 

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<h2>Wheels</h2>"

    html += `<select id="wheel">`
    html += `<option value="0">Select type of wheel</option>`

    const arrayOfWheels = wheels.map( (wheel) => {
        return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    html += arrayOfWheels.join("")
    html += "</select>"
    return html
}