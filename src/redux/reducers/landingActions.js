import {
    TOGGLE_BURGER
} from '../actions/actionTypes'

const INITIAL_STATE = {
    burgerActive: false
}

export default (state = INITIAL_STATE, action) => {
    let { burgerActive } = state

    switch (action.type) {
        case TOGGLE_BURGER:
        burgerActive = !burgerActive
            return {
                ...state, burgerActive
            }
    
        default:
            return state;
    }
}