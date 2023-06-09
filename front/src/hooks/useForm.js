import { useState } from 'react';

const useForm = (initialValues, onSubmit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const formErrors = validate(values);
        // setErrors(formErrors);

        // if (Object.keys(formErrors).length === 0) {
        //     onSubmit(values);
        // }
        onSubmit(values);
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
    };
};

export default useForm;
