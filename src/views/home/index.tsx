import React from 'react';

const Home: React.FC = ({history}: any) => {

    return (
        <article className='Home'>
            <button onClick={() => history.push('/about')}>home</button>
        </article>
    );
};

export default Home;
