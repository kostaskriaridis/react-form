function isExisty(value) {
    return value !== null && value !== undefined;
}

function isEmpty(value) {
    return value === '';
}

const validationRules = {
    isNotEmpty(value) {
        return isExisty(value) && !isEmpty(value);
    },

    maxLength(value, length) {
        return !isExisty(value) || value.length <= length;
    },

    minLength(value, length) {
        return !isExisty(value) || isEmpty(value) || value.length >= length;
    }
};

export default validationRules;
