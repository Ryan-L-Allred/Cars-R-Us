const database = {
    paints: [
        { id: 1, color: "Silver", price: 16.75 },
        { id: 2, color: "Midnight Blue", price: 37.25 },
        { id: 3, color: "Firebrick Red", price: 3.57 },
        { id: 4, color: "Spring Green", price: 2763.01 }
    ],
    interiors: [
        { id: 1, material: "Beige Fabric", price: 5589.11 },
        { id: 2, material: "Charcoal Fabric", price: 20 },
        { id: 3, material: "White Leather", price: 200 },
        { id: 4, material: "Black Leather", price: 3291.30 }
    ],
    technologies: [
        { id: 1, package: "Basic Package", price: 9246.20 },
        { id: 2, package: "Navigation Package", price: 2000.49 },
        { id: 3, package: "Visibility Package", price: 13682.77 },
        { id: 4, package: "Ultra Package", price: 27 }
    ],
    wheels: [
        { id: 1, type: "17-inch Pair Radial", price: 53.75 },
        { id: 2, type: "17-inch Pair Radial Black", price: 54.75 },
        { id: 3, type: "18-inch Pair Spoke Silver", price: 55.75 },
        { id: 4, type: "18-inch Pair Spoke Black", price: 4.37 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            techId: 1,
            wheelId: 1,
            timestamp: 6619862841335
        }
    ],
    orderBuilder: {},
}

export const getPaints = () => {
    return database.paints.map(paint => ({ ...paint }))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({ ...technology }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = { ...database.orderBuilder }

    const lastIndex = database.customOrders.length - 1

    newOrder.id = database.customOrders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}





