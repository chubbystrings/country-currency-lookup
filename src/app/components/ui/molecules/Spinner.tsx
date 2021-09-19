import React from 'react';

import { SpinLoader } from '../../styles/Spinner.style';

const Spinner: React.FC<{ width?: string; height?: string; color?: string}> = (props) => {
    return (
        <SpinLoader width={props.width} height={props.height} color={props.color}/>
    )
}

export default Spinner
