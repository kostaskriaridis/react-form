/**
 * Рекурсивно преобразует объект в плоскую структуру
 */
function recursive(object, property, value) {
    const isArray = Array.isArray(value);
    const isObject = Object.prototype.toString.call(value) === '[object Object]';

    if (isArray || isObject) {
        Object.keys(value).forEach(function(val) {
            const prop = isArray ? `${property}[${val}]` : `${property}.${val}`;
            recursive(object, prop, value[val]);
        });
        return object;
    }

    object[property] = value;

    return object;
}

/**
 * Преобразует иерархическую структуру объекта в плоскую
 * Из этого:
 * {
 *     user: {
 *         name: 'Kostas',
 *         age: '24'
 *     },
 *     skills: ['html', 'css', 'js']
 * }
 *
 * в это:
 * {
 *     'user.name': 'Kostas',
 *     'user.age': '24',
 *     'skills[0]': 'html',
 *     'skills[1]': 'css',
 *     'skills[2]': 'js'
 * }
 *
 * @params {Object} object
 * @returns {Object}
 */
export function flatten(object) {
    const keys = Object.keys(object);

    return keys.reduce((result, property) => {
        return recursive(result, property, object[property]);
    }, {});
}
