import { getInteriors, getWheels, getPaints, getTechnologies, getOrders } from "./database.js"

const paints = getPaints()
const interiors = getInteriors()
const wheels = getWheels()
const techs = getTechnologies()

const buildOrderListItem = (order) => {
    const chosenPaint = paints.find( //The find() method returns the first element in the array that satisfies the provided testing function.
        (paint) => {
            return paint.id === order.paintId
        }
    )
    let totalCost = chosenPaint.price

    const chosenInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
     totalCost += chosenInterior.price

    const chosenWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    totalCost += chosenWheel.price

    const chosenTech = techs.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    totalCost += chosenTech.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}