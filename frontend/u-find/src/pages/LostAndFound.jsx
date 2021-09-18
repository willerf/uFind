
import React, { useState } from 'react';

import lostFoundStyles from "../styles/lostFound.module.css";
import NewItem from "../components/NewItem"
import axios from 'axios'

import { Input } from 'antd';
const { Search } = Input;

let itemList = {
    items: [
        {
            title: "title1",
            description: "description",
            status: "location",
            finderName: "firstName lastName",
            finderEmail: "fLast@uwaterloo.ca",
            uploadDate: new Date(),
        },
        {
            title: "title2",
            description: "description",
            status: "location",
            finderName: "firstName lastName",
            finderEmail: "fLast@uwaterloo.ca",
            uploadDate: new Date(),
        },
        {
            title: "title3",
            description: "description",
            status: "location",
            finderName: "firstName lastName",
            finderEmail: "fLast@uwaterloo.ca",
            uploadDate: new Date(),
        },
        {
            title: "title1",
            description: "description",
            status: "location",
            finderName: "firstName lastName",
            finderEmail: "fLast@uwaterloo.ca",
            uploadDate: new Date(),
        },
        {
            title: "title2",
            description: "description",
            status: "location",
            finderName: "firstName lastName",
            finderEmail: "fLast@uwaterloo.ca",
            uploadDate: new Date(),
        },
        {
            title: "title3",
            description: "description",
            status: "location",
            finderName: "firstName lastName",
            finderEmail: "fLast@uwaterloo.ca",
            uploadDate: new Date(),
        }
    ]
}

function LostAndFound() {

    function onSearch(result) {
        axios.post('http://localhost:3001/getSearchItems', result).then(res => {
            console.log(res);
            //itemsList = res.data;
          })

        console.log(result)
    }

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
                {itemList.items.map((item, index) => 
                    <div className={lostFoundStyles.card}>
                        {item.title}<br />
                        {item.description}
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default LostAndFound;