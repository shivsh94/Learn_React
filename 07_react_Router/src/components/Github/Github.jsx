import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect(() => {
       fetch('https://api.github.com/users/shivsh94')
       .then(response => response.json())
       .then(data => {
            console.log(data);
            setdata(data)
       })
    }, [])
  return (
    <div className='text-center m-4  bg-slate-600 text-white
    p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
