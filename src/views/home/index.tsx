import React from 'react';
import {useParams} from 'react-router-dom';

const Home: React.FC = () => {
    const {labelType} = useParams();

    return (
        <article className='home'>
            当前数据类型 : {labelType}
        </article>
    );
};

export default Home;
