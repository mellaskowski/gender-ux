import { Chips } from 'primereact/chips';
import Dropdown from '../Dropdown';
import { useState } from 'react';

export default function GenderDashboard({props}) {

      const [selectedGender, setSelectedGender] = useState(null);
    
      const genderOptions = [
        { name: 'Man', code: 'M' },
        { name: 'Woman', code: 'F' },
        { name: 'Non-binary', code: 'NB' },
        { name: 'Agender', code: 'A' },
        { name: 'Genderqueer', code: 'GQ' },
        { name: 'Prefer not to say', code: 'PNTS' },
        { name: 'Other', code: 'O' }
      ];

    return(
        <div>
            <Dropdown options={genderOptions} onChange={setSelectedGender} value={selectedGender} />
        </div>
            
      
    );
}