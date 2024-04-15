import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetails.css'
import apiDetailsCall from '../ts_files/apiDetailsCall'

const MovieDetails = () => {
  const { id } = useParams()
  const url = `https://api.themoviedb.org/3/movie/${id}`
  const key = '91a8f5fcc7944a1c669b5bd7e89c3b78'
  const [details, SetDetails] = useState(
    {
    poster_path: '',
    original_title: '',
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
    release_date: '',
    production_countries: [],
    genres: [],
    overview: ''
  }
)

  useEffect(() => {
    apiDetailsCall(key, url, SetDetails)
  }
    , [])
  return <>
  <div className='local'>
  {/* div one start */}
    <div className="card mb-3 div1">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={'https://media.themoviedb.org/t/p/w220_and_h330_face' + details['poster_path']} className="img-fluid rounded-start" alt='...'></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{details['original_title']}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">socre: {details['vote_average']} from {details['vote_count']} votes</li>
              <li className="list-group-item">country: {details['production_countries'].map(country => country['iso_3166_1'] + ' ')}</li>
              <li className="list-group-item">runtime: {details['runtime']} minutes</li>
              <li className="list-group-item">release date: {details['release_date']}</li>
              <li className="list-group-item">genres: {details['genres'].map(genre => genre['name'] + ' ')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  {/* div one end */}

  {/* div two start */}
    <div className="card div2">
      <div className="card-body">
        <p className="card-text">{details['overview']}</p>
      </div>
    </div>
    {/* div two end */}

  </div>
  </>
}
export default MovieDetails