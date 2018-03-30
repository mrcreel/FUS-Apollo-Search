import React, { Component } from 'react'



class Department extends Component {
  render(){
    return (
      <div>
        <a
          className='ml1 no-underline black '
          target='_blank'
          href = {this.props.link.node.url}
        >
          {this.props.link.node.title}
        </a>
        </div>
    )
  }
}

export default Department