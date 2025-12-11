
import { Dropdown as PRDropDown } from 'primereact/dropdown';
import { useState } from 'react';        

export default function Dropdown({options, value}) {

    const [selectedValue, setSelectedValue] = useState(value);

    return(
        <div>
            <h3 className='Example-Header'>Dropdown Component</h3>
            <PRDropDown 
                value={selectedValue} 
                onChange={(e) => setSelectedValue(e.value)} 
                options={options} 
                optionLabel='name'
                placeholder="Select a Gender"
                className="w-full md:w-14rem" 
                checkmark={true}  
                /> 
        </div>
    );


}


