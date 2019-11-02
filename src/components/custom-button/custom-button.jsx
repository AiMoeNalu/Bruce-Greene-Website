import React from 'react'

import './custom-button.scss';

const CustomButton = ({name}) => (
    <button type='button' onClick={()=>console.log("Test")}>
        {name}
    </button>
);

export default CustomButton;