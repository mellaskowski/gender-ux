import { Checkbox } from 'primereact/checkbox'; 
import { useState } from 'react';

export default function GenderCheckbox({options, category}) {
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
        <div className="card">
                                        <h2>{category} ?   </h2>

            <div className="flex flex-column gap-8">
                {options.map((option) => {
                    return (
                       
                            <span key={option.key} className="checkbox-label">
                                <Checkbox 
                                    inputId={option.key}
                                    name="option" 
                                    value={option} 
                                    onChange={onOptionChange} 
                                    />
                                <label htmlFor={option.key} className="ml-2">
                                    {option.name}
                                </label>
                            </span>
                       
                    );
                })}
            </div>
        </div>
    )
}