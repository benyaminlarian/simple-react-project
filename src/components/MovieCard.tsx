import './MovieCard.css'
interface Props {
    movie_title: string,
    poster_url: string,
    rating: number,
    vote_number: number,
    id: number,
}

export default ({movie_title, poster_url, rating, vote_number, id}:Props)=>{
   const link = `http://localhost:5173/Details/${id}`
   return <>
    <div className="card local">
  <img src={'https://media.themoviedb.org/t/p/w220_and_h330_face'+poster_url} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{movie_title}</h5>
    <p className="card-text">rating: {rating} from {vote_number} votes</p>
    <a href={link} target="_blank" className="btn btn-primary">Details</a>
  </div>
</div>
</> 
}