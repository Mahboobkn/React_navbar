import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {name} =useParams()
  return (
    <div><h1>User {name} Page</h1></div>
  )
}

export default User