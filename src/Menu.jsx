import React from 'react'
import { MenuList } from './MenuList'
import MenuItem from './MenuItem'
import './Menu.css'

const Menu = () => {
  return (
    <div className='menu'>
    <div className='menuTitle'>
        <div className='menuList'>
        {MenuList.map((menuItem,index)=>{
            return (
                <MenuItem key={index} image={menuItem.image} price={menuItem.price} name={menuItem.name}/>
            )
        })}

        </div>
    </div>
      
    </div>
  )
}

export default Menu
