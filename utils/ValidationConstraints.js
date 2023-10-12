import { validate } from 'validate.js'

export const validateString = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false,
        },
    }

    if (value !== '') {
        constraints.format = {
            pattern: '[a-z]+',
            flags: 'i',
            message: 'O valor só pode conter letras',
        }
    }

    const validationResult = validate({ [id]: value }, { [id]: constraints })
    return validationResult?.id
}

export const validateEmail = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false,
        },
    }

    if (value !== '') {
        constraints.email = true
    }

    const validationResult = validate({ [id]: value }, { [id]: constraints })
    return validationResult?.id
}

export const validatePassword = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false,
        },
    }

    if (value !== '') {
        constraints.length = {
            minimum: 6,
            message: 'deve ter pelo menos 6 caracteres',
        }
    }

    const validationResult = validate({ [id]: value }, { [id]: constraints })
    return validationResult?.id
}
