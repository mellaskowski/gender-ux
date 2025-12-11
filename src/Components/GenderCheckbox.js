

export default function GenderCheckbox({options}) {

    return(
        <div className="card flex justify-content-center">
            <div className="flex flex-column gap-3">
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
        
    )
}