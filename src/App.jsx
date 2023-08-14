// import { useState } from 'react'
import NavBar from './Components/NavBar'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import ShowsList from './Components/Shows Relevant/ShowsList'
import ShowsNewForm from './Components/Shows Relevant/ShowsNewForm'

// console.log("Some Default Environment Keys:", import.meta.env)

function App() {
  const var10_1 = import.meta.env.VITE_10_1_VAR
  // console.log("One of Our Environment Variables:", import.meta.env.VITE_10_1_VAR)
  // console.log("One of Our Environment Variables:", var10_1)

  return (
    <>
      <Router>

        <header>
          <h1>ScreenViews</h1>
          <h2> -TEST- {var10_1}</h2>
          <br />
          <NavBar />
        </header>

        <Routes>

          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/shows' element={<ShowsList />} />
          <Route path='/shows/new' element={<ShowsNewForm />} />
          <Route path='/movies' element={<h1> All Movies </h1>} />
          <Route path='/movies/new' element={<h1>Form for New Movie </h1>} />
        </Routes>

        <footer>
          10.1 ©

        </footer>
      </Router >
    </>
  )
}

export default App



/*

api/shows

api/movies 


RESTFUL CONVENTIONS / RESTFUL ROUTING


CRUD for Shows
Shows Endpoint 


CRUD          Action       Request      Relevant Route (Frontend) 

Create                       POST           shows/new
Read                         GET            shows/ (index) OR /shows/:id
Update
Destroy


CRUD for Movies

CRUD          Action       Request      Relevant Route (API) 

Create                       POST           movies/new
Read                         GET            movies/ 
Update
Destroy
*/
