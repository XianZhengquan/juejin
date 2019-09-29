import React from 'react';
import {useParams} from 'react-router-dom';

const Pins: React.FC = () => {
    const {pinsType} = useParams();

    return (
        <article className='pins'>
            当前数据类型 : {pinsType}
        </article>
    );
};

export default Pins;
