import {
    validateString
} from '../ValidationConstraints'

export const validateInput = (inputId, inputValue) => {
    if (
        inputId === 'name' ||
        inputId === 'bloodType' ||
        inputId === 'location' ||
        inputId === 'phoneNumber'
    ) {
        return validateString(inputId, inputValue)
    }
}
