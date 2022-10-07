import { getTechnologies, setTechnology } from "./database.js"

const techs = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
     let html = `<h2>Technologies</h2>`
     html += `<select id="tech">`
     html += `<option value="0">Select a technology package</option>`
     
     const arrayOfTechs = techs.map( (tech) => {
        return `<option value="${tech.id}">${tech.package}</option>`
        }
    )

    html += arrayOfTechs.join("")
    html += "</select>"
    return html
}
    
     
// for (const tech of techs) {
//         html += `<option value="${tech.id}">${tech.package}</option>`
//      }