import React from 'react'
import { useParams } from 'react-router-dom'

function EachListing() {
    const params = useParams();
    console.log(params);
  return (
    <div>EachListing</div>
  )
}

export default EachListing