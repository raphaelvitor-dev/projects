import React from 'react'
import "../Tile/Tile.css"
import house from '../../assets/house.jpg'

type Props = {
  type: string,
  value: number,
  info: string
}

const Tile = ({type, value, info}: Props) => {
  return (
    <div className='tileContainer'>
        <div className='tile'>
        <img className='propertyImg' src={house} alt='Luxury House'/>
        <div className='info'>
            <h2>{type}</h2>
            <p>{value}</p>
            <p className='infoDetail'>{info}</p>
        </div>
    </div>
    </div>
    
  )
}

export default Tile