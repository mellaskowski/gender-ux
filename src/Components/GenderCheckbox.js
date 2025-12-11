import { Checkbox } from 'primereact/checkbox'; 
import { useState } from 'react';

export default function GenderCheckbox({options}) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const onOptionChange = (e) => {
        let _selectedOptions = [...selectedOptions];
        if (e.checked)
            _selectedOptions.push(e.value);
        else
            _selectedOptions = _selectedOptions.filter(option => option.key !== e.value.key);

        setSelectedOptions(_selectedOptions);
    };

    return(
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-8">
                {options.map((option) => {
                    return (
                        <div key={option.key} className="flex align-items-center">
                            <Checkbox inputId={option.key} name="option" value={option} onChange={onOptionChange} checked={selectedOptions.some((item) => item.key === option.key)} />
                            <label htmlFor={option.key} className="ml-2">
                                {option.name}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}