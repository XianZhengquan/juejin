import React from 'react';

const About: React.FC = ({history}: any) => {

    return (
        <article className='About'>
            <button onClick={() => history.push('/')}>about</button>
        </article>
    );
};

export default About;
