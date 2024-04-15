import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import Pagination from './Pagination'
import './App.css'
import apiCall from '../ts_files/apiCall'
import apiSearchCall from '../ts_files/apiSeachCall'
import { useParams } from 'react-router-dom'

interface Props {
  search: boolean
}

function App({search}: Props) {

  const key = '91a8f5fcc7944a1c669b5bd7e89c3b78'
  const url1 = 'https://api.themoviedb.org/3/movie/popular?language=en-US'
  const url2 = 'https://api.themoviedb.org/3/search/movie?language=en-US'
  const [movieList, setMovieList] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)
  const {query} = useParams()

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber)
    apiCall(key, url1, pageNumber, setMovieList, setTotalPages);
  };

  useEffect(()=>{
    if (!search) {
      apiCall(key,url1,currentPage,setMovieList,setTotalPages)}
    else {
      apiSearchCall(key,url2,query,currentPage,setMovieList,setTotalPages)
    }}
  ,[search])

  return <>
    <div className='grid-container'>
    {
      movieList.map(movie =>
        <MovieCard
        movie_title={movie['title']}
        poster_url={movie['poster_path']}
        rating={movie['vote_average']}
        vote_number={movie['vote_count']}
        id={movie['id']}>
        </MovieCard>)
    }
    </div>
    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </>
  
}

export default App