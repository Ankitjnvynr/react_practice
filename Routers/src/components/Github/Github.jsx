import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data =useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/ankitjnvynr')
    // .then(response=>response.json())
    //       .then(data => {
    //       console.log(data);
    //       setData(data)
    //   })
    // }, [])
    
  return (
      <div className='text-center m-4 bg-green-600 text-3xl text-white'>
          Github followers:{data.followers}
          <img className='rounded-full m-4' src={data.avatar_url} alt="Git Pic" width={300} />
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/ankitjnvynr")
    return response.json()
}
