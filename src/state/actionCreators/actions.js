// import { createStore } from "redux"

// const { createStore } = require('redux')

const increment = (text) => {
    return {
        type: "INCREMENT",
        payload: text
    }
}


const decrement = (text) => {
    return {
        type: "DECREMENT",
        payload: text
    }
}

module.exports ={
    increment,
    decrement
}