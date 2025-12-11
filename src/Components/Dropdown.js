
import { Dropdown as PRDropDown } from 'primereact/dropdown';
        

export default function Dropdown({options, onChange, value}) {


    return(
        <div>
            <h3 className='Example-Header'>Dropdown Component</h3>
            <PRDropDown 
                value={value} 
                onChange={onChange} 
                options={options} 
                optionLabel="gender" 
                placeholder="Select a Gender"
                className="w-full md:w-20rem" 
                checkmark={true}  
                highlightOnSelect={true}
                /> 
        </div>
    );


}


