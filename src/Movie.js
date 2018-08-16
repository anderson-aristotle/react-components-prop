import React, { Component } from 'react'

class Movie extends Component {
  render () {
    return (
      <h4>Title: {this.props.title}</h4>
    )
  }
}

export default Movie
