import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const API_KEY = '8e7fa93f'

export class Details extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = { movie: {} }

  _fetchMovie = ({ movieId }) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
      .then(res => res.json())
      .then(movie => {
        console.log({movie})
        this.setState({ movie })
      })
  }

  componentDidMount () {
    console.log(this.props)
    const { movieId } = this.props.match.params
    this._fetchMovie({ movieId })
  }

  render () {
    const {
      Title,
      Poster,
      Actors,
      Metascore,
      Plot
    } = this.state.movie

    return (
      <div>
        <Link className='button' to='/'>Volver</Link>
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    )
  }
}
