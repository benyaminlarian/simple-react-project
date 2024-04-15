import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import MainContainer from "./MainContainer";
import './NavBar.css'


const NavBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate();

  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)
  const handleSearch = () => {
    console.log('searched')
    navigate(`/Search/${query}`);
  }

  return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Movie App</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={handleSearchBar}></input>
            <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
          </form>
        </div>
      </div>
    </nav>
    <MainContainer></MainContainer>
  </>
    ;
}

export default NavBar; 