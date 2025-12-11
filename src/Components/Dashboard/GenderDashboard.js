import { Chips } from 'primereact/chips';
import Dropdown from '../Dropdown';
import { useState } from 'react';
import GenderCheckbox from '../GenderCheckbox';

export default function GenderDashboard({props}) {
    
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
            <div className='Example-Container'>
                <Dropdown options={genderOptions}

                />
            </div>
            <div className='Example-Container'>
                <GenderCheckbox options={genderOptions} />
            </div>
      </div>
    );
}