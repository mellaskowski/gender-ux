
import { Dropdown as PRDropDown } from 'primereact/dropdown';
        

export default function Dropdown({options, onChange}) {


    return(
        <PRDropDown value={options} onChange={onChange} options={options} optionLabel="name" placeholder="Select a Gender" /> 
    );


}


