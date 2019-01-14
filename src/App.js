import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'

import Movie from './Movie.js'

const movies = [{title: 'Dr. Strangelove'}, {title: 'Eraserhead'}, {title: 'Fantastic Mr. Fox'}]

const App = () => (
  <div>
    <h1>Welcome to React!</h1>
    {movies.map(movie => (
      <Movie key={movie.title} title={movie.title}/>
    ))}
  </div>
)

export default App
