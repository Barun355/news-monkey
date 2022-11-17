import React, { Component } from 'react'
import loader from './loader.gif'
export default class Loader extends Component {
  render() {
    return (
      <div className="text-center">
        <img className="m-4" src={loader} alt="loader" />
      </div>
    )
  }
}
