import {
    TOGGLE_BURGER
} from './actionTypes'

export const toggleBurger = (event) => {
    return {
        type: TOGGLE_BURGER,
        payload: event
    }
}