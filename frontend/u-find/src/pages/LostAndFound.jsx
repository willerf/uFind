
import React, { useState } from 'react';

import lostFoundStyles from "../styles/lostFound.module.css";

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

    return (
        <div className={lostFoundStyles.fullPage}>
            <div className={lostFoundStyles.title}>
                LostAndFound
            </div>
            <div className={lostFoundStyles.searchBar}>
                Search Bar
            </div>
            <div className={lostFoundStyles.cardHolder}>
                {itemList.items.map((item, index) => 
                    <div className={lostFoundStyles.card}>
                        {item.title}
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default LostAndFound;