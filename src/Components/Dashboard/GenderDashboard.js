import { Chips } from 'primereact/chips';
import Dropdown from '../Dropdown';
import { useState } from 'react';
import GenderCheckbox from '../GenderCheckbox';

export default function GenderDashboard({props}) {
    
      const genderOptions = [
        { name: 'Man', code: 'M', key: 0 },
        { name: 'Woman', code: 'F', key: 1 },
        { name: 'Non-binary', code: 'NB', key: 2 },
        { name: 'Agender', code: 'A', key: 3 },
        { name: 'Genderqueer', code: 'GQ', key: 4 },
        { name: 'Prefer not to say', code: 'PNTS', key: 5 },
        { name: 'Other', code: 'O', key: 6 }
      ];

    return(
        <div>
            <div className='Example-Container'>
                <Dropdown options={genderOptions}

                />
            </div>
            <div className='Example-Container'>
                <GenderCheckbox options={genderOptions} category={"you've got a gender ?"}/>
            </div>
      </div>
    );
}