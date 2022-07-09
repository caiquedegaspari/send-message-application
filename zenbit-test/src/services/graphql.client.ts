import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const apiURI = createHttpLink({
  uri: /* 'https://nestle-panela-api-dev.redfox.dev/graphql' */ 'http://localhost:4000/graphql'
})

const authorization = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers
    }
  }
})
const apolloClient = new ApolloClient({
  link: authorization.concat(apiURI),
  cache: new InMemoryCache()
})

export { apolloClient }
