import React from 'react';

function Child({getShowModal,showModal}){

    return(
        <div className='child'>
            <h2>Child Component</h2>
            <button onClick={ ()=>{ getShowModal(true) } } >Show Modal</button>

            {showModal && <div>
                <h3>Modal Content</h3>
                <h4>This is the Modal Content</h4>
            </div>}
        </div>
    )
}

export default Child;