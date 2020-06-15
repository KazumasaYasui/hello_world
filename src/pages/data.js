import React from 'react'
import { graphql } from 'gatsby'

const Data = ({ data }) => (
  data.posts.map(({ node }, index) =>(
    <div key={ index }>
      <div>{ node.id }</div>
      <div>{ node.title }</div>
    </div>
  ))
)

export const query = graphql`
    query MyQuery {
        allItem {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
#    query Post($campaignId:ID = "1") {
#        posts(campaignId:$campaignId) {
#            id
#            title
#        }
#    }
`

export default Data
