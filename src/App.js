import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'

import Movie from './Movie.js'

const movies = [
  {
    id: 1,
    title: 'Dr. Strangelove',
    director: 'Stanley Kubrick',
    cast: [
      {
        name: 'Peter Sellers',
        role: 'President Merkin Muffley'
      },
      {
        name: 'George C. Scott',
        role: 'General Buck Turgidson'
      },
      {
        name: 'Slim Pickens',
        role: 'Major T.J. "King" Kong'
      }
    ]
  },
  {
    id: 2,
    title: 'Eraserhead',
    director: 'David Lynch',
    cast: [
      {
        name: 'Jack Nance',
        role: 'Henry Spencer'
      },
      {
        name: 'Charlotte Stewart',
        role: 'Mary X'
      },
      {
        name: 'Jeanne Bates',
        role: 'Mrs. X'
      }
    ]
  },
  {
    id: 3,
    title: 'Fantastic Mr. Fox',
    director: 'Wes Anderson',
    cast: [
      {
        name: 'George Clooney',
        role: 'Mr. Fox'
      },
      {
        name: 'Meryl Streep',
        role: 'Mrs. Fox'
      },
      {
        name: 'Bill Murray',
        role: 'Badger'
      }
    ]
  }
]

const App = () => (
  <div>
    <h1>Welcome to React!</h1>
    {movies.map(movie => (
      <Movie
        key={movie.id}
        title={movie.title}
        director={movie.director}
        cast={movie.cast}/>
    ))}
  </div>
)

export default App
