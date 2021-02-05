const RecibosFinder = {};
// const URL = "https://ywf-backend-express.herokuapp.com/api/v1/restaurants/"
const URL = "http://localhost:4500/api/v1/recibos/"


RecibosFinder.all = async (user_id) => {
     const response = await fetch(URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id })
    })
        return await response.json()
}

RecibosFinder.byId = async (restaurant_id) => {
    const response = await fetch(URL + restaurant_id)
    return await response.json()
}

RecibosFinder.add = async ({name, location, price_range }) => {
    const response = await fetch(URL, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location, price_range })
    })
    return await response.json()
}

RecibosFinder.delete = async (restaurant_id) => {
    const response = await fetch(URL + restaurant_id, {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ })
    })
    return await response.json()
}

RecibosFinder.update = async ({ id, name, location, price_range }) => {
    const response = await fetch(URL + id, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location, price_range })
    })
    return await response.json()
}

RecibosFinder.addReview = async ( restaurant_id, name, review, rating ) => {
    const response = await fetch(URL + restaurant_id + '/review', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, review, rating })
    })
    return await response.json()
}

// ====   COBRO DE LOS RECIBOS ==== /

// cobro de recibos con stripe
RecibosFinder.pagos = async (payments, recibos) => {
    const response = await fetch(URL + "stripe", {
       method: "POST",
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ payments, recibos })
   })
       return await response.json()
}




export default RecibosFinder;