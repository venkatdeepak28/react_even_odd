// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {value: 0}

  trueFalseFirst = () => {
    const random = Math.floor(Math.random() * 100)
    this.setState(prevState => ({value: prevState.value + random}))
  }

  render() {
    const {value} = this.state
    let authButtonFirst
    if (value % 2 === 0) {
      authButtonFirst = <p className="para">Count is Even</p>
    } else {
      authButtonFirst = <p className="para">Count is Odd</p>
    }

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Count {value}</h1>
          {authButtonFirst}
          <button
            className="custom-btn"
            type="submit"
            onClick={this.trueFalseFirst}
          >
            Increment
          </button>
          <p className="para-value">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
