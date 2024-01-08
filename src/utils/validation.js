import { useEffect, useState } from "react";
import { re } from "./consts";

const useValidatiion = (value, validations) => {
    const [validationError, setValidationError] = useState('')
    const [isFormValid, setIsFormValid] = useState(true)
    useEffect(() => {
        let newError = '';
        for (const validation in validations) {
            switch (validation) {
                case 'isEmail':
                    if (!value.toLowerCase().match(re))
                        newError = 'Неправильный формат почты a@ya.ru';
                    break;
                case 'minLength':
                    if (value.length < validations[validation])
                        newError = `Длинна должна быть больше ${validations[validation]}`;
                    break;
                case 'maxLength':
                    if (value.length > validations[validation])
                        newError = `Длинна должна быть меньше ${validations[validation]}`;
                    break;
                case 'isEmpty':
                    if (!value)
                        newError = 'Поле не может быть пустым';
                    break;
                case 'notOld':
                    if(value === validation[validation])
                        newError = `Данные не должны совпадать с изначальными`;
                    break;
                default:
                    console.log("unknown validator");
                    break;
            }
        }
        if (newError)
            setValidationError(newError);
        else
            setValidationError('')
    }, [value])

    useEffect(() => {
        if (validationError)
            setIsFormValid(false)
        else
            setIsFormValid(true)
    }, [validationError])

    return { validationError, isFormValid }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setIsDirty] = useState(false);
    const validation = useValidatiion(value, validations)
    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onBlur = (e) => {
        setIsDirty(true)
    }

    return {
        setValue,
        value,
        onChange,
        onBlur,
        isDirty,
        ...validation
    }
}
