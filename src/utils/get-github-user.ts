import memoize from 'memoizee'
import {gql, GraphQLClient} from 'graphql-request'
import slugify from 'slugify'
import _ from 'lodash'

const endpoint = 'https://api.github.com/graphql'

export interface Commit {
  user: any
}

export enum Login {
  vojtaholik = 'vojtaholik',
}

async function _getUser(): Promise<Commit[]> {
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_VIEWER_TOKEN}`,
    },
  })

  // https://docs.github.com/en/graphql/overview/explorer
  const query = gql`
    query {
      user(login: "vojtaholik") {
        contributionsCollection {
          pullRequestContributions(first: 10) {
            nodes {
              pullRequest {
                title
              }
            }
          }
        }
      }
    }
  `

  const response = await client.request(query)

  return response
}

export const getGithubUser = memoize(
  async () => {
    const commits = await _getUser()
    return commits
  },
  {promise: true},
)
