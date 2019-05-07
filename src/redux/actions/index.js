import {
    MODAL_OPENER
} from './actionTypes'

export const modalOpener = (event) => {
    return {
        type: MODAL_OPENER,
        payload: event
    }
}