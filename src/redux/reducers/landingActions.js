import {
    TOGGLE_BURGER,
    TOGGLE_MODAL
} from '../actions/actionTypes'

const INITIAL_STATE = {
    burgerActive: false,
    modalActive: false
}

export default (state = INITIAL_STATE, action) => {
    let { burgerActive, modalActive } = state

    switch (action.type) {
        case TOGGLE_BURGER:
        burgerActive = !burgerActive
            return {
                ...state, burgerActive
            }

        case TOGGLE_MODAL:
        modalActive= !modalActive
            return {
                ...state, modalActive
            }
    
        default:
            return state;
    }
}