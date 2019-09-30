import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Select, List, Skeleton, Icon} from 'antd';
import {getOptions} from 'utils';
import './index.less';

/**
 * 页面数据的props
 */
interface ListOptionsProps {
    loading: boolean,
    dataSource: Array<{ title: string, key: string | number }>
}

const IconText = ({type, text}: any) => (
    <span>
    <Icon type={type} style={{marginRight: 8}} />
        {text}
  </span>
);

const Home: React.FC = () => {
    // 数据初始值
    const initListOptions: ListOptionsProps = {loading: false, dataSource: []};
    const {labelType} = useParams();
    // 记录当前的数据类型
    const [dataType, setDataType] = useState('popular');
    // 热榜下拉的值
    const [hottestValue, setHottestValue] = useState('three_days_hottest');
    // 热榜的下拉数据
    const hottestOptions = [
        {
            label: '3天内',
            value: 'three_days_hottest'
        },
        {
            label: '7天内',
            value: 'weekly_hottest'
        },
        {
            label: '30天内',
            value: 'monthly_hottest'
        },
        {
            label: '全部',
            value: 'hottest'
        }
    ];
    // 页面数据
    const [listOptions, setListOptions] = useState(initListOptions);

    // 获取数据
    const getData = useCallback(async () => {
        setListOptions(v => ({...v, loading: true}));
        setTimeout(() => {
            setListOptions(v => ({...v, loading: false, dataSource: [{title: '第一项', key: 1}]}));
        }, 1000);
    }, []);


    // 设置 数据类型
    function setListDataType(type: string) {
        setDataType(type);
        if (type.includes('hottest')) setHottestValue(type);
        getData();
    }

    // 热榜下拉change
    function handleChange(val: string) {
        setHottestValue(val);
        setDataType(val);
        getData();
    }

    // cdm
    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <article className='home'>
            <section className="home-list-container">
                {/* header */}
                <header className="home-list-container-header">
                    <section className={['header-item', dataType === 'popular' && 'active'].join(' ').trim()}
                             onClick={() => setListDataType('popular')}>
                        热门
                    </section>
                    <section className={['header-item', dataType === 'newest' && 'active'].join(' ').trim()}
                             onClick={() => setListDataType('newest')}>
                        最新
                    </section>
                    <section className={['header-item', dataType.includes('hottest') && 'active'].join(' ').trim()}
                             onClick={() => setListDataType('three_days_hottest')}>
                        热榜
                    </section>
                    {/* 热榜的下拉搜索 */}
                    {dataType.includes('hottest') && <Select value={hottestValue}
                                                             onChange={handleChange}
                                                             className='hottest-select'>
                        {getOptions(hottestOptions)}
                    </Select>}
                </header>
                <main className="home-list-wrap">
                    {
                        listOptions.loading
                            ? <Skeleton active className='list-item' />
                            : <List itemLayout="vertical"
                                    size="large"
                                    dataSource={listOptions.dataSource}
                                    renderItem={item => (
                                        <List.Item className='list-item'
                                                   key={item.key}
                                                   actions={[
                                                       <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                                                       <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                                                       <IconText type="message" text="2" key="list-vertical-message" />
                                                   ]}>
                                            {item.title}
                                        </List.Item>
                                    )} />
                    }

                </main>

                <p>
                    大的数据类型 : {labelType}
                </p>
                <p>
                    搜索数据类型 : {dataType}
                </p>
            </section>
            <aside className="home-aside">
                广告位
            </aside>
        </article>
    );
};

export default Home;
