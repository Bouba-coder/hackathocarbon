import { useState, useCallback } from 'react';

const useForm = (initialValues, onSubmit) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;

        if (name.includes('[')) {
        const [fieldName, index] = name.split(/[\[\]]/).filter(Boolean);
        const updatedValues = [...values[fieldName]];
        updatedValues[index] = value;

        setValues((prevValues) => ({
            ...prevValues,
            [fieldName]: updatedValues,
        }));
        } else {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        }
    }, [values]);

    const handleSubmit = useCallback(
        (event) => {
        event.preventDefault();
        onSubmit(values);
        },
        [onSubmit, values]
    );

    return {
        values,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
