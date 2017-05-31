import validationRules from './validationRules';

/**
 * Добавить кастомное правило валидации
 * @param {string} name Название валидации
 * @param {Function} func Функция валидации
 */
export default function addValidationRule(name, func) {
    validationRules[name] = func;
}
