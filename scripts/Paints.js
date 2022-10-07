import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

export const Paints = () => {
    let html = `<h2>Paints</h2>`

    html += `<select id="paint">`
    html += `<option value="0">Select paint color</option>`

    const arrayOfPaints = paints.map(paint => {
        return `<option value ="${paint.id}">${paint.color}</option>`
        }
    )

    html += arrayOfPaints.join("")
    html += "</select>"
    return html
}