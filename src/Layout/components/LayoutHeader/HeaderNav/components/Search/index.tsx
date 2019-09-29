import React from 'react';
import {Input, Icon} from 'antd';

const Search: React.FC = () => {

    return (
        <article className='search'>
            <Input suffix={<Icon type='search' style={{cursor: 'pointer'}} />}
                   style={{width: '156px'}}
                   placeholder='搜索掘金' />
        </article>
    );
};

export default Search;
