import React from 'react';
import {Select} from 'antd';

interface OptionsProps {
    label?: string,
    text?: string,
    value: string,
}

export function getOptions(options: Array<OptionsProps>): React.ReactNode {
    return options.map((item, i) => (<Select.Option value={item.value} key={item.value}>
        {item.label || item.text}
    </Select.Option>));
}
