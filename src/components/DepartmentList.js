import React, { Component } from 'react'
import Link from './Department'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class DepartmentList extends Component {
  render() {

    // 1
  if (this.props.academicDeptQuery && this.props.academicDeptQuery.loading) {
    return <div>Loading</div>
  }

  // 2
  if (this.props.academicDeptQuery && this.props.academicDeptQuery.error) {
    return <div>Error</div>
  }

  // 3
  const linksToRender = this.props.academicDeptQuery.facultyDepartments.edges

    return (
      <div class = "AcademicDepartments">
        {linksToRender.map(link => <Link key={link.node.id} link={link}/>)}
      </div>
    )
  }
}

// 1
const ACADEMIC_DEPT_QUERY = gql`
  # 2
  query AcademicDeptQuery {
  facultyDepartments(first: 100) {
    edges {
      node {
        id
        url: link
        title: name
      }
    }
  }
}
`

// 3
export default graphql(ACADEMIC_DEPT_QUERY, { name: 'academicDeptQuery' }) (DepartmentList)