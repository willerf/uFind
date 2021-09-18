
import React, { useState, useEffect } from 'react';

import lostFoundStyles from "../styles/lostFound.module.css";
import NewItem from "../components/NewItem"
import axios from 'axios'

import { Input } from 'antd';
const { Search } = Input;

function LostAndFound() {

    const [itemList, setItemList] = useState([]);

    function onSearch(result) {
        let data_packet = {
            search: result,
        }
        console.log(data_packet);
        axios.post('http://localhost:3001/getSearchItems', data_packet).then(res => {
            console.log(res);
            setItemList(res.data);
            
          })

        console.log(result)
    }

    useEffect(() => {
        axios.get('http://localhost:3001/getAllItems').then(res => {
            setItemList(res.data);
        })
    }, []);

    return (
        <div className={lostFoundStyles.fullPage}>
            <div className={lostFoundStyles.title}>
                LostAndFound
            </div>
            <div className={lostFoundStyles.topBar}>
            <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
            />
            <NewItem />

            </div>
            <div className={lostFoundStyles.cardHolder}>
                {itemList.map((item, index) => 
                    <div className={lostFoundStyles.card}>
                        Description: {item.description}<br/>
                        Location: {item.status}<br/>
                        Finder Name: {item.finderName}<br/>
                        Finder Email: {item.finderEmail}<br/>
                        Potential Owner: {item.owner}<br/>
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default LostAndFound;