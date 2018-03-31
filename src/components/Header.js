import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'


class Header extends Component {
  render() {
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <Link to="/departments" className="ml1 no-underline black">
            Departments
          </Link>
          <div className="ml1">|</div>
          <Link to="/faculty" className="ml1 no-underline black">
            Faculty
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)