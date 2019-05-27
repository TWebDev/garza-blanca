import {
    TOGGLE_BURGER,
    TOGGLE_MODAL,
    UPDATE_FORM_NAME,
    UPDATE_FORM_LAST,
    UPDATE_FORM_PHONE,
    UPDATE_FORM_EMAIL,
    HANDLE_OPTION_CHANGE,
    TOGGLE_THANK_YOU,
    TOGGLE_NUMBER,
    TOGGLE_MOBILE_FORM,
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

export const toggleThankYou = (event) => {
    return {
        type: TOGGLE_THANK_YOU,
        payload: event
    }
}

export const toggleNumber = (event) => {
    return {
        type: TOGGLE_NUMBER,
        payload: event
    }
}

export const toggleMobileForm = (event) => {
    return {
        type: TOGGLE_MOBILE_FORM,
        payload: event
    }
}

export const updateFormName = (event) => {
    return {
        type: UPDATE_FORM_NAME,
        payload: event
    }
}
export const updateFormLast = (event) => {
    return {
        type: UPDATE_FORM_LAST,
        payload: event
    }
}
export const updateFormPhone = (event) => {
    return {
        type: UPDATE_FORM_PHONE,
        payload: event
    }
}
export const updateFormEmail = (event) => {
    return {
        type: UPDATE_FORM_EMAIL,
        payload: event
    }
}
export const handleOptionChange = (event) => {
    return {
        type: HANDLE_OPTION_CHANGE,
        payload: event
    }
}