/**
 * @param {number|string} value
 * @returns {boolean} value не равен null и undefined
 */
function isExisty(value) {
    return value !== null && value !== undefined;
}

/**
 * @param {number|string} value
 * @returns {boolean} value равен пустой строке
 */
function isEmpty(value) {
    return value === '';
}

export default {
    isNotEmpty(values, value) {
        return isExisty(value) && !isEmpty(value);
    },

    maxLength(values, value, length) {
        return !isExisty(value) || value.length <= length;
    },

    minLength(values, value, length) {
        return !isExisty(value) || isEmpty(value) || value.length >= length;
    },

    isEmail(values, value) {
        return this.matchRegexp(values, value, /^((([a-z]|\d|[!#%&'\-=_`{}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#%&'\-=_`{}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i);
    },

    matchRegexp(values, value, regexp) {
        return !isExisty(value) || isEmpty(value) || regexp.test(value);
    }
};
