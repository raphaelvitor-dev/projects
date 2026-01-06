import { useState, useEffect } from 'react'
import './App.css'
import Tile from '../src/components/Tile/Tile'
import type { PropertyListing } from './dataTypes'
import uuid from 'react-uuid'

function App() {
  const [propertyListingResult, setPropertyListingResult] = useState<PropertyListing[]>([])
  useEffect(() => {
    fetch('https://localhost:7014/api/PropertyListings')
    .then(response=>response.json())
    .then(
      data=>{
        setPropertyListingResult(data); 
      });
  }, [])

 useEffect(() => {
  console.log(propertyListingResult);
 }, [propertyListingResult])

  return (
    <>
    {propertyListingResult.length > 0 ?
    (propertyListingResult.map((result) =>{
    return <Tile key={uuid()} type={result.propertyType} value={result.propertyValue} info={result.propertyInfo}/>
    })) : (<p>No Results!</p>)}

    
      
    </>
  )
}

export default App
