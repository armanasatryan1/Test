const useFormField = ({type, placeholder, options, onChange}) => {
    const getField = ({type, placeholder, options, onChange}) => {
        if (type === 'textarea') {
            return <textarea placeholder={placeholder} onChange={onChange} />;
        }

        if (type === 'select') {
            return (
                <select placeholder={placeholder} onChange={onChange}>
                    {options.map((option, index) => (
                        <option key={`form-select-${index}`}>{option}</option>
                    ))}
                </select>
            );
        }

        return (
            <input type={'text'} placeholder={placeholder} onChange={onChange} />
        );
    };

    const field = getField({type, placeholder, options, onChange});

    return {field}
}

export default useFormField;