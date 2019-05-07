import {
    MODAL_OPENER
} from '../actions/actionTypes'

const INITIAL_STATE = {
    modalIo: false
}

export default (state = INITIAL_STATE, action) => {
    let { modalIo } = state

    switch (action.type) {
        case MODAL_OPENER:
            modalIo = true
            return {
                ...state, modalIo
            }
    
        default:
            return state;
    }
}