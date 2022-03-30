import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const MenuItem = ({image,name,price}) => {
  return (
    <div className='menuItem'>
    <div style={{backgroundImage:`url(${image})`}}></div>
    <h1>{name}</h1>
    <div className='rupee'>
    <p><CurrencyRupeeIcon/></p>
    <p>{price}</p>
    </div>
    </div>
  )
}

export default MenuItem
