import React, { useState } from 'react';
import Child from './Child';

function Parent(){
    const [showModal , setShowModal ] = useState(false);

    return(
        <div className='parent'>
            <h1>Parent Component</h1>
            <Child getShowModal={setShowModal} showModal={showModal} />
        </div>
    )
}

export default Parent;