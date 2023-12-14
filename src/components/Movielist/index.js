import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const Movielist = () => {
  const [data, SetData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const authToken = Cookies.get('jwt_token')
      const response = await axios.get('https://apis.ccbp.in/videos/all', {
        headers: {
          Authorization: `Bearer ${authToken}`,
          // Add any other headers as needed
        },
      })
      SetData(response.data.videos)
    }

    fetchData()
  }, [])
  console.log(data)
  return (
    <div
      className=""
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginLeft: '7rem',
        gap: '2rem',
      }}
    >
      {data.map(each => (
        <div style={{maxWidth: '300px'}}>
          <img style={{maxWidth: '270px'}} src={each.thumbnail_url} alt="" />
          <p>{each.title}</p>
          <p>{each.channel.name}</p>
          <span>{each.view_count} views</span>
        </div>
      ))}
    </div>
  )
}

export default Movielist
