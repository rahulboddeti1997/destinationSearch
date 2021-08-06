// Write your code here

import './index.css'
import {Component} from 'react'

class DestinationSearch extends Component {
  render() {
    const {initialDestinationsList} = this.props

    return (
      <div className="container">
        <h1>{initialDestinationsList}</h1>
      </div>
    )
  }
}

export default DestinationSearch
