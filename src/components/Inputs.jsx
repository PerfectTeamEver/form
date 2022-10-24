import React from 'react';

function Inputs({onChange, placeholder, values}) {
    return(
        <div className='input-style'>
            <input type="text" value={values} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default Inputs;