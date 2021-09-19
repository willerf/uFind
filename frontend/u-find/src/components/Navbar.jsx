import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import navbarStyles from '../styles/navbar.module.css'

function Navbar() {

  const [curPage, setCurPage] = useState ("home");

  const handleClick = (e) => {
    setCurPage(e.key)
  }


  return (
    <div className={navbarStyles.navbarHeader}>
      <div onClick={handleClick}>
        <Link to="/" className={navbarStyles.titleName}>uFind</Link>
      </div> 
      <div className={navbarStyles.menuSection}>
        <Menu mode="horizontal" onClick={handleClick} selectedKeys={[curPage]}>
          
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>

          <Menu.Item key="lost-and-found">
            <Link to="/lost-and-found">Lost And Found</Link>
          </Menu.Item>

          <Menu.Item key="add-self">
            <Link to="/add-self">Notify Me</Link>
          </Menu.Item>

        </Menu>
      </div>
    </div>
  )

}

export default Navbar;