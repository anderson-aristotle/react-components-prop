import React, { Component } from 'react'
import Actor from './Actor'

class Movie extends Component {
  render () {
    return (
      <div>
        <h4>Title: {this.props.title}</h4>
        <p>Director: {this.props.director}</p>
        <p>Starring:</p>
        <ul>
          {this.props.cast.map(actor => (
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
