import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import App from './components/App'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import MovieDetails from './components/MovieDetails'
import './index.css'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<NavBar/>}>
      <Route path='/' element={<App search={false}/>}></Route>
      <Route path='/Search/:query' element={<App search={true}/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Details/:id' element={<MovieDetails/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)