import React, { Component } from 'react'
import Actor from './Actor'

class Movie extends Component {
  const {title, director, cast} = this.props
  render () {
    return (
      <div>
        <h4>Title: {title}</h4>
        <p>Director: {director}</p>
        <p>Starring:</p>
        <ul>
          {cast.map(actor => (
            <Actor
              key={actor.name}
              name={actor.name}
              role={actor.role}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Movie
