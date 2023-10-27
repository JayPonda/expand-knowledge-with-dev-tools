console.log("hii")

import express from "express"
import {get_all_todos} from './database_opr.js'

const app = express()

// middleware
app.use((request, response, next) => {
    // console.log(request);
    next()
})

// define route for GET request
app.get('/', async (request, response) => {
    const db_response = await get_all_todos()
    // console.log(db_response)
    response.send (`
    <h1>response for GET request...</h1>
    <p>${db_response}</p>
    `);
})

app.listen(
    3000,
    () => console.log('start listening on port 3000.')
)