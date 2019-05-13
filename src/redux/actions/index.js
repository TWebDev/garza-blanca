import {
    TOGGLE_BURGER,
    TOGGLE_MODAL
} from './actionTypes'

export const toggleBurger = (event) => {
    return {
        type: TOGGLE_BURGER,
        payload: event
    }
}

export const toggleModal = (event) => {
    return {
        type: TOGGLE_MODAL,
        payload: event
    }
}