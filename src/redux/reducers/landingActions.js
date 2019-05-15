import {
    TOGGLE_BURGER,
    TOGGLE_MODAL,
    UPDATE_FORM_NAME,
    UPDATE_FORM_LAST,
    UPDATE_FORM_PHONE,
    UPDATE_FORM_EMAIL,
    HANDLE_OPTION_CHANGE
} from '../actions/actionTypes';

const INITIAL_STATE = {
    burgerActive: false,
    modalActive: false,
    formValidation: false,
    formFieldSet: {
        nameValue: '',
        lastValue: '',
        phoneValue: '',
        emailValue: ''
    }
}

export default (state = INITIAL_STATE, action) => {
    let { formFieldSet, burgerActive, modalActive } = state;
    const cloneState = () => {
        formFieldSet = Object.assign({}, formFieldSet);
        return {
            formFieldSet
        }
    } 

    switch (action.type) {
        case TOGGLE_BURGER:
            burgerActive = !burgerActive;

            return {
                ...state, burgerActive
            }

        case TOGGLE_MODAL:
            modalActive= !modalActive;

            return {
                ...state, modalActive
            }

        case HANDLE_OPTION_CHANGE:
            let changeRadio;
            changeRadio = true;
            
            return {
                ...state, changeRadio
            }
    

        case UPDATE_FORM_NAME:
            let nameVal;
            cloneState();

            formFieldSet.nameValue = action.payload.target.value;

            formFieldSet.nameValue.replace(/\s/g, '').length ? nameVal= true : nameVal = false;

            return {
                ...state, formFieldSet, nameVal
            }

        case UPDATE_FORM_LAST:
            let lastVal;
            cloneState();

            formFieldSet.lastValue = action.payload.target.value;

            formFieldSet.lastValue.replace(/\s/g, '').length ? lastVal= true : lastVal = false;

            return {
                ...state, formFieldSet, lastVal
            }

        case UPDATE_FORM_PHONE:
            let phoneVal;
            cloneState();

            var invalidChars = /\D+/gm;

            formFieldSet.phoneValue = action.payload.target.value;

            formFieldSet.phoneValue.replace(/\s/g, '').length ? phoneVal= true : phoneVal = false;

            if (invalidChars.test(formFieldSet.phoneValue)) {
                formFieldSet.phoneValue = formFieldSet.phoneValue.replace(invalidChars, "");
            }

            return {
                ...state, formFieldSet, phoneVal
            }

        case UPDATE_FORM_EMAIL:
            let mailVal;
            cloneState();

            formFieldSet.emailValue = action.payload.target.value;
            formFieldSet.emailValue.replace(/\s/g, '').length ? mailVal= true : mailVal = false;

            return {
                ...state, formFieldSet, mailVal
            }

        default:
            return state;
    }
}