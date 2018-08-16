import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'

import Movie from './Movie.js'

const movies = ['Dr. Strangelove', 'Eraserhead', 'Fantastic Mr. Fox']

const App = () => (
  <div>
    <h1>Welcome to React!</h1>
    {movies.map(title => (
      <Movie key={title} title={title} />
    ))}
  </div>
)

export default App
